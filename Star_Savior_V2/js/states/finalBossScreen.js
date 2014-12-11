var states;
(function (states) {
    var finalBossText;
    function finalBossState() {
        crazySpace.update();
        finalBoss.update();
        managers.collisionCheck();

        for (var i = 0; i < bullets.length; i++) {
            bullets[i].bulletUpdate();
        }

        if (constants.PLAYER_LIVES <= 0) {
            states.getHighScore(constants.PLAYER_SCORE);
            createjs.Sound.stop();
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
    states.finalBossState = finalBossState;

    function playFinalBoss() {
        game = new createjs.Container();

        // Set mouse cursor to none (avatar will take place of cursor
        stage.cursor = "none";
        crazySpace = new objects.levelThreeBackground(stage, game);
        finalBoss = new objects.FinalBoss(stage, game);
        plane = new objects.Plane(stage, game);
        finalBossText = new createjs.Text("Final Boss", constants.LABEL_FONT, constants.LABEL_COLOUR);
        finalBossText.x = stage.canvas.width / 4 + 60;
        finalBossText.y = stage.canvas.height / 4 + 20;
        createjs.Ticker.addEventListener("tick", tick);
        function tick(event) {
            // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
            finalBossText.y += event.delta / 1000 * 100;

            // this will log a steadily increasing value:
            console.log("total time: " + createjs.Ticker.getTime());
        }
        game.addChild(finalBossText);

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
    }
    states.playFinalBoss = playFinalBoss;
})(states || (states = {}));
//# sourceMappingURL=finalBossScreen.js.map
