var duckfootBullets = [];

var duckfootBulletSpeed = 15;

function makeDuckfootBullet() {
    for (var i = 0; i < dTurrets.length; i++) {
        dTurrets[i].image = queue.getResult("duckfootFlash");
    }

    for (var i = 0; i < dTurrets.length; i++) {
        duckfootBullet = new createjs.Bitmap(queue.getResult("duckfootBullet"));
        duckfootBulletLeft = new createjs.Bitmap(queue.getResult("duckfootBullet"));
        duckfootBulletRight = new createjs.Bitmap(queue.getResult("duckfootBullet"));

        duckfootBullet.scaleX = duckfootBullet.scaleY = .7;
        duckfootBulletLeft.scaleX = duckfootBulletLeft.scaleY = .7;
        duckfootBulletRight.scaleX = duckfootBulletRight.scaleY = .7;
        if (dTurrets[i].rotation === 0) {
            duckfootBullet.x = dTurrets[i].x + 10;
            duckfootBullet.y = dTurrets[i].y - 25;

            duckfootBulletLeft.x = dTurrets[i].x + 10;
            duckfootBulletLeft.y = dTurrets[i].y - 25;

            duckfootBulletRight.x = dTurrets[i].x + 10;
            duckfootBulletRight.y = dTurrets[i].y - 25;

            duckfootBullet.rotation = 0;
            duckfootBulletLeft.rotation = 330;
            duckfootBulletRight.rotation = 30;

        } else if (dTurrets[i].rotation === 90) {
            duckfootBullet.x = dTurrets[i].x + 25;
            duckfootBullet.y = dTurrets[i].y;

            duckfootBulletLeft.x = dTurrets[i].x + 25;
            duckfootBulletLeft.y = dTurrets[i].y;

            duckfootBulletRight.x = dTurrets[i].x + 25;
            duckfootBulletRight.y = dTurrets[i].y;

            duckfootBullet.rotation = 90;
            duckfootBulletLeft.rotation = 60;
            duckfootBulletRight.rotation = 120;

        } else if (dTurrets[i].rotation === 180) {
            duckfootBullet.x = dTurrets[i].x - 10;
            duckfootBullet.y = dTurrets[i].y + 25;

            duckfootBulletLeft.x = dTurrets[i].x - 10;
            duckfootBulletLeft.y = dTurrets[i].y + 25;

            duckfootBulletRight.x = dTurrets[i].x - 10;
            duckfootBulletRight.y = dTurrets[i].y + 25;

            duckfootBullet.rotation = 180;
            duckfootBulletLeft.rotation = 150;
            duckfootBulletRight.rotation = 210;

        } else if (dTurrets[i].rotation === 270) {
            duckfootBullet.x = dTurrets[i].x - 25;
            duckfootBullet.y = dTurrets[i].y - 10;

            duckfootBulletLeft.x = dTurrets[i].x - 25;
            duckfootBulletLeft.y = dTurrets[i].y - 10;

            duckfootBulletRight.x = dTurrets[i].x - 25;
            duckfootBulletRight.y = dTurrets[i].y - 10;

            duckfootBullet.rotation = 270;
            duckfootBulletLeft.rotation = 240;
            duckfootBulletRight.rotation = 300;

        }

        duckfootBullets.push(duckfootBulletLeft);
        duckfootBullets.push(duckfootBulletRight);
        duckfootBullets.push(duckfootBullet);
        stage.addChild(duckfootBullet);
        stage.addChild(duckfootBulletLeft);
        stage.addChild(duckfootBulletRight);
    }

}

function updateDuckfootBullets() {
    for (var i = 0; i < duckfootBullets.length; i++) {
        if (duckfootBullets[i].rotation === 0) {
            duckfootBullets[i].x += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 90) {
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 180) {
            duckfootBullets[i].x -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 270) {
            duckfootBullets[i].y -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 330) {
            duckfootBullets[i].x += duckfootBulletSpeed;
            duckfootBullets[i].y -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 30) {
            duckfootBullets[i].x += duckfootBulletSpeed;
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 60) {
            duckfootBullets[i].x += duckfootBulletSpeed;
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 120) {
            duckfootBullets[i].x -= duckfootBulletSpeed;
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 150) {
            duckfootBullets[i].x -= duckfootBulletSpeed;
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 210) {
            duckfootBullets[i].x -= duckfootBulletSpeed;
            duckfootBullets[i].y -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 240) {
            duckfootBullets[i].x -= duckfootBulletSpeed;
            duckfootBullets[i].y -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 300) {
            duckfootBullets[i].x += duckfootBulletSpeed;
            duckfootBullets[i].y -= duckfootBulletSpeed;
        }
        if (inbounds(duckfootBullets[i].x, duckfootBullets[i].y) == false) {
            stage.removeChild(duckfootBullets[i]);
            duckfootBullets.splice(i--, 1);
        }
    }

}

function checkDuckfootBulletCollision() {
    for (var i = 0; i < duckfootBullets.length; i++) {
        if (ndgmr.checkRectCollision(duckfootBullets[i], player) != null && player.tooStrong == false) {
            player.gotHit = true;
            healthSize -= .1;
            stage.removeChild(duckfootBullets[i]);
            duckfootBullets.splice(i--, 1);
        }
    }
}