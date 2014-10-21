pageWidth = screen.width;
pageHeight = screen.height;
contentWidth = .68*pageWidth

shipSpeed = 8;

function userShip() {
	this.px = contentWidth/2.0;
	this.vx = 0;
	this.bulletsLeft = 5;

	userShip.prototype.update = function() {
		this.px = this.px+this.vx;
		user = $('#usership');
		user.css({'left':this.px-.025*pageWidth});
	}

	userShip.prototype.setVX = function(vx) {
		this.vx = vx;
	}

}

var usership = new userShip();

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
			usership.setVX(-shipSpeed);
			break;
		case 39:
			usership.setVX(shipSpeed);
			break;
		}
	}

document.onkeyup = function(e) {
	switch (e.keyCode) {
		case 37:
			usership.setVX(0);
			break;
		case 39:
			usership.setVX(0);
			break;
		}
	}

$(document).ready(function() {
	
	var otherActivated = 'none';

	$('#space').click(function() {
		if (otherActivated!='stocks') {
			$('.work-nav-left').css('background-color', '#AAAAAA');
			$('.work-nav-left').animate({ width: '23vw'}, 200);
			$(this).css('background-color', '#999999');
			$(this).animate({ width: '+=2vw'}, 200);
			otherActivated = 'space';
			setTimeout(function(){playSpaceInvaders();}, 400);
		};
	});

	function playSpaceInvaders() {
		usership.update()
		$('#content-container').css({'border':'2px solid black'});
		$('#content-container').html('<div id="usership" style="position:absolute;bottom:2vh;width:5vw;height:5vw;left:31.5vw;background-color:black;"></div>');
		id=setInterval(function() {updateSpaceInvaders();}, 50);
	}

	function updateSpaceInvaders() {
		usership.update();
	}
})