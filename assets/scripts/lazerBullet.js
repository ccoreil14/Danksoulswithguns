var lazerBullets = [];

var lazerBulletSpeed = 15;

function makeLazerBullet() {
    for (var i = 0; i < gTurrets.length; i++) {
        lazerBullet = new createjs.Bitmap(queue.getResult("lazerBullet"));
		
		lazerBullet.scaleX = lazerBullet.scaleY = .7;
        if (gTurrets[i].rotation === 0) {
            lazerBullet.x = gTurrets[i].x + 10;
            lazerBullet.y = gTurrets[i].y - 25;
			
            lazerBullet.rotation = 0;
			
        } else if (gTurrets[i].rotation === 90) {
            lazerBullet.x = gTurrets[i].x + 25;
            lazerBullet.y = gTurrets[i].y;
			
            lazerBullet.rotation = 90;
			
        } else if (gTurrets[i].rotation === 180) {
            lazerBullet.x = gTurrets[i].x - 10;
            lazerBullet.y = gTurrets[i].y + 25;
			
            lazerBullet.rotation = 180;
			
        } else if (gTurrets[i].rotation === 270) {
            lazerBullet.x = gTurrets[i].x - 25;
            lazerBullet.y = gTurrets[i].y - 10;
			
            lazerBullet.rotation = 270;
			
        }

        lazerBullets.push(lazerBullet);
        stage.addChild(lazerBullet);
    }

}

function updateLazerBullets() {
    for (var i = 0; i < lazerBullets.length; i++) {
        if (lazerBullets[i].rotation === 0) {
            lazerBullets[i].x += lazerBulletSpeed;
        }
        if (lazerBullets[i].rotation === 90) {
            lazerBullets[i].y += lazerBulletSpeed;
        }
        if (lazerBullets[i].rotation === 180) {
            lazerBullets[i].x -= lazerBulletSpeed;
        }
        if (lazerBullets[i].rotation === 270) {
            lazerBullets[i].y -= lazerBulletSpeed;
        }
        if (inbounds(lazerBullets[i].x, lazerBullets[i].y) == false) {
            stage.removeChild(lazerBullets[i]);
            lazerBullets.splice(i--, 1);
        }
    }

}

function checkLazerBulletCollision() {
    for (var i = 0; i < lazerBullets.length; i++) {
        if (ndgmr.checkRectCollision(lazerBullets[i], player) != null && player.tooStrong === false) {
            healthSize -= .1;
            stage.removeChild(lazerBullets[i]);
            lazerBullets.splice(i--, 1);
        }
    }
}