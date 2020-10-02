/* MODAL BOX CREATED FOR THE INDEX.HTML 
  *A modal box that was created so that when you press 'About me' it would open a modal box
  *The btn.onclick allows to open the box only if the button is press
  *If the button is not pressed then the openAnimation would remain hidden
  *The cls.onclick has a similar function as the btn.onclick
*/

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