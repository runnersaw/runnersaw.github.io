$(document).ready(function() {
  photoWidth = $('#top-photo').width();
  topHeight = $('#top').height();
  margin = (topHeight-photoWidth)/2.0;
  $('#top-photo').css({'margin-top':margin});

  var footerActivated = false;
  $footertext = $('#footer-text');
  $footer = $('#footer');
  $footertext.css('cursor','pointer');
  $footertext.click(function() {
    if (footerActivated) {
      $footer.animate({height: "-=30vh"}, 200);
      $('.arrow-down').addClass('arrow-up').removeClass('arrow-down');
      footerActivated = false;
    } else {
      $footer.animate({height: "+=30vh"}, 200)
      $('.arrow-up').addClass('arrow-down').removeClass('arrow-up');
      footerActivated = true;
    }
  });
});