var duckfootBullets = [];

var duckfootBulletSpeed = 15;

function makeDuckfootBullet() {
    for (var i = 0; i < turrets.length; i++) {
        duckfootBullet = new createjs.Bitmap(queue.getResult("duckfootBullet"));
        if (turrets[i].rotation === 0) {
            duckfootBullet.x = turrets[i].x + 10;
            duckfootBullet.y = turrets[i].y - 25;
            duckfootBullet.rotation = 0;
        } else if (turrets[i].rotation === 90) {
            duckfootBullet.x = turrets[i].x + 25;
            duckfootBullet.y = turrets[i].y;
            duckfootBullet.rotation = 90;
        } else if (turrets[i].rotation === 180) {
            duckfootBullet.x = turrets[i].x - 10;
            duckfootBullet.y = turrets[i].y + 25;
            duckfootBullet.rotation = 180;
        } else if (turrets[i].rotation === 270) {
            duckfootBullet.x = turrets[i].x - 25;
            duckfootBullet.y = turrets[i].y - 10;
            duckfootBullet.rotation = 270;
        }

        duckfootBullets.push(duckfootBullet);
        stage.addChild(duckfootBullet);
    }

}

function updateDuckfootBullets() {
    for (var i = 0; i < duckfootBullets.length; i++) {
        if (duckfootBullets[i].rotation === 0) {
            duckfootBullets[i].x += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 90) {
            duckfootBullet.rotation = 90;
            duckfootBullets[i].y += duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 180) {
            duckfootBullet.rotation = 180;
            duckfootBullets[i].x -= duckfootBulletSpeed;
        }
        if (duckfootBullets[i].rotation === 270) {
            duckfootBullet.rotation = 270;
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
        if (ndgmr.checkRectCollision(duckfootBullets[i], player) != null) {
            healthSize -= .1;
            stage.removeChild(duckfootBullets[i]);
            duckfootBullets.splice(i--, 1);
        }
    }
}