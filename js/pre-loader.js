// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 8000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

// Set the pre-loader animation for 2200 milliseconds for it to animated and fade to the page
setTimeout(function(){
  $('.loader').fadeToggle();
}, 3000);