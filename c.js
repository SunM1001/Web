// 변수 선언
var container = document.querySelector(".image-container");
var images = container.querySelectorAll("img");

var currentX = 0;
var dragStartX = 0;
var dragEndX = 0;
var threshold = 100;

// 드래그 이벤트 핸들러 등록
container.addEventListener("mousedown", dragStart);
container.addEventListener("mousemove", dragMove);
container.addEventListener("mouseup", dragEnd);
container.addEventListener("mouseleave", dragEnd);
container.addEventListener('wheel', wheelMove);

// 드래그 시작 시 호출되는 함수
function dragStart(e) {
  dragStartX = e.pageX - container.offsetLeft;
  currentX = container.scrollLeft;
}

// 드래그 중일 때 호출되는 함수
function dragMove(e) {
  if (dragStartX) {
    e.preventDefault();
    dragEndX = e.pageX - container.offsetLeft;
    var distance = dragEndX - dragStartX;
    container.scrollLeft = currentX - distance;
  }
}

// 드래그 종료 시 호출되는 함수
function dragEnd(e) {
  var distance = dragEndX - dragStartX;
  e.preventDefault();
  container.removeEventListener('mousemove', dragMove);
}


function scrollAnimate(start, end, duration) {
  var startTime = performance.now();
  function scroll() {
    var currentTime = performance.now();
    var time = Math.min(1, (currentTime - startTime) / duration);
    var easedTime = easeOutCubic(time);
    var scrollLeft = (end - start) * easedTime + start;
    container.scrollLeft = scrollLeft;
    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  }
  requestAnimationFrame(scroll);
}

function wheelMove(e) {
  e.preventDefault();
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var imageWidth = images[0].width; // 이미지 하나의 너비
  var currentScrollLeft = container.scrollLeft;
  var nextScrollLeft = currentScrollLeft - delta * imageWidth;
  scrollAnimate(currentScrollLeft, nextScrollLeft, 1000); // 500ms 동안 애니메이션 적용
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}