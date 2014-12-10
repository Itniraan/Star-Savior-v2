/**
File Name: enemy.ts
Author: Blake Murdock and Mallory Steele
Website Name: Enemy object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a enemy object
*/
module objects {
    // Enemy Class
    export class Enemy {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            if (currentState == constants.PLAY_STATE_LEVEL_ONE) {
                this.image = new createjs.Bitmap(queue.getResult("enemy"));
            } else if (currentState == constants.PLAY_STATE_LEVEL_TWO) {
                this.image = new createjs.Bitmap(queue.getResult("enemy1"));
            } else if (currentState == constants.PLAY_STATE_LEVEL_THREE) {
                this.image = new createjs.Bitmap(queue.getResult("enemy3"));
            }
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
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        }
        // Function to remove enemy from the game
        destroy() {
            game.removeChild(this.image);
        }
    }
} 