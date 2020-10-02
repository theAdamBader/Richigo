 /* LIGHTBOX IMAGES (PHOTOGRAPHY PAGE)
  *The overlay allows to find the light box ID and create the close tag to be able to close the overlay image
  *The $image grab the <img> tag so that later it can be use $image.attr('src', imageFile); to find the source attribution and the image souce file
  *The imageAlt finds the alt function and covert it into a caption that would then be automatically put into a <h3> tag
  *When the image is clicked then it would fade in within 0.5s for a smoother transition else when you close the image, the light box would hide
*/ 

$(document).ready(function(){ 
  var $overlay	= $("<div id='light-box'><span class='close-img'>&times</span></div>");
  var $image		= $('<img>');
  var $caption	= $('<h3></h3>');
  var imageFile;
  var imageAlt;

  $('body').append($overlay);	
  $overlay.hide();	

  $('.flex-img').click(function(){
    imageFile = $(this).attr('src');
    imageAlt = $(this).attr('alt');

    $overlay.append($image);
    $overlay.append($caption);
    $image.attr('src', imageFile);
    $caption.text(imageAlt);
    $overlay.fadeIn('500');	
    $image.fadeIn('500');
  });
  
  $("body").on("click", "#light-box span", function() {
    $("#light-box").hide();
  });
});

/* COOKIE BANNER 
  *A simple cookie banner that passes information to consumers that they would enjoy experience on a desktop that has a screen width of >= 786
  *It is set to have a timer where it will fade in for 0.2s and if the consumer presses 'OK' then it will fade out for 0.2
*/
$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieBanner").fadeIn(200);
   }, 4000);
  $("#closeCookieBanner, .cookieBannerOK").click(function() {
      $("#cookieBanner").fadeOut(200);
  }); 
}); 

/* SCROLL FUNCTION 
  *Reference: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
*/
$(document).ready(function(){

  $("a").on('click', function(event) {
  
      var hash = this.hash;

      if (this.hash !== "") {
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
          });
      }
  });
});