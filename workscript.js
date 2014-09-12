$(document).ready(function() {
  var workActivated = 'none';

  $('#stocks').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('stocks.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='stocks') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'stocks';
    };
  });

  $('#robot').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('carl.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='robot') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'robot';
    };
  });

  $('#basketball').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('basketball.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='basketball') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'basketball';
    };
  });

  $('#breadboard').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('breadboard.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='breadboard') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'breadboard';
    };
  });

  $('#2048').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('2048.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='2048') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = '2048';
    };
  });

  $('#chess').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('chess.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='chess') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'chess';
    };
  });

  $('#chatbot').click(function() {
    $('#content-container').fadeOut(200);
    setTimeout(function() {$('#content-container').load('chatbot.html');}, 200);
    $('#content-container').fadeIn(200);
    if (workActivated!='chatbot') {
      $('.work-nav-left').css('background-color', '#AAAAAA');
      $('.work-nav-left').animate({ width: '23vw'}, 200);
      $(this).css('background-color', '#999999');
      $(this).animate({ width: '+=2vw'}, 200);
      workActivated = 'chatbot';
    };
  });
  
  $('.work-nav-left').css( 'cursor', 'pointer' );
});