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
    }, 3000);

  });