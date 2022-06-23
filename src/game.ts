import * as PIXI from 'pixi.js'
import { Enemy } from "./enemy"

import enemyImage from "./images/enemy.png"
import backgroundImage from "./images/background.png"

//
// Create Game class
//
class Game {
    private enemy: Enemy
    public pixi: PIXI.Application
    public loader: PIXI.Loader
    private enemies: Enemy[] = []

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        //loader
        this.pixi.loader.add('enemyTexture', enemyImage)
            .add('backgroundTexture', backgroundImage)
        this.pixi.loader.load(() => this.loadCompleted())
    }

    private loadCompleted() {
        const background = new PIXI.TilingSprite(this.pixi.loader.resources["backgroundTexture"].texture!,
            this.pixi.screen.width,
            this.pixi.screen.height)

        this.pixi.stage.addChild(background)

        //moving background
        let count = 0;

        this.pixi.ticker.add(() => {
            count += 0.005;

            background.tilePosition.x += 1;
        });


        //add animation and interaction
        this.pixi.ticker.add((delta) => this.update(delta))

        for (let i = 0; i < 15; i++) {
            this.enemy = new Enemy(this.pixi.loader.resources["enemyTexture"].texture!)
            this.enemies.push(this.enemy)
            this.pixi.stage.addChild(this.enemy)
        }
    }

    public update(delta: number) {
        for (let enemy of this.enemies) {
            enemy.update(delta)
        }
    }
}
new Game()