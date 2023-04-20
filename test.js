var ani1 = document.querySelector('.story_ani');
var ani2 = document.querySelector('.form2');
var story = document.querySelector('.story');
var loadanimation1 = document.querySelector('.form1');
var loadanimation2 = document.querySelector('.form2');


ani1.addEventListener("mouseover", function() {
  ani2.style.transform = 'translateY(50px)';
  ani2.style.transition = 'all 1s';
  ani2.style.opacity = '1';
});

ani1.addEventListener("mouseout", function() {
  ani2.style.transform = 'translateY(-50px)';
  ani2.style.transition = 'all 1s';
  ani2.style.opacity = '1';
});


document.addEventListener('DOMContentLoaded', function() {
  loadanimation1.classList.add('animate');
});
