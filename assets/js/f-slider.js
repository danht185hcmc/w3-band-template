function moveSlider(status, index, sliderWrapper, sliderItem) {
  var direction;

  if (status === 'next') {
    index++;
    direction = '-';
  }
  if (status === 'pre') index--;

  if (index == sliderItem.length) {
    index = 0;
  }
  if (index == -1) {
    index = sliderItem.length - 1;
  }

  sliderWrapper.style.transform = `translateX(${
    direction + (100 / sliderItem.length) * index + '%'
  })`;

  return index;
}
