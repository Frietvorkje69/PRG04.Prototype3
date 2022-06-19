import * as PIXI from 'pixi.js'

export class Enemy extends PIXI.Sprite {
    deadTexture: PIXI.Texture;
    aliveTexture: PIXI.Texture;
    alive = true;
    textbox = false; //textbox
    speed: number;

    constructor(texture: PIXI.Texture) {
        super(texture)
        this.aliveTexture = texture

        this.anchor.set(0.5);
        this.x = Math.random() * 800;
        this.y = Math.random() * 450;
        this.scale.set(0.75 + Math.random() * 0.5);
        this.speed = Math.random() * 3;
        this.tint = Math.random() * 0xFFFFFF

    }

    update(delta: number) {
        this.x *= 1
        this.x += this.speed

        if (this.x > 900) {
            this.x = -100
        }
    }
}