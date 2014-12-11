/// <reference path="../constants.ts" />
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
    var levelThreeText;

    // Game loop function, that makes sure everything runs smoothly
    function playLevelThreeState() {
        crazySpace.update();
        star.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }
        for (var count = 0; count < constants.ASTEROID_NUM; count++) {
            asteroids[count].update();
        }
        managers.collisionCheck();

        for (var i = 0; i < bullets.length; i++) {
            bullets[i].bulletUpdate();
        }

        plane.update();
        scoreboard.update();

        // If lives is 0 or lower, destroy all objects and go to gameover screen
        if (constants.PLAYER_LIVES <= 0) {
            states.getHighScore(constants.PLAYER_SCORE);
            createjs.Sound.stop();
            createjs.Sound.play('gameOverSoundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
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

        if (constants.PLAYER_SCORE == 3000) {
            states.getHighScore(constants.PLAYER_SCORE);
            createjs.Sound.stop();
            plane.destroy();
            star.destroy();
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                enemies[count].destroy();
            }

            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeChild(game);

            currentState = constants.WIN_STATE;
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

        levelThreeText = new createjs.Text("Level Three", constants.LABEL_FONT, constants.LABEL_COLOUR);
        levelThreeText.x = stage.canvas.width / 4 + 60;
        levelThreeText.y = stage.canvas.height / 4 + 20;
        createjs.Ticker.addEventListener("tick", tick);
        function tick(event) {
            // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
            levelThreeText.y += event.delta / 1000 * 100;

            // this will log a steadily increasing value:
            console.log("total time: " + createjs.Ticker.getTime());
        }
        game.addChild(levelThreeText);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        for (var count = 0; count < constants.ASTEROID_NUM; count++) {
            asteroids[count] = new objects.Asteroid(stage, game);
        }

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
    }
    states.playLevelThree = playLevelThree;
})(states || (states = {}));
//# sourceMappingURL=playGameLevelThreeScreen.js.map
