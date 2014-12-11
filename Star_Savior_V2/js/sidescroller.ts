/// <reference path="constants.ts" />
/// <reference path="states/mainmenuscreen.ts" />
/// <reference path="states/playgamelevelonescreen.ts" />
/// <reference path="states/gameoverscreen.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/lava.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/bullet.ts" />


/**
File Name: sidescroller.ts
Author: Blake Murdock and Mallory Steele
Website Name: Main TypeScript file for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains initialization, preload, and state machine for the
arcade game
*/

var stage: createjs.Stage;
var game: createjs.Container;
var queue;



// Game Objects
var plane: objects.Plane;
var star: objects.Star;
var lava: objects.Lava;
var space: objects.levelTwoBackground;
var crazySpace: objects.levelThreeBackground;
var crazySpaceWin: objects.levelThreeBackground;
var scoreboard: objects.scoreBoard;
var bullet: objects.Bullet;
var asteroid: objects.Asteroid;
var finalBoss: objects.FinalBoss;

// Enemy Array
var enemies = [];
var bullets = [];
var bossBullets = [];
var asteroids = [];

// State variables
var currentState: number;
var currentStateFunction;

// Pre-load function - this loads all of the assets ahead of time
function preload(): void {
    queue = new createjs.LoadQueue();
    // Load the sound plugin
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.addEventListener("complete", init);
    queue.loadManifest([
        // Audio Assets
        { id: "gameStartAudio", src: "assets/audio/gameStart.mp3" },
        { id: "explosionAudio", src: "assets/audio/Explosion.mp3" },
        { id: "pickupAudio", src: "assets/audio/pickupStar.mp3" },
        { id: "lifeUpAudio", src: "assets/audio/lifeUp.mp3" },
        { id: "shootAudio", src: "assets/audio/Laser_Shoot.mp3" },
		{ id: "level1Soundtrack", src: "assets/audio/level1Soundtrack.mp3" },
		{ id: "level2Soundtrack", src: "assets/audio/level2Soundtrack.mp3" },
        { id: "level3Soundtrack", src: "assets/audio/level3Soundtrack.mp3" },
        { id: "gameOverSoundtrack", src: "assets/audio/Nevermore.mp3" },
        { id: "mainMenuSoundtrack", src: "assets/audio/mainMenu.mp3" },
        { id: "gameWinSoundtrack", src: "assets/audio/gameWin.mp3" },
        // Sprite Assets
        { id: "plane", src: "assets/img/Endymion_Sprite.png" },
        { id: "lava", src: "assets/img/lava-tileset.png" },
        { id: "spaceLevelTwo", src: "assets/img/level2Background.png" },
        { id: "bullet", src: "assets/img/bullet-basic.png" },
        { id: "enemy", src: "assets/img/Einhander_2.png" },
        { id: "star", src: "assets/img/star.png" },
		{ id: "spaceLevelThree", src: "assets/img/level3Background.png" },
		{ id: "enemy1", src: "assets/img/enemy1.png" },
		{ id: "enemy2", src: "assets/img/enemy2.png" },
		{ id: "enemy3", src: "assets/img/enemy3.png" },
        { id: "bossMonster", src: "assets/img/bossMonster.png" },
        { id: "asteroid", src: "assets/img/Asteroid.png" },
        // Button Assets
        { id: "playButton", src: "assets/img/playButton.png" },
        { id: "instructionsButton", src: "assets/img/instructionsButton.png" },
        { id: "okButton", src: "assets/img/okButton.png" },
        { id: "playAgainButton", src: "assets/img/playAgainButton.png" }
    ]);
}

// Initialization function - This is where the stage gets created, everything gets set up
function init(): void {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    game = new createjs.Container();
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    // When game begins, current state will be opening menu (MENU_STATE)
    //scoreboard = new objects.scoreBoard(stage, game);
    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    // Check current state, then update stage
    currentStateFunction();
    stage.update();
}

// This is the state machine function, that allows the game to switch to different 
// screens, or states, depending on where the player is in the game
function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE_LEVEL_ONE:
            // instantiate play state level 1 screen
            currentStateFunction = states.playLevelOneState;
            states.playLevelOne();
            break;
        case constants.PLAY_STATE_LEVEL_TWO:
            // instantiate play state level 2 screen
            currentStateFunction = states.playLevelTwoState;
            states.playLevelTwo();
            break;
        case constants.PLAY_STATE_LEVEL_THREE:
            // instantiate play state level 3 screen
            currentStateFunction = states.playLevelThreeState;
            states.playLevelThree();
            break;
        case constants.FINAL_BOSS_STATE:
            // instantiate final boss screen
            currentStateFunction = states.finalBossState;
            states.playFinalBoss();
            break;
        case constants.WIN_STATE:
            // instantiate win screen
            currentStateFunction = states.gameWinState();
            states.gameWin();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}