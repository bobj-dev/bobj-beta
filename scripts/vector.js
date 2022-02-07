'use strict';

const Vector = class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    mul(v) {
        this.x *= v.x;
        this.y *= v.y;
    }

    div(v) {
        this.x /= v.x;
        this.y /= v.y;
    }

    mod(v) {
        this.x %= v.x;
        this.y %= v.y;
    }

    toArray() {
        return [this.x, this.y];
    }
}
