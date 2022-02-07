'use strict';

const gravity = 5;

var sprites = {};

const Sprite = class Sprite {
    constructor(obj = {}) {
        this.image = obj.image ?? $('#error');
        
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;

        this.speed = 5;

        this.direction = 1;

        this.gravity = 0;
    }

    draw() {
        context.translate(this.x + (this.direction == -1 ? 16 : 0), this.y);
        context.scale(this.direction, 1);
        
        context.drawImage(this.image, 0, 0, 16, 16);
        
        context.resetTransform();
    }

    update() {
        this.direction = Math.sign(this.dx) || this.direction;
        
        this.x += this.dx;
        this.y += this.dy + this.gravity;

        while (this.y + 16 >= canvas.height) {
            this.y--;
        }
    }
}

const draw = function() {
    context.drawImage($('#background'), 0, 0);

    Object.values(sprites).forEach(function(sprite) {
        sprite.update();
        sprite.draw();
    });

    requestAnimationFrame(draw);
}

const resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    $('#background').src = `https://via.placeholder.com/${canvas.width}x${canvas.height}.png`;
}
