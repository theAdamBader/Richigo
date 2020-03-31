const spotlightEle = document.querySelector('.focus');

document.addEventListener('mousemove', (e) => {
  const coords = {
    x: e.clientX,
    y: e.clientY
  }
  
  spotlightEle.style.setProperty('--x', `${coords.x}px`);
  spotlightEle.style.setProperty('--y', `${coords.y}px`);
})