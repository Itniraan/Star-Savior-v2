/// <reference path="../constants.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/lava.ts" />
/**
File Name: winScreen.ts
Author: Blake Murdock and Mallory Steele
Website Name: This is the game win screen state for Star Savior
Purpose: This file contains all of the elements of the game win screen (high score, play again)
*/
module states {

    // Game loop, update lava in background
    export function gameWinState() {
        crazySpaceWin.update();
    }

    // win function, that sets up where everything is on the canvas, and the event listeners
    export function gameWin() {
        // Text and labels
        var gameWinMessage: string = "Wow you kicked butt! You win!!";
        var gameWinLabel: objects.Label;
        var finalScoreMessage: string = "Your final score was: " + constants.PLAYER_SCORE.toString();
        var finalScoreLabel: objects.Label;
        gameWinLabel = new objects.Label(300, 100, gameWinMessage);
        finalScoreLabel = new objects.Label(300, 200, finalScoreMessage);
        // Buttons
        var playAgainButton: createjs.Bitmap;
        playAgainButton = new createjs.Bitmap(queue.getResult("playAgainButton"));

        // game and lava variables
        game = new createjs.Container();
        crazySpaceWin = new objects.levelThreeBackground(stage, game);

        // Set up where the new objects are on the canvas
        playAgainButton.x = stage.canvas.width / 4;
        playAgainButton.y = 300;

        // Set up event listeners
        playAgainButton.addEventListener("mouseover", function () {
            playAgainButton.alpha = 0.5;
        });
        playAgainButton.addEventListener("mouseout", function () {
            playAgainButton.alpha = 1;
        });
        playAgainButton.addEventListener("click", function () {
            // If play again button is clicked, destroy all objects and start new game
            crazySpace.destroy();
            game.removeAllChildren;
            game.removeAllEventListeners;
            stage.removeChild(game);
            constants.PLAYER_LIVES = 3;
            constants.PLAYER_SCORE = 0;
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        // Add all objects to canvas
        game.addChild(gameWinLabel);
        game.addChild(finalScoreLabel);
        game.addChild(playAgainButton);
        // Set mouse cursor to default cursor
        stage.cursor = "default";

        stage.addChild(game);
        console.log(constants.PLAYER_SCORE);
    }

}