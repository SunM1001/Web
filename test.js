const btn = document.querySelector('button');
const box = document.querySelector('story');

// div 클릭 시 act 클래스 토글
btn.addEventListener('click', () => {
  box.classList.toggle('act');
})