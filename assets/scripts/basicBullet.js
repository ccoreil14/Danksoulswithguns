var basicBullets = [];

var basicBulletSpeed = 15;
var angle;

function makeBasicBullet() {
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
        angle = Math.atan2(player.x - basicBullet.y, player.x - basicBullet.x);
        angle = angle * (180 / Math.PI);

        basicBullet.rotation = angle;
        playTurret3();

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