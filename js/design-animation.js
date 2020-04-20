$(document).ready(function(){
    $("#slideshowGames > div:gt(0)").hide();
  
    setInterval(function() {
      $('#slideshowGames > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshowGames');
    }, 3350);
  });