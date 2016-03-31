$(document).ready(function() {
	$("#partyspot-button").click(function() {
		setPartyspotDisplay();
	});
	$("#boolio-button").click(function() {
		setBoolioDisplay();
	});
	$("#games-button").click(function() {
		setGamesDisplay();
	});
	$("#close-display").click(function() {
		hideDisplay();
	});
	$("#display-box-container").click(function() {
		hideDisplay();
	});
	$("#display-box").click(function(event) {
		event.stopPropagation();
	});

	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 500);
	    }

	});

	hideDisplay();
});

function setGamesDisplay() {
	setDisplayVars(
		"./web/images/games_pebble.png", 
		"Games for Pebble", 
		"Games for Pebble is an application written for Pebble smartwatches in C. "+
		"The application comes with seven games, including a very complex chess game against an AI. "+
		"Games for Pebble has been downloaded over ten thousand times, and currently is among the fifteen most like games on the Pebble app store. "+
		"You can see the app's entry <a href='https://apps.getpebble.com/applications/54f65e8a13cdff61490000b6' target='_blank' style='font-weight:bold'>here</a>. "
	);
	showDisplay();
}

function setPartyspotDisplay() {
	setDisplayVars(
		"./web/images/partyspot.png", 
		"PartySpot", 
		"PartySpot is an Android application devloped to enable users to collaborate on their music playlists. "+
		"The application enables the hosts of a party to create a playlist. "+
		"PartySpot synchronizes their music playback so that music throughout the house is playing at the same time, on the same song. "+
		"Guests can suggest songs, which the host can easily add to the playlist. "+
		"See the app's source and get it <a href='http://griffint.github.io/PartySpot' target='_blank' style='font-weight:bold'>here</a>. "
	);
	showDisplay();
}

function setBoolioDisplay() {
	setDisplayVars(
		"./web/images/boolio.png", 
		"Boolio", 
		"Boolio is a social questions application. "+
		"Boolio allows swiftly share your questions and opinions, right from your pocket and have fun while doing it. "+
		"Boolio encourages users to answer quickly and easily, which creates high engagement and quick feedback for question askers. "+
		"I was the lead iOS developer for Boolio, which is releasing for iOS soon. "+
		"See more at <a href='http://boolio.io' style='font-weight:bold' target='_blank'>boolio.io</a>. "
	);
	showDisplay();
}

function setDisplayVars(img, title, textContent) {
	var i = $("#display-picture img");
	i.attr("src",img);
	var t = $("#display-text h3");
	t.html(title);
	var x = $("#display-text p");
	x.html(textContent);
}

function showDisplay() {
	var container = $("#display-box-container");
	container.css("display", "");
	var box = $("#display-box");
	box.css("display", "");
}

function hideDisplay() {
	var container = $("#display-box-container");
	container.css("display", "none");
	var box = $("#display-box");
	box.css("display", "none");
}