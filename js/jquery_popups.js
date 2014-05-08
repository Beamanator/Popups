// Waits for all HTML to be written & document to be ready.
$(document).ready(function() {
  // $('div#type1 > h4').click(function() {
    var callable = true;
  $("#jq").mouseenter(function() {
    // $("div").find("p").css("background-color","red");
    if (callable) {
      $('body').fadeTo('slow',0.5);
      callable = false;
    }

    //$('> p').fadeOut(1000);
  });
  $('#jq').mouseout(function() {
    $('body').fadeTo('slow',1, function() {
      callable = true;
    });
  });
  $('#try1').click(function() {
    //location.reload();
    //$('test').removeAttr('style');
    $('#test').css({
      "display":"block"
    });
    location.reload();
  });
});