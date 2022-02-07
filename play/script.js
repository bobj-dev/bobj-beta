'use strict';

const canvas = $('canvas');
const context = canvas.getContext('2d');

const player = sprites.player = new Sprite({image: $('#player')});

window.addEventListener('keydown', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.dy = -gravity + 1;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.dx = -player.speed;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.dy = gravity;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.dx = player.speed;
	}
});

window.addEventListener('keyup', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.dy = 0;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.dx = 0;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.dy = 0;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.dx = 0;
	}
});

window.addEventListener('load', resize);
window.addEventListener('resize', resize);

draw();
