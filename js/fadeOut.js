$(document).ready(function(){

    $('.nav-music').mouseenter(function() {
        $(this).children('.muzieknootjes').fadeIn(10000);
    });
    $('.nav-music').mouseleave(function() {
        $(this).children('.muzieknootjes').fadeOut(10000);
    });

});