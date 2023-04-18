const box1 = document.querySelector('.box:nth-child(1)');
const box2 = document.querySelector('.box:nth-child(2)');
const content2 = document.querySelector('.box:nth-child(2) .content');

box1.addEventListener('mouseenter', () => {
  content2.classList.add('animate');
});

box1.addEventListener('mouseleave', () => {
  content2.classList.remove('animate');
});
