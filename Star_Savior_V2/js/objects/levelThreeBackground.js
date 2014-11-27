/**
File Name: levelThreeBackground.ts
Author: Blake Murdock and Mallory Steele
Website Name: levelThreeBackground object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a levelThreeBackground object
*/
var objects;
(function (objects) {
    // levelThreeBackground Class
    var levelThreeBackground = (function () {
        function levelThreeBackground(stage, game) {
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
        // Function to reset position of first lava image.
        levelThreeBackground.prototype.reset1 = function () {
            this.image.x = 628;
        };

        // Function to reset position of second lava image.
        levelThreeBackground.prototype.reset2 = function () {
            this.image2.x = 0;
        };

        // Function to update position of lava.
        levelThreeBackground.prototype.update = function () {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        };

        // Function to destroy lava object.
        levelThreeBackground.prototype.destroy = function () {
            this.game.removeChild(this.image);
            this.game.removeChild(this.image2);
        };
        return levelThreeBackground;
    })();
    objects.levelThreeBackground = levelThreeBackground;
})(objects || (objects = {}));
//# sourceMappingURL=levelThreeBackground.js.map
