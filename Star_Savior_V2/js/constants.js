/**
File Name: constants.ts
Author: Blake Murdock and Mallory Steele
Website Name: Constants class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all constant variables that will be used in the game
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE_LEVEL_ONE = 1;
    constants.PLAY_STATE_LEVEL_TWO = 2;
    constants.PLAY_STATE_LEVEL_THREE = 3;
    constants.FINAL_BOSS_STATE = 4;
    constants.WIN_STATE = 5;
    constants.GAME_OVER_STATE = 6;

    // Game Constants
    constants.ENEMY_NUM = 3;
    constants.ASTEROID_NUM = 3;
    constants.LABEL_FONT = "30px Consolas";
    constants.LABEL_COLOUR = "#FFFFFF";
    constants.PLAYER_LIVES = 3;
    constants.BULLET_SPEED = 5;
    constants.PLAYER_SCORE = 0;
    constants.PLAYER_LIVES = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
