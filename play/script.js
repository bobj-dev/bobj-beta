'use strict';

const canvas = $('#game');
const context = canvas.getContext('2d');

let player = sprites.player = new Sprite({image: $('#player')});

window.addEventListener('keydown', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.gravity = -7.5;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.dx = -player.speed;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.dx = player.speed;
	}
});

window.addEventListener('keyup', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.gravity = 7.5;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.dx = 0;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.dx = 0;
	}
});

window.addEventListener('load', resize);
window.addEventListener('resize', resize);

draw();
