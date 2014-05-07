$(document).ready(function() {
  $('#right').accordion({collapsible: true, active: false});
  $footer = $('#footer');
  $footer.hover(function() {
  	$footer.animate({height: "+=30vh"}, 500)
  	$footer.html('<div>Contact</div><div><ul><li>About Me</li><li>Previous Work</li><a href="onlineresume.docx"><li>Resume</li></a></ul></div>');
  },
  function() {
  	$footer.animate({height: "-=30vh"}, 500);
  	$footer.html('Contact');
  });
  $('#stocks').click(function() {
    alert('load')
    $('#content-container').load('stocks.html')
  })
});