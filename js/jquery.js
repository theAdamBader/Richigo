$(document).ready(function(){
  
  //AUTO-SLIDESHOW FOR GAMES DESIGN
  $("#slideshowGames > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshowGames > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshowGames');
  }, 3350);

  //AUTO-SLIDESHOW FOR PHOTOGRAPHY
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  }, 3350);

  //FOR PRE-LOADER
  setTimeout(function(){
    $('.loader').fadeToggle();
  }, 1500);

  //FLEXBOX IMAGES    
  var $overlay	= $("<div id='light-box'><span class='close-img'>&times</span></div>");
  var $image		= $('<img>');
  var $caption	= $('<h3></h3>');
  var imageUrl;
  var imageAlt;

  $('body').append($overlay);	
  $overlay.hide();	

  $('.flex-img').click(function(){
    imageUrl = $(this).attr('src');
    imageAlt = $(this).attr('alt');

    $overlay.append($image);
    $overlay.append($caption);
    $image.attr('src', imageUrl);
    $caption.text(imageAlt);
    $overlay.fadeIn('500');	
    $image.fadeIn('500');
  });
  
  $("body").on("click", "#light-box span", function() {
    $("#light-box").hide();
  });
});


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