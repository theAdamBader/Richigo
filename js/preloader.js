/* PRELOADER 
    *Created a preloader function that would delay for 2s then fadeout
    *The setTimeout function executes the preloader function and fadeout slowly for 1s
    *Once the preloader function happens then the session storage will store and hide the preloader until you have exited the website or/and revisit the site
*/
$(document).ready(function() {

    function Preloader() {
        var preloader = $ ('.loader');
        preloader.delay(3000).fadeOut();
    }

    setTimeout(function(){
        Preloader();
    }, 1500);

    if (!sessionStorage.getItem('doNotShow')) {
        sessionStorage.setItem('doNotShow', true);
        Preloader();
    } else {
    $ ('.loader').hide();
    }
 
});