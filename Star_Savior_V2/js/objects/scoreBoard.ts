﻿/// <reference path="../constants.ts" />
/**
File Name: scoreBoard.ts
Author: Blake Murdock and Mallory Steele
Website Name: Scorboard object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Scoreboard object
*/
module objects {
    // Scoreboard class
    export class scoreBoard {
        label: createjs.Text;
        stage: createjs.Stage;
        game: createjs.Container;
        labelString: string = "null";
        lives: number = constants.PLAYER_LIVES;
        score: number = 0;
        width: number;
        height: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.label);
        }

        // Functon to update score on screen
        update() {
            this.labelString = "Lives: " + constants.PLAYER_LIVES.toString() + " Score: " + constants.PLAYER_SCORE.toString();
            this.label.text = this.labelString;
        }
    }
}