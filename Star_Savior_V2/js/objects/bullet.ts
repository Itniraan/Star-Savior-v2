﻿/// <reference path="../constants.ts" />
/**
File Name: bullet.ts
Author: Blake Murdock and Mallory Steele
Website Name: Bullet object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a bullet object
*/
module objects {
    export class Bullet {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        type: number;

        constructor(stage: createjs.Stage, game: createjs.Container, type: number) {
            this.stage = stage;
            this.game = game;
            this.type = type;
            this.image = new createjs.Bitmap(queue.getResult("bullet"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

        }

        // Function to fire bullet. Sets where bullet will begin, and adds it to stage
        fireBullet() {
            if (this.type == 1) {
                this.image.x = 65;
                this.image.y = plane.image.y + 5;
            } else if (this.type == 2) {
                this.image.x = 400;
                this.image.y = finalBoss.image.y / 2;
            }
            game.addChild(this.image);
        }

        // Function to update position of bullet.
        bulletUpdate() {
            if (this.type == 1) {
                this.image.x += constants.BULLET_SPEED;
                if (this.image.x > stage.canvas.width) {
                    this.bulletReset();
                }
            } else if (this.type == 2) {
                this.image.x -= constants.BULLET_SPEED;
                if (this.image.x < stage.canvas.width) {
                    this.bulletReset();
                }
            }
        }
            
        // Function to reset bullet off screen, and destroy it
        bulletReset() {
            this.image.y = 700;
            game.removeChild(this.image);
        }
    }
} 