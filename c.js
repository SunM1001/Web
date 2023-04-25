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


function wheelMove(e) {
  e.preventDefault();
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  container.scrollLeft -= (delta * 30);
  
  // 마우스 휠 이벤트 발생 후 container 영역을 벗어나면 스크롤 초기화 방지
  if (e.pageX < container.offsetLeft || e.pageX > container.offsetLeft + container.offsetWidth) {
    container.scrollLeft += (delta * 30);
  }
}