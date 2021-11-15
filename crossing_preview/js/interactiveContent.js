
/* STARTUP */

const SLIDESHOW_PHOTO_DURATION = 6000;

var isMouseDown = false;
var lastTouchPosition = null;

function adjustImageLocation(x, y) {
	let container = document.getElementById('interactiveContentBackground');
	let containerBounds = container.getBoundingClientRect();

	let image = document.getElementById('interactiveContentImage');
	let imageBounds = image.getBoundingClientRect();

	let currentX = containerBounds.left-imageBounds.left;
	let currentY = containerBounds.top-imageBounds.top;
	let maxX = imageBounds.width - containerBounds.width;
	let maxY = imageBounds.height - containerBounds.height;
	let newX = Math.min(Math.max(0, currentX + x), maxX);
	let newY = Math.min(Math.max(0, currentY + y), maxY);

	image.style.left = '-' + newX + 'px';
	image.style.top = '-' + newY + 'px';
}

function attachTouchHandlers() {
	let element = document.getElementById('interactiveContentBackground');
	element.addEventListener('touchstart', function (event) {
		isMouseDown = true;
		if (event.changedTouches.length == 1) {
			lastTouchPosition = {
				'x': event.changedTouches[0].clientX,
				'y': event.changedTouches[0].clientY,
			};
		}
	});
	element.addEventListener('touchmove', function (event) {
		if (isMouseDown && event.changedTouches.length == 1 && lastTouchPosition != null) {
			let movementX = event.changedTouches[0].clientX - lastTouchPosition.x;
			let movementY = event.changedTouches[0].clientY - lastTouchPosition.y;
			adjustImageLocation(-movementX, -movementY);

			lastTouchPosition = {
				'x': event.changedTouches[0].clientX,
				'y': event.changedTouches[0].clientY,
			};
		}

		// Prevent scrolling.
		event.preventDefault();
	});
	element.addEventListener('touchend', function (event) {
		isMouseDown = false;
		lastTouchPosition = null;
	});
	element.addEventListener('mousemove', function (event) {
		if (isMouseDown) {
			adjustImageLocation(-event.movementX, -event.movementY);
		}
	});
	element.addEventListener('mousedown', function (event) {
		isMouseDown = true;
		mouseLocation = {
			'x': event.layerX,
			'y': event.layerY,
		};
	});
	element.addEventListener('mouseup', function (event) {
		isMouseDown = false;
		adjustImageLocation(-event.movementX, -event.movementY);
	});
	element.addEventListener('mouseout', function (event) {
		isMouseDown = false;
	});
}

function fadeIn(elementId) {
	let element = document.getElementById(elementId);
	if (!element) {
		return;
	}
	element.classList.remove('hidden');
	element.classList.remove('invisible');
	element.classList.remove('backgroundFadeOut');
	element.classList.add('backgroundFadeIn');
}

function fadeOut(elementId) {
	let element = document.getElementById(elementId);
	if (!element) {
		return;
	}
	element.classList.remove('backgroundFadeIn');
	element.classList.add('backgroundFadeOut');

	setTimeout(function () {
		element.classList.add('hidden');
	}, 1000);
}

function hideVideoPlaceholder() {
	let element = document.getElementById('videoPlayerPlaceholder');
	element.classList.add('hidden');
}

function showVideoPlaceholder() {
	let element = document.getElementById('videoPlayerPlaceholder');
	element.classList.remove('hidden');
}

function fadeInBackgroundImage() {
	fadeIn('interactiveContentBackgroundOverlayImage');
	fadeIn('interactiveContentImageNonInteractive');
}

function fadeOutBackgroundImage() {
	fadeOut('interactiveContentBackgroundOverlayImage');
	fadeOut('interactiveContentImageNonInteractive');
}

function fadeInVideoPlayer() {
	showVideoPlaceholder();
	fadeIn('interactiveVideoPlayer');
}

function fadeOutVideoPlayer() {
	fadeOut('interactiveVideoPlayer');
}

function fadeInPhotoPlayer() {
	fadeIn('interactivePhotoPlayer');
}

function fadeOutPhotoPlayer() {
	stopSlideshow();
	fadeOut('interactivePhotoPlayer');
}

function fadeInCaptions() {
	let element = document.getElementById('photoSlideCaption');
	element.classList.remove('hidden');
	element.classList.remove('invisible');
	element.classList.remove('captionsFadeOut');
	element.classList.add('captionsFadeIn');
}

function fadeOutCaptions() {
	let element = document.getElementById('photoSlideCaption');
	element.classList.remove('captionsFadeIn');
	element.classList.add('captionsFadeOut');

	setTimeout(function () {
		element.classList.add('hidden');
	}, 250);
}

