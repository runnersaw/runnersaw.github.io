$(document).ready(function() {
  $('#right').accordion({collapsible: true, active: false});
  $footer = $('#footer');
  $footer.mouseenter(function() {
  	$footer.animate({height: "30vh"}, 500)
  	$footer.html('<div>Contact</div><div><ul><li>About Me</li><li>Previous Work</li><a href="onlineresume.docx"><li>Resume</li></a></ul></div>');
  });
  $footer.mouseleave(function() {
  	$footer.animate({height: "8vh"}, 500);
  	$footer.html('Contact');
  });
});