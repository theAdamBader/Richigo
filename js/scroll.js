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