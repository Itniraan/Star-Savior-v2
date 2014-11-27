/**
File Name: levelThreeBackground.ts
Author: Blake Murdock and Mallory Steele
Website Name: levelThreeBackground object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a levelThreeBackground object
*/
module objects {
    // levelThreeBackground Class
    export class levelThreeBackground {
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
            this.image = new createjs.Bitmap(queue.getResult("spaceLevelThree"));
            this.image2 = new createjs.Bitmap(queue.getResult("spaceLevelThree"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            game.addChild(this.image);
            game.addChild(this.image2);
            this.reset1();
            this.reset2();
        }

        // Function to reset position of first lava image.
        reset1() {
            this.image.x = 628;
        }

        // Function to reset position of second lava image.
        reset2() {
            this.image2.x = 0;
        }

        // Function to update position of lava.
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

        // Function to destroy lava object.
        destroy() {
            this.game.removeChild(this.image);
            this.game.removeChild(this.image2);

        }
    }


}