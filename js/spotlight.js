const focusEl = document.querySelector('.focus');

document.addEventListener('mousemove', function (evt) {
  const x = evt.pageX;
  const y = evt.pageY;
  
  focusEl.style.setProperty('--x', `${x}px`);
  focusEl.style.setProperty('--y', `${y}px`);
});