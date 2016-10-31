var duckfootBullets = [];

var duckfootBulletSpeed = 15;

function makeDuckfootBullet() {
    for (var i = 0; i < turrets.length; i++) {
        duckfootBullet = new createjs.Bitmap(queue.getResult("duckfootBullet"));
		duckfootBulletLeft = new createjs.Bitmap(queue.getResult("duckfootBullet"));
		duckfootBulletRight = new createjs.Bitmap(queue.getResult("duckfootBullet"));
		
		duckfootBullet.scaleX = duckfootBullet.scaleY = .7;
		duckfootBulletLeft.scaleX = duckfootBulletLeft.scaleY = .7;
		duckfootBulletRight.scaleX = duckfootBulletRight.scaleY = .7;
        if (turrets[i].rotation === 0) {
            duckfootBullet.x = turrets[i].x + 10;
            duckfootBullet.y = turrets[i].y - 25;
			
			duckfootBulletLeft.x = turrets[i].x + 10;
			duckfootBulletLeft.y = turrets[i].y - 25;
			
			duckfootBulletRight.x = turrets[i].x + 10;
			duckfootBulletRight.y = turrets[i].y - 25;
			
            duckfootBullet.rotation = 0;
			duckfootBulletLeft.rotation = 330;
			duckfootBulletRight.rotation = 30;
			
        } else if (turrets[i].rotation === 90) {
            duckfootBullet.x = turrets[i].x + 25;
            duckfootBullet.y = turrets[i].y;
		
			duckfootBulletLeft.x = turrets[i].x + 25;
            duckfootBulletLeft.y = turrets[i].y;
			
			duckfootBulletRight.x = turrets[i].x + 25;
            duckfootBulletRight.y = turrets[i].y;
			
            duckfootBullet.rotation = 90;
			duckfootBulletLeft.rotation = 60;
			duckfootBulletRight.rotation = 120;
			
        } else if (turrets[i].rotation === 180) {
            duckfootBullet.x = turrets[i].x - 10;
            duckfootBullet.y = turrets[i].y + 25;
			
			duckfootBulletLeft.x = turrets[i].x - 10;
            duckfootBulletLeft.y = turrets[i].y + 25;
			
			duckfootBulletRight.x = turrets[i].x - 10;
            duckfootBulletRight.y = turrets[i].y + 25;
			
            duckfootBullet.rotation = 180;
			duckfootBulletLeft.rotation = 150;
			duckfootBulletRight.rotation = 210;
			
        } else if (turrets[i].rotation === 270) {
            duckfootBullet.x = turrets[i].x - 25;
            duckfootBullet.y = turrets[i].y - 10;
			
			duckfootBulletLeft.x = turrets[i].x - 25;
            duckfootBulletLeft.y = turrets[i].y - 10;
			
			duckfootBulletRight.x = turrets[i].x - 25;
            duckfootBulletRight.y = turrets[i].y - 10;
			
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
		if(duckfootBullets[i].rotation === 330){
			duckfootBullets[i].x += duckfootBulletSpeed;
			duckfootBullets[i].y -= duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 30){
			duckfootBullets[i].x += duckfootBulletSpeed;
			duckfootBullets[i].y += duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 60){
			duckfootBullets[i].x += duckfootBulletSpeed;
			duckfootBullets[i].y += duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 120){
			duckfootBullets[i].x -= duckfootBulletSpeed;
			duckfootBullets[i].y += duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 150){
			duckfootBullets[i].x -= duckfootBulletSpeed;
			duckfootBullets[i].y += duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 210){
			duckfootBullets[i].x -= duckfootBulletSpeed;
			duckfootBullets[i].y -= duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 240){
			duckfootBullets[i].x -= duckfootBulletSpeed;
			duckfootBullets[i].y -= duckfootBulletSpeed;
		}
		if(duckfootBullets[i].rotation === 300){
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