function fadeInContentMenu() {
	let element = document.getElementById('interactiveContentMenuContainer');
	element.classList.remove('interactiveContentMenuContainerInitial');
	element.classList.remove('interactiveContentMenuContainerHidden');
	element.classList.add('interactiveContentMenuContainerShown');
}

function fadeOutContentMenu() {
	let element = document.getElementById('interactiveContentMenuContainer');
	element.classList.remove('interactiveContentMenuContainerShown');
	element.classList.add('interactiveContentMenuContainerHidden');
}

function expandInteractiveContent() {
	let element = document.getElementById('interactiveContentBackground');
	element.classList.remove('interactiveContentCollapsedInitial');
	element.classList.remove('interactiveContentCollapsed');
	element.classList.add('interactiveContentExpanded');
}

function collapseInteractiveContent() {
	let element = document.getElementById('interactiveContentBackground');
	element.classList.remove('interactiveContentExpanded');
	element.classList.add('interactiveContentCollapsed');
}

function ensureExpanded(callback) {
	let element = document.getElementById('interactiveContentBackground');
	if (element.classList.contains('interactiveContentCollapsed') ||
		element.classList.contains('interactiveContentCollapsedInitial')) {
		expandInteractiveContent();
		setTimeout(callback, 1000);
	} else {
		callback();
	}
}

function addVideoEventHandlers() {
	let player = document.getElementById('videoPlayer');
	player.addEventListener('play', function () {
		let playButton = document.getElementById('playVideoButtonImage');
		let pauseButton = document.getElementById('pauseVideoButtonImage');
		playButton.classList.add('hidden');
		pauseButton.classList.remove('hidden');
	});
	player.addEventListener('pause', function () {
		let playButton = document.getElementById('playVideoButtonImage');
		let pauseButton = document.getElementById('pauseVideoButtonImage');
		playButton.classList.remove('hidden');
		pauseButton.classList.add('hidden');
	});
	player.addEventListener('volumechange', function (event) {
		console.log(event);
	});
	player.addEventListener('timeupdate', function () {
		let timeText = document.getElementById('timeText');
		let time = Math.trunc(player.currentTime);
		let minutes = Math.trunc(time / 60);
		let seconds = time % 60;
		timeText.innerHTML = minutes + ':' + String(seconds).padStart(2, '0');

		let playbackSelector = document.getElementById('playbackSelector');
		let playbackSelectorWidth = playbackSelector.getBoundingClientRect().width;
		let playbackBar = document.getElementById('playbackBar');
		let playbackBarWidth = playbackBar.getBoundingClientRect().width;
		let maximumX = playbackBarWidth - playbackSelectorWidth;

		let percentDone = player.currentTime / player.duration;
		playbackSelector.style.left = (percentDone * maximumX) + 'px';
	});
}

function toggleVideoPlayback() {
	hideVideoPlaceholder();
	let player = document.getElementById('videoPlayer');
	if (player.paused) {
		player.play();
	} else {
		player.pause();
	}
}

function stopVideo() {
	let player = document.getElementById('videoPlayer');
	player.pause();
}

window.addEventListener('load', (event) => {
	expandInteractiveContent();
	setTimeout(function () {
		fadeInBackgroundImage();
		fadeInContentMenu();

		attachTouchHandlers();
		addVideoEventHandlers();
	}, 1000);
});

/* INTERACTIVE MENU BUTTONS */

function storyClicked() {
	fadeOutBackgroundImage();
	fadeOutContentMenu();
	fadeOutVideoPlayer();
	fadeOutPhotoPlayer();

	setTimeout(function () {
		collapseInteractiveContent();
	}, 1000);
}

function videoClicked() {
	ensureExpanded(function () {
		fadeOutBackgroundImage();
		fadeOutContentMenu();
		fadeOutPhotoPlayer();

		setTimeout(function () {
			fadeInVideoPlayer();
		}, 1000);
	});
}

function documentsClicked() {
	document.getElementById('docs').scrollIntoView({ behavior: 'smooth' });
}

function photosClicked() {
	loadPhotos();
	updateSlideshowText();

	ensureExpanded(function () {
		fadeOutBackgroundImage();
		fadeOutContentMenu();
		fadeOutVideoPlayer();

		setTimeout(function () {
			fadeInPhotoPlayer();
		}, 1000);

		setTimeout(function () {
			beginSlideshow();
		}, 2000);
	});
}

function discussClicked() {
	document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function seriesIndexClicked() {
	window.open('/crossing_preview/chapters/index/', '_self');
}

function chapterIndexClicked() {
	stopVideo();
	stopSlideshow();

	ensureExpanded(function () {
		fadeOutVideoPlayer();
		fadeOutPhotoPlayer();

		setTimeout(function () {
			fadeInBackgroundImage();
			fadeInContentMenu();
		}, 1000);
	});
}

/* Video playback */

function playVideoClicked() {
	toggleVideoPlayback();
}

function closeVideoClicked() {
	stopVideo();
	fadeOutVideoPlayer();

	setTimeout(function () {
		fadeInBackgroundImage();
		fadeInContentMenu();
	}, 1000);
}

/* Photo playback */

var isSlideshowPlaying = true;

function loadPhotos() {
	// Use Array.from to ensure the elements do not update as class is removed.
	let photoElements = Array.from(document.getElementsByClassName('unloadedPhoto'));
	for (let photoElement of photoElements) {
		photoElement.classList.remove('unloadedPhoto');
		photoElement.src = photoElement.dataset.src;
	}

	if (photoElements.length > 0) {
		photoElements[0].classList.add('photoSlideShown');
	}
}

function togglePhotoSlideshow() {
	if (isSlideshowPlaying) {
		stopSlideshow();
	} else {
		beginSlideshow();
	}
}

function beginSlideshow() {
	isSlideshowPlaying = true;
	beginSlideshowRecursive();

	updateSlideshowText();
}

function stopSlideshow() {
	isSlideshowPlaying = false;

	updateSlideshowText();
}

function beginSlideshowRecursive() {
	setTimeout(function () {
		if (!isSlideshowPlaying) {
			return;
		}
		nextPhoto();
		beginSlideshowRecursive();
	}, SLIDESHOW_PHOTO_DURATION);
}

function updateSlideshowText() {
	let playButton = document.getElementById('playPhotoButtonImage');
	let pauseButton = document.getElementById('pausePhotoButtonImage');
	if (isSlideshowPlaying) {
		playButton.classList.add('hidden');
		pauseButton.classList.remove('hidden');
	} else {
		pauseButton.classList.add('hidden');
		playButton.classList.remove('hidden');
	}

	let state = document.getElementById('photoSlideshowState');
	state.innerHTML = (currentSlide() + 1) + ' of ' + numberOfSlides();

	let captions = Array.from(document.getElementsByClassName('photoSlideCaptionText'));
	for (let caption of captions) {
		caption.classList.add('hidden');
	}
	let shownCaption = document.getElementById('photoSlideCaptionText-' + (currentSlide() + 1));
	if (shownCaption) {
		shownCaption.classList.remove('hidden');
	}
}

function nextPhoto() {
	let shownPhoto = currentSlide();
	let newlyShownPhoto = shownPhoto + 1;
	if (newlyShownPhoto >= numberOfSlides()) {
		newlyShownPhoto = 0;
	}
	showSlide(newlyShownPhoto);

	updateSlideshowText();
}

function previousPhoto() {
	let shownPhoto = currentSlide();
	let newlyShownPhoto = shownPhoto - 1;
	if (newlyShownPhoto < 0) {
		newlyShownPhoto = numberOfSlides() - 1;
	}
	showSlide(newlyShownPhoto);

	updateSlideshowText();
}

function currentSlide() {
	var shownPhoto = 0;
	// Use Array.from to ensure the elements do not update as class is removed.
	let photoElements = Array.from(document.getElementsByClassName('photoSlide'));
	for (var i = 0; i < photoElements.length; i++) {
		if (photoElements[i].classList.contains('photoSlideShown')) {
			shownPhoto = i;
			break;
		}
	}
	return shownPhoto;
}

function numberOfSlides() {
	let photoElements = Array.from(document.getElementsByClassName('photoSlide'));
	return photoElements.length;
}

function showSlide(slide) {
	// Use Array.from to ensure the elements do not update as class is removed.
	let photoElements = Array.from(document.getElementsByClassName('photoSlide'));
	for (var i = 0; i < photoElements.length; i++) {
		photoElements[i].classList.remove('photoSlideShown');
	}
	photoElements[slide].classList.add('photoSlideShown');
}

function playPhotoClicked() {
	togglePhotoSlideshow();
}

function nextPhotoClicked() {
	stopSlideshow();
	nextPhoto();
}

function previousPhotoClicked() {
	stopSlideshow();
	previousPhoto();
}

function captionsClicked() {
	let captions = document.getElementById('photoSlideCaption');
	if (captions.classList.contains('captionsFadeIn')) {
		fadeOutCaptions();
	} else {
		fadeInCaptions();
	}
}

function closePhotoClicked() {
	stopSlideshow();
	fadeOutPhotoPlayer();

	setTimeout(function () {
		fadeInBackgroundImage();
		fadeInContentMenu();
	}, 1000);
}
