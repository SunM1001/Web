const container = document.querySelector('#image-container');
let currentImage = 0;

container.addEventListener('wheel', (event) => {
  event.preventDefault();

  const delta = Math.sign(event.deltaY);
  const images = container.querySelectorAll('img');
  const maxImage = images.length - 1;

  currentImage += delta;

  if (currentImage > maxImage) {
    currentImage = maxImage;
  } else if (currentImage < 0) {
    currentImage = 0;
  }

  images.forEach((image, index) => {
    if (index === currentImage) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});

