﻿/**
File Name: levelTwoBackground.ts
Author: Blake Murdock and Mallory Steele
Website Name: levelTwoBackground object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a levelTwoBackground object
*/
module objects {
    // LevelTwoBackground Class
    export class levelTwoBackground {
        image: createjs.Bitmap;
        image2: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("spaceLevelTwo"));
            this.image2 = new createjs.Bitmap(queue.getResult("spaceLevelTwo"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            game.addChild(this.image);
            game.addChild(this.image2);
            this.reset1();
            this.reset2();
        }

        // Function to reset position of first space image.
        reset1() {
            this.image.x = 628;
        }

        // Function to reset position of second space image.
        reset2() {
            this.image2.x = 0;
        }

        // Function to update position of space.
        update() {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        }

        // Function to destroy space object.
        destroy() {
            this.game.removeChild(this.image);
            this.game.removeChild(this.image2);

        }
    }


}