var basicBullets = [];

var basicBulletSpeed = 15;

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

            basicBullet.rotation = 0;

        } else if (bTurrets[i].rotation === 90) {
            basicBullet.x = bTurrets[i].x + 25;
            basicBullet.y = bTurrets[i].y;

            basicBullet.rotation = 90;

        } else if (bTurrets[i].rotation === 180) {
            basicBullet.x = bTurrets[i].x - 10;
            basicBullet.y = bTurrets[i].y + 25;

            basicBullet.rotation = 180;

        } else if (bTurrets[i].rotation === 270) {
            basicBullet.x = bTurrets[i].x - 25;
            basicBullet.y = bTurrets[i].y - 10;

            basicBullet.rotation = 270;

        }
        playTurret3();

        basicBullets.push(basicBullet);
        stage.addChild(basicBullet);
    }

}

function updateBasicBullets() {
    for (var i = 0; i < basicBullets.length; i++) {
        if (basicBullets[i].rotation === 0) {
            basicBullets[i].x += basicBulletSpeed;
        }
        if (basicBullets[i].rotation === 90) {
            basicBullets[i].y += basicBulletSpeed;
        }
        if (basicBullets[i].rotation === 180) {
            basicBullets[i].x -= basicBulletSpeed;
        }
        if (basicBullets[i].rotation === 270) {
            basicBullets[i].y -= basicBulletSpeed;
        }
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