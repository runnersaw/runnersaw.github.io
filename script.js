$(document).ready(function() {
  var footerActivated = false;
  var workActivated = 'none';
  $('#right').accordion({collapsible: true, active: false});
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
  $('#stocks').click(function() {
    $('#content-container').load('stocks.html');
    if (workActivated!='stocks') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'stocks';
    };
  });
  $('#robot').click(function() {
    $('#content-container').load('carl.html');
    if (workActivated!='robot') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'robot';
    };
  });
  $('#basketball').click(function() {
    $('#content-container').load('basketball.html');
    if (workActivated!='basketball') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'basketball';
    };
  });
  $('.work-nav-left').css( 'cursor', 'pointer' );
});