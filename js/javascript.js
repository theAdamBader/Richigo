//MODAL BOX
var modal = document.getElementById("myModal");
var btn = document.getElementById("theButton");
var cls = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";

  if(!modal.classList.contains('theButton'))
  {
    modal.classList.add('openAnimation');
  } 

  modal.classList.remove('closeAnimation');
}

cls.onclick = function() {
  if(!modal.classList.contains('closeAnimation'))
  {
    modal.classList.add('closeAnimation');
  } 

  modal.classList.remove('openAnimation');
}

//SPOTLIGHT EFFECT
const spotlightEle = document.querySelector('.focus');

document.addEventListener('mousemove', (e) => {
  const coords = {
    x: e.clientX,
    y: e.clientY
  }
  
  spotlightEle.style.setProperty('--x', `${coords.x}px`);
  spotlightEle.style.setProperty('--y', `${coords.y}px`);
});