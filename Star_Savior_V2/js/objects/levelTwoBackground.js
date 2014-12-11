/**
File Name: levelTwoBackground.ts
Author: Blake Murdock and Mallory Steele
Website Name: levelTwoBackground object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a levelTwoBackground object
*/
var objects;
(function (objects) {
    // LevelTwoBackground Class
    var levelTwoBackground = (function () {
        function levelTwoBackground(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("spaceLevelTwo"));
            this.image2 = new createjs.Bitmap(queue.getResult("spaceLevelTwo"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            game.addChild(this.image);
            game.addChild(this.image2);
            this.reset1();
            this.reset2();
        }
        // Function to reset position of first space image.
        levelTwoBackground.prototype.reset1 = function () {
            this.image.x = 628;
        };

        // Function to reset position of second space image.
        levelTwoBackground.prototype.reset2 = function () {
            this.image2.x = 0;
        };

        // Function to update position of space.
        levelTwoBackground.prototype.update = function () {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        };

        // Function to destroy space object.
        levelTwoBackground.prototype.destroy = function () {
            this.game.removeChild(this.image);
            this.game.removeChild(this.image2);
        };
        return levelTwoBackground;
    })();
    objects.levelTwoBackground = levelTwoBackground;
})(objects || (objects = {}));
//# sourceMappingURL=levelTwoBackground.js.map
