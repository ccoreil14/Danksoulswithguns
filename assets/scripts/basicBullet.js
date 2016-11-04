var basicBullets = [];

var basicBulletSpeed = 15;

//playerbullet.x = playerX;
//    playerbullet.y = playerY;
//    playerbullet.scaleY = .3;
//    playerbullet.scaleX = .3;
//    var meowX = mX - can.offsetLeft;
//    var meowY = mY - can.offsetTop;
//
//    var deltaX = Math.abs(playerbullet.x - meowX);
//    var deltaY = Math.abs(playerbullet.y - meowY);
//
//    var hyp = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
//
//    var speed = 15 / hyp;
//
//    playerbullet.addX = ((1 - speed) * playerbullet.x + speed * meowX) - playerX;
//    playerbullet.addY = ((1 - speed) * playerbullet.y + speed * meowY) - playerY;
//
//    playerbullet.gotoAndPlay("spin");
//    playerbullets.push(playerbullet);
//    stage.addChild(playerbullet);
//}
//
//function updateBullets() {
//    for (var i = 0; i < playerbullets.length; i++) {
//        playerbullets[i].x += playerbullets[i].addX;
//        playerbullets[i].y += playerbullets[i].addY;
//        if (inbounds(playerbullets[i].x, playerbullets[i].y) == false) {
//            stage.removeChild(playerbullets[i]);
//            playerbullets.splice(i--, 1);
//        }
//    }
//}

function makeBasicBullet() {
    var angle;
    for (var i = 0; i < bTurrets.length; i++) {
        bTurrets[i].image = queue.getResult("basicFlash");
    }
    for (var i = 0; i < bTurrets.length; i++) {
        basicBullet = new createjs.Bitmap(queue.getResult("basicBullet"));
        basicBullet.scaleX = basicBullet.scaleY = .7;

        if (bTurrets[i].rotation === 0) {

            basicBullet.x = bTurrets[i].x + 10;
            basicBullet.y = bTurrets[i].y - 25;

        } else if (bTurrets[i].rotation === 90) {

            basicBullet.x = bTurrets[i].x + 25;
            basicBullet.y = bTurrets[i].y;

        } else if (bTurrets[i].rotation === 180) {

            basicBullet.x = bTurrets[i].x - 10;
            basicBullet.y = bTurrets[i].y + 25;

        } else if (bTurrets[i].rotation === 270) {

            basicBullet.x = bTurrets[i].x - 25;
            basicBullet.y = bTurrets[i].y - 10;
        }

        angle = angle * (180 / Math.PI);

        basicBullet.rotation = angle;

        var meowX = player.x - can.offsetLeft;
        var meowY = player.y - can.offsetTop;

        var deltaX = Math.abs(basicBullet.x - meowX);
        var deltaY = Math.abs(basicBullet.y - meowY);

        var hyp = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

        var speed = 15 / hyp;

        basicBullet.addX = ((1 - speed) * basicBullet.x + speed * meowX) - basicBullet.x;
        basicBullet.addY = ((1 - speed) * basicBullet.y + speed * meowY) - basicBullet.y;

        basicBullets.push(basicBullet);
        stage.addChild(basicBullet);
    }

}

function updateBasicBullets() {
    for (var i = 0; i < basicBullets.length; i++) {
        basicBullets[i].x += basicBullets[i].addX;
        basicBullets[i].y += basicBullets[i].addY;
        if (inbounds(basicBullets[i].x, basicBullets[i].y) == false) {
            stage.removeChild(basicBullets[i]);
            basicBullets.splice(i--, 1);
        }
    }

}

function checkBasicBulletCollision() {
    for (var i = 0; i < basicBullets.length; i++) {
        if (ndgmr.checkRectCollision(basicBullets[i], player) != null && player.tooStrong === false) {
            player.gotHit = true;
            healthSize -= .1;
            stage.removeChild(basicBullets[i]);
            basicBullets.splice(i--, 1);
        }
    }
}