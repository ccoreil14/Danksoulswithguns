var playerbullets = [];
//You were changing this one

var can = document.getElementById("game");

var playerBulletSheet = new createjs.SpriteSheet({
    images: [queue.getResult("shotnorm")],
    frames: [[0, 0, 60, 36, 0, 0.95, 0.6500000000000004], [60, 0, 59, 40, 0, 0.95, 2.6500000000000004], [119, 0, 57, 44, 0, -0.050000000000000044, 4.65], [176, 0, 51, 50, 0, -3.05, 7.65], [0, 50, 45, 56, 0, -6.05, 10.65], [45, 50, 40, 60, 0, -8.05, 12.65], [85, 50, 38, 60, 0, -9.05, 12.65], [123, 50, 40, 60, 0, -8.05, 12.65], [163, 50, 45, 56, 0, -6.05, 10.65], [0, 110, 51, 50, 0, -3.05, 7.65], [51, 110, 57, 44, 0, -0.050000000000000044, 4.65], [108, 110, 59, 39, 0, 0.95, 1.6500000000000004]],
    animations: {
        spin: [0, 11, "spin", .4],
    }
});

function makePlayerBullet(playerX, playerY, mX, mY) {
    playerbullet = new createjs.Sprite(playerBulletSheet);

    playerbullet.x = playerX;
    playerbullet.y = playerY;
    playerbullet.scaleY = .3;
    playerbullet.scaleX = .3;
    var meowX = mX - can.offsetLeft;
    var meowY = mY - can.offsetTop;

    var deltaX = Math.abs(playerbullet.x - meowX);
    var deltaY = Math.abs(playerbullet.y - meowY);

    var hyp = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    var speed = 15 / hyp;

    playerbullet.addX = ((1 - speed) * playerbullet.x + speed * meowX) - playerX;
    playerbullet.addY = ((1 - speed) * playerbullet.y + speed * meowY) - playerY;

    playerbullet.gotoAndPlay("spin");
    playerbullets.push(playerbullet);
    stage.addChild(playerbullet);
}

function updateBullets() {
    for (var i = 0; i < playerbullets.length; i++) {
        playerbullets[i].x += playerbullets[i].addX;
        playerbullets[i].y += playerbullets[i].addY;
        if (inbounds(playerbullets[i].x, playerbullets[i].y) == false) {
            stage.removeChild(playerbullets[i]);
            playerbullets.splice(i--, 1);
        }
    }
}

function checkPlayerBulletCollision() {
    for (var i = 0; i < playerbullets.length; i++) {
        for (var j = 0; j < turrets.length; j++) {
            if (ndgmr.checkRectCollision(playerbullets[i], turrets[j]) != null) {
                turrets[j].hitpoints -= 1;
                stage.removeChild(playerbullets[i]);
                playerbullets.splice(i--, 1);
                break;
            }
        }
    }
}