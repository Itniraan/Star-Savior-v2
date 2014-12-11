/**
File Name: FinalBoss.ts
Author: Blake Murdock and Mallory Steele
Website Name: Final Boss object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Final Boss object
*/
module objects {
    // Enemy Class
    export class FinalBoss {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("bossMonster"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChild(this.image);
            this.reset();
        }
        // Function to reset enemy off screen
        reset() {
            this.image.x = 1500;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
        }
        // Function to update position of enemy.
        update() {
            while (this.image.y > 471) {
                this.image.y -= this.dx;
            }
            while (this.image.y < 0) {
                this.image.y += this.dx;
            }
            //if (this.image.y > 471) {
            //    this.image
            //}
            if (this.image.x == plane.image.x) {
                bullet = new objects.Bullet(stage, game, 2);
                bossBullets.push(bullet);
                bossBullets[bossBullets.length - 1].fireBullet();
            }
        }
        // Function to remove enemy from the game
        destroy() {
            game.removeChild(this.image);
        }
    }
} 