﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/lava.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/scoreboard.ts" />
/**
File Name: playGameLevelThree.ts
Author: Blake Murdock and Mallory Steele
Website Name: This is the game play screen state for Star Savior
Purpose: This file contains all of the elements of the game play screen
*/
var states;
(function (states) {
    // Game loop function, that makes sure everything runs smoothly
    function playLevelThreeState() {
        crazySpace.update();
        star.update();
        createjs.Sound.play('level3Soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }
        managers.collisionCheck();

        for (var i = 0; i < bullets.length; i++) {
            bullets[i].bulletUpdate();
        }

        plane.update();
        scoreboard.update();

        // If lives is 0 or lower, destroy all objects and go to gameover screen
        if (scoreboard.lives <= 0) {
            states.getHighScore(scoreboard.score);
            stage.removeChild(game);
            plane.destroy();
            crazySpace.destroy();
            star.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeChild(game);

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playLevelThreeState = playLevelThreeState;

    // play state Function
    function playLevelThree() {
        game = new createjs.Container();

        // Set mouse cursor to none (avatar will take place of cursor
        stage.cursor = "none";
        crazySpace = new objects.levelThreeBackground(stage, game);
        star = new objects.Star(stage, game);
        plane = new objects.Plane(stage, game);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
    }
    states.playLevelThree = playLevelThree;
})(states || (states = {}));
//# sourceMappingURL=playGameLevelThreeScreen.js.map
