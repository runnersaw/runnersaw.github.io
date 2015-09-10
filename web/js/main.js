$(document).ready(function() {
	$("#partyspot-button").click(function() {
		alert("Partyspot");
	});
	$("#boolio-button").click(function() {
		setBoolioDisplay();
	});
	$("#games-button").click(function() {
		alert("Games");
	});
	$("#close-display").click(function() {
		var div = $("#display-box");
		div.css("display", "none");
	});
});

function setGamesDisplay() {
	setDisplayVars("./web/images/boolio.png", "Boolio", "Boolio is a cool application");
	showDisplay();
}

function setPartyspotDisplay() {
	setDisplayVars("./web/images/boolio.png", "Boolio", "Boolio is a cool application");
	showDisplay();
}

function setBoolioDisplay() {
	setDisplayVars("./web/images/boolio.png", "Boolio", "Boolio is a cool application");
	showDisplay();
}

function setDisplayVars(img, title, textContent) {
	var i = $("#display-picture img");
	i.attr("src",img);
	var t = $("#display-text h3");
	t.text(title);
	var x = $("#display-text p");
	x.text(textContent);
}

function showDisplay() {
		var div = $("#display-box");
		div.css("display", "");
}