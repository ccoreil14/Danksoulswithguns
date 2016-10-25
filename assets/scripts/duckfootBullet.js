var duckfootBullets = [];

var duckfootBulletSpeed = 15;

function makeDuckfootBullet(){
	duckfootBullet = new createjs.Bitmap(queue.getResult("duckfootBullet"));
	if(turret.rotation === 0){
		duckfootBullet.x = turret.x + 60;
		duckfootBullet.y = turret.y + 25;
	}else if(turret.rotation === 90){
		duckfootBullet.x = turret.x + 25;
		duckfootBullet.y = turret.y;
	}else if(turret.rotation === 180){
		duckfootBullet.x = turret.x - 10;
		duckfootBullet.y = turret.y + 25;
	}else if(turret.rotation === 270){
		duckfootBullet.x = turret.x - 25;
		duckfootBullet.y = turret.y - 10;
	}
	
	duckfootBullets.push(duckfootBullet);
	stage.addChild(duckfootBullet);
}

function updateDuckfootBullets() {
    for (i = 0; i < duckfootBullets.length; i++) {
		if(turret.rotation === 0){
			duckfootBullets[i].x += duckfootBulletSpeed;
		}
		if(turret.rotation === 90){
			duckfootBullet.rotation = 90;
			duckfootBullets[i].y += duckfootBulletSpeed;
		}
		if(turret.rotation === 180){
			duckfootBullet.rotation = 180;
			duckfootBullets[i].x -= duckfootBulletSpeed;
		}
		if(turret.rotation === 270){
			duckfootBullet.rotation = 270;
			duckfootBullets[i].y -= duckfootBulletSpeed;
		}
		
		     
        if (inbounds(duckfootBullets[i].x, duckfootBullets[i].y) == false) {
            stage.removeChild(duckfootBullets[i]);
            duckfootBullets.splice(i--, 1);
        }
    }
}