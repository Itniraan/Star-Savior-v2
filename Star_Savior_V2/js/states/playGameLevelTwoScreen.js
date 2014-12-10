/// <reference path="../constants.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/lava.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/scoreboard.ts" />
/**
File Name: playGameLevelTwo.ts
Author: Blake Murdock and Mallory Steele
Website Name: This is the game play screen state for Star Savior
Purpose: This file contains all of the elements of the game play screen
*/
var states;
(function (states) {
    var levelTwoText;

    // Game loop function, that makes sure everything runs smoothly
    function playLevelTwoState() {
        space.update();
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
        asteroid.update();
        scoreboard.update();

        // If lives is 0 or lower, destroy all objects and go to gameover screen
        if (constants.PLAYER_LIVES <= 0) {
            states.getHighScore(constants.PLAYER_SCORE);
            createjs.Sound.stop();
            stage.removeChild(game);
            plane.destroy();
            space.destroy();
            star.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeChild(game);

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (constants.PLAYER_SCORE == 1000) {
            createjs.Sound.stop();
            createjs.Sound.play('level3Soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            space.destroy();
            plane.destroy();
            star.destroy();
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                enemies[count].destroy();
            }

            currentState = constants.PLAY_STATE_LEVEL_THREE;
            changeState(currentState);
        }
    }
    states.playLevelTwoState = playLevelTwoState;

    // play state Function
    function playLevelTwo() {
        game = new createjs.Container();

        // Set mouse cursor to none (avatar will take place of cursor
        stage.cursor = "none";
        space = new objects.levelTwoBackground(stage, game);
        star = new objects.Star(stage, game);
        plane = new objects.Plane(stage, game);

        levelTwoText = new createjs.Text("Level Two", constants.LABEL_FONT, constants.LABEL_COLOUR);
        levelTwoText.x = stage.canvas.width / 4 + 60;
        levelTwoText.y = stage.canvas.height / 4 + 20;
        createjs.Ticker.addEventListener("tick", tick);
        function tick(event) {
            // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
            levelTwoText.y += event.delta / 1000 * 100;

            // this will log a steadily increasing value:
            console.log("total time: " + createjs.Ticker.getTime());
        }
        game.addChild(levelTwoText);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        asteroid = new objects.Asteroid(stage, game);

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
    }
    states.playLevelTwo = playLevelTwo;
})(states || (states = {}));
//# sourceMappingURL=playGameLevelTwoScreen.js.map
