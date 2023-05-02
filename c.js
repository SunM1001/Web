var sliderContainer = document.querySelector('.slider-container');
var slider = document.querySelector('.slider');
var images = slider.querySelectorAll('img');

var currentImageIndex = 0;
var imageWidth = images[0].width;
var imageCount = images.length;

slider.style.width = (imageWidth * imageCount) + 'px';

function wheelMove(e) {
  e.preventDefault();
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  currentImageIndex -= delta;
  currentImageIndex = Math.max(0, Math.min(currentImageIndex, imageCount - 1));
  slider.style.transform = 'translateX(-' + (imageWidth * currentImageIndex) + 'px)';
}

sliderContainer.addEventListener('wheel', wheelMove);