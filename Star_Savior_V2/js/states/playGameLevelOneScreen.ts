/// <reference path="../constants.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/lava.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/scoreboard.ts" />
/**
File Name: playGameLevelOne.ts
Author: Blake Murdock and Mallory Steele
Website Name: This is the game play screen state for Star Savior
Purpose: This file contains all of the elements of the game play screen
*/
module states {
    var levelOneText: createjs.Text;
    // Game loop function, that makes sure everything runs smoothly
    export function playLevelOneState() {
        lava.update();
        star.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }
        managers.collisionCheck();
        console.log(managers.collisionCheck());
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
            lava.destroy();
            star.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeChild(game);

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreboard.score == 500) {
            lava.destroy();
            plane.destroy();
            star.destroy();
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                enemies[count].destroy();
            }

            currentState = constants.PLAY_STATE_LEVEL_TWO;
            changeState(currentState);
        }
    }

    // play state Function
    export function playLevelOne(): void {
        game = new createjs.Container();
        // Set mouse cursor to none (avatar will take place of cursor
        stage.cursor = "none";
        lava = new objects.Lava(stage, game);
        star = new objects.Star(stage, game);
        plane = new objects.Plane(stage, game);
        
        levelOneText = new createjs.Text("Level One", constants.LABEL_FONT, constants.LABEL_COLOUR);
        levelOneText.x = stage.canvas.width / 4 + 60;
        levelOneText.y = stage.canvas.height / 4 + 20;
        createjs.Ticker.addEventListener("tick", tick);
        function tick(event) {
            // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
            levelOneText.y += event.delta / 1000 * 100;
            // this will log a steadily increasing value:
            console.log("total time: " + createjs.Ticker.getTime());
        }
        game.addChild(levelOneText);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        scoreboard = new objects.scoreBoard(stage, game);


        stage.addChild(game);

    }
} 