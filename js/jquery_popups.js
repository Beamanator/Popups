// Waits for all HTML to be written & document to be ready.
$(document).ready(function() {
  // $('div#type1 > h4').click(function() {
  $("h4").click(function() {
    $("div").find("p").css("background-color","red");
    //$('> p').fadeOut(1000);
  });
});