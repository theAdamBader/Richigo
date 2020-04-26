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

$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 

//SCROLL FUNCTION
$(document).ready(function(){

  $("a").on('click', function(event) {
  
      var hash = this.hash;

      if (this.hash !== "") {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
          });
      }

      $('#arrow-up').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
      });
  });
});

//SPOTLIGHT EFFECT
const spotlightEle = document.querySelector('.focus');

document.addEventListener('mousemove', (e) => {
  const coords = {
    x: e.clientX,
    y: e.clientY
  }
  
  spotlightEle.style.setProperty('--x', `${coords.x}px`);
  spotlightEle.style.setProperty('--y', `${coords.y}px`);
})

//IMAGE SLIDER
function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";

  setTimeout(function() {
      if (boxes.length > 3) {
          tmpNode.classList.add("hide-box");
          boxes[3].className = "box move-to-position3-from-left";
      }
      boxes[1].className = "box move-to-position1-from-left";
      boxes[2].className = "box move-to-position2-from-left";
      boxes[0].remove();

      document.querySelector(".cards-container").appendChild(tmpNode);

  }, 500);
}

function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[2].className = "box move-out-from-right";
  setTimeout(function() {
      const noOfCards = boxes.length;
      if (noOfCards > 2) {
          boxes[2].className = "box hide-box";
      }

      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("hide-box");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".cards-container");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "box move-to-position1-from-right";
      boxes[0].className = "box move-to-position2-from-right";
      boxes[1].className = "box move-to-position3-from-right";

  }, 500);
}