/**
File Name: plane.ts
Author: Blake Murdock and Mallory Steele
Website Name: Plane object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a plane object
*/
module objects {
    // Plane Class
    export class Plane {
        stage: createjs.Stage;
        game: createjs.Container;
        image: createjs.Bitmap;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("plane"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dx = 5;

            document.onkeydown = function (e) {
                if (event.keyCode == constants.FIRING_KEY) {
                    createjs.Sound.play("shootAudio");
                    bullet = new objects.Bullet(stage, game, 1);
                    bullets.push(bullet);
                    bullets[bullets.length - 1].fireBullet();
                }
            };
            game.addChild(this.image);
        }

        // Function to update position of plane.
        update() {
            this.image.x = 60;
            this.image.y = stage.mouseY;
        }

        // Function to destroy plane object.
        destroy() {
            game.removeChild(this.image);
        }

    }
}