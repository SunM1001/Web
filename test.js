var ani1 = document.querySelector('.story_ani');
var ani2 = document.querySelector('.con_ani');
var form2 = document.querySelector('.form2');
var form3 = document.querySelector('.form3');



var loadanimation1 = document.querySelector('.form1');
var loadanimation2 = document.querySelector('.form2');
var loadanimation3 = document.querySelector('.form3');


ani1.addEventListener("mouseover", function() {
  form2.style.transform = 'translateY(50px)';
  form2.style.transition = 'all 1s';
  form2.style.opacity = '1';
});

ani1.addEventListener("mouseout", function() {
  form2.style.transform = 'translateY(-50px)';
  form2.style.transition = 'all 1s';
  form2.style.opacity = '1';
});


document.addEventListener('DOMContentLoaded', function() {
  loadanimation1.classList.add('animate');
});

document.addEventListener('DOMContentLoaded', function() {
  loadanimation2.classList.add('animate');
});

document.addEventListener('DOMContentLoaded', function() {
  loadanimation3.classList.add('animate');
});

