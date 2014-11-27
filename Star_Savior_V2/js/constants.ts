/**
File Name: constants.ts
Author: Blake Murdock
Website Name: Constants class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all constant variables that will be used in the game
*/
module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE_LEVEL_ONE: number = 1;
    export var PLAY_STATE_LEVEL_TWO: number = 2;
    export var PLAY_STATE_LEVEL_THREE: number = 3;
    export var FINAL_BOSS_STATE: number = 4;
    export var WIN_STATE: number = 5;
    export var GAME_OVER_STATE: number = 6;
    // Game Constants
    export var ENEMY_NUM: number = 3;
    export var LABEL_FONT = "30px Consolas";
    export var LABEL_COLOUR = "#FFFFFF";
    export var PLAYER_LIVES = 3;
    export var BULLET_SPEED = 5;
} 