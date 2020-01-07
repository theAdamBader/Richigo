//Keeps selected class active/focused (li elements)
$('li').on('click', function(){
    $('li').removeClass('selected');
    $(this).addClass('selected');
});

setTimeout(function(){
    $('.loader').fadeToggle();
}, 1000);

//Pauses page before tranisitioning to the next page
$('.page-transition').click(function(e) {
    e.preventDefault();
    var linkUrl = $(this).attr('href');
    setTimeout(function(url) { window.location = url; }, 3000, linkUrl);
  });