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