var sliderItem = document.querySelectorAll('.slider__item');
var sliderWrapper = document.querySelector('.slider-wrapper');
var index = 0;
var slideWidth = 100 / sliderItem.length + '%';

sliderItem.forEach((item) => {
  item.style.width = slideWidth;
});

var autoSlide = setInterval(() => {
  index = moveSlider('next', index, sliderWrapper, sliderItem);
}, 2000);
