﻿/// <reference path="../objects/star.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/enemy.ts" />
/**
File Name: collision.ts
Author: Blake Murdock and MAllory Steele
Website Name: Collision class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains the manager for all collisions between objects
*/
module managers {
    // The Distance Function
    // Checks the distance between two objects
    export function distance(p1: createjs.Point, p2: createjs.Point): number {
        var firstPoint: createjs.Point;
        var secondPoint: createjs.Point;
        var theXs: number;
        var theYs: number;
        var result: number;

        firstPoint = new createjs.Point();
        secondPoint = new createjs.Point();

        firstPoint.x = p1.x;
        firstPoint.y = p1.y;

        secondPoint.x = p2.x;
        secondPoint.y = p2.y;

        theXs = secondPoint.x - firstPoint.x;
        theYs = secondPoint.y - firstPoint.y;

        theXs *= theXs;
        theYs *= theYs;

        result = Math.sqrt(theXs + theYs);

        return result;
    }

    // Check collision between plane and star
    export function planeAndStar() {
        var point1: createjs.Point = new createjs.Point();
        var point2: createjs.Point = new createjs.Point();

        point1.x = plane.image.x;
        point1.y = plane.image.y;

        point2.x = star.image.x;
        point2.y = star.image.y;
        if (distance(point1, point2) < ((plane.height * 0.5) + (star.height * 0.5))) {
            constants.PLAYER_SCORE += 100;
            switch (constants.PLAYER_SCORE) {
                case 1000:
                    createjs.Sound.play('lifeUpAudio');
                    constants.PLAYER_LIVES += 1;
                    break;
                case 2000:
                    createjs.Sound.play('lifeUpAudio');
                    constants.PLAYER_LIVES += 1;
                    break;
                case 3000:
                    createjs.Sound.play('lifeUpAudio');
                    constants.PLAYER_LIVES += 1;
                    break;
                case 4000:
                    createjs.Sound.play('lifeUpAudio');
                    constants.PLAYER_LIVES += 1;
                    break;
                case 5000:
                    createjs.Sound.play('lifeUpAudio');
                    constants.PLAYER_LIVES += 1;
                    break;
                default:
                    createjs.Sound.play("pickupAudio");
                    break;
            }
            star.reset();
        };
    }

    // Check collision between plane and enemy
    export function planeAndEnemy(enemy: objects.Enemy) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        p1.x = plane.image.x;
        p1.y = plane.image.y;
        p2.x = enemy.image.x;
        p2.y = enemy.image.y;
        if (distance(p1, p2) <= ((plane.height * 0.5) + (enemy.height * 0.5))) {
            createjs.Sound.play("explosionAudio");
            constants.PLAYER_LIVES -= 1;
            enemy.reset();
        }
    }

    // Check all collisions
    export function collisionCheck() {
        planeAndStar();
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            planeAndEnemy(enemies[count]);
            for (var i = 0; i < bullets.length; i++) {
                bulletAndEnemy(enemies[count], bullets[i]);
            }
        };
        if (currentState == constants.PLAY_STATE_LEVEL_TWO) {
            planeAndAsteroid(asteroid);
        };
        if (currentState == constants.PLAY_STATE_LEVEL_THREE) {
            for (var count = 0; count < constants.ASTEROID_NUM; count++) {
                planeAndAsteroid(asteroids[count]);
            }
        };
    }
    
    // Check collision between bullet and enemy
    export function bulletAndEnemy(enemy: objects.Enemy, bullet: objects.Bullet) {
        var point1: createjs.Point = new createjs.Point();
        var point2: createjs.Point = new createjs.Point();

        point1.x = bullet.image.x;
        point1.y = bullet.image.y;

        point2.x = enemy.image.x;
        point2.y = enemy.image.y;
        if (distance(point1, point2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
            createjs.Sound.play("explosionAudio");
            constants.PLAYER_SCORE += 100;
            enemy.reset();
            bullet.bulletReset();
        };
    }

    export function planeAndAsteroid(asteroid: objects.Asteroid) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        p1.x = plane.image.x;
        p1.y = plane.image.y;
        p2.x = asteroid.image.x;
        p2.y = asteroid.image.y;
        if (distance(p1, p2) <= ((plane.height * 0.5) + (asteroid.height * 0.5))) {
            createjs.Sound.play("explosionAudio");
            constants.PLAYER_LIVES -= 1;
            asteroid.reset();
        }


    }

}