﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/lava.ts" />
/**
File Name: gameOver.ts
Author: Blake Murdock
Website Name: This is the game over screen state for Star Savior
Purpose: This file contains all of the elements of the game over screen (high score, play again)
*/
module states {
    // variable to keep high score in
    var highScore: number = 0;

    // Game loop, update lava in background
    export function gameOverState() {
        lava.update();
    }

    // game over function, that sets up where everything is on the canvas, and the event listeners
    export function gameOver() {
        // Text and labels
        var gameOverMessage: string = "You are out of lives! Game Over!";
        var gameOverLabel: objects.Label;
        var finalScoreMessage: string = "Your final score was: " + highScore.toString();
        var finalScoreLabel: objects.Label;
        gameOverLabel = new objects.Label(300, 100, gameOverMessage);
        finalScoreLabel = new objects.Label(300, 200, finalScoreMessage);
        // Buttons
        var playAgainButton: createjs.Bitmap;
        playAgainButton = new createjs.Bitmap(queue.getResult("playAgainButton"));

        // game and lava variables
        game = new createjs.Container();
        lava = new objects.Lava(stage, game);

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
            lava.destroy();
            game.removeAllChildren;
            game.removeAllEventListeners;
            stage.removeChild(game);
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        // Add all objects to canvas
        game.addChild(gameOverLabel);
        game.addChild(finalScoreLabel);
        game.addChild(playAgainButton);

        // Set mouse cursor to default cursor
        stage.cursor = "default";

        stage.addChild(game);
        console.log(highScore);
    }

    // function to retrieve high score
    export function getHighScore(score: number) {
        highScore = score;
    }

}