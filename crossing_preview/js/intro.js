function fadeInText(elementId, text, slow) {
  let element = document.getElementById(elementId);
  element.innerHTML = text;
  element.classList.remove('invisible');
  element.classList.remove('intro-text-fade-out');
  if (slow === true) {
    element.classList.add('intro-text-fade-in-slow');
  } else {
    element.classList.add('intro-text-fade-in');
  }
}

function fadeOutText(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove('intro-text-fade-in');
  element.classList.remove('intro-text-fade-in-slow');
  element.classList.add('intro-text-fade-out');
}

function fadeInImage(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove('invisible');
  element.classList.add('intro-image-fade-in');
}

function fadeOutImage(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove('intro-image-fade-in');
  element.classList.add('intro-image-fade-out');
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded!');

  document.getElementById('intro-background-image').classList.add('background-fade-in');

  setTimeout(function () {
    fadeInText('intro-text-1', 'On Dec. 14, 1961,', true);
    fadeInText('intro-text-2', 'near Greeley, Colorado,', true);
  }, 4000);

  setTimeout(function () {
    fadeOutText('intro-text-1');
    fadeOutText('intro-text-2');
  }, 8000);

  setTimeout(function () {
    fadeInText('intro-text-1', 'a passenger train');
    fadeInText('intro-text-2', 'smashed into a school bus.');
  }, 9000);

  setTimeout(function () {
    fadeOutText('intro-text-1');
    fadeOutText('intro-text-2');
  }, 12000);

  setTimeout(function () {
    fadeInText('intro-text-1', 'Twenty children died.');
  }, 13000);

  setTimeout(function () {
    fadeInText('intro-text-2', 'Sixteen children and');
  }, 15000);

  setTimeout(function () {
    fadeInText('intro-text-3', 'the bus driver lived.');
  }, 16000);

  setTimeout(function () {
    fadeOutText('intro-text-1');
  }, 19000);

  setTimeout(function () {
    fadeOutText('intro-text-2');
  }, 19500);

  setTimeout(function () {
    fadeOutText('intro-text-3');
  }, 20000);

  setTimeout(function () {
    fadeInText('intro-text-1', 'Follow their stories');
  }, 21000);

  setTimeout(function () {
    fadeInImage('intro-side-image1');
    fadeInText('intro-text-2', 'from then ');
    document.getElementById('intro-text-highlight').innerHTML = 'and now.';
  }, 23000);

  setTimeout(function () {
    fadeOutImage('intro-side-image1');
    fadeInImage('intro-side-image2');
  }, 25000);

  setTimeout(function () {
    fadeInText('intro-text-highlight', 'and now.');
  }, 26000);

  setTimeout(function () {
    fadeOutText('intro-text-1');
  }, 31000);

  setTimeout(function () {
    fadeOutText('intro-text-2');
  }, 33000);

  setTimeout(function () {
    fadeOutText('intro-text-highlight');
  }, 35000);

  setTimeout(function () {
    window.location.assign(window.location.origin + "/crossing_preview/chapters/index");
  }, 39000);
});
