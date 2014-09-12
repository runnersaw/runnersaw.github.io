$(document).ready(function() {
  photoWidth = $('#top-photo').width();
  topHeight = $('#top').height();
  margin = (topHeight-photoWidth)/2.0;
  $('#top-photo').css({'margin-top':margin});

  var footerActivated = false;
  $footer = $('#footer');
  $footer.css('cursor','pointer');
  $footer.click(function() {
    if (footerActivated) {
      $footer.animate({height: "-=30vh"}, 200);
      $footer.html('Contact');
      footerActivated = false;
    } else {
      $footer.animate({height: "+=30vh"}, 200)
      $footer.html('<div>Contact</div><div><ul><li>About Me</li><li>Previous Work</li><li><a href="onlineresume.pdf">Resume</a></li></ul></div>');
      footerActivated = true;
    }
  });
});