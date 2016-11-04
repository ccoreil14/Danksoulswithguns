var bossTurret;

function createBoss(x, y) {
    turret = new createjs.Bitmap(queue.getResult("boss"));
    turret.regX = turret.regY = 50;
    turret.scaleX = turret.scaleY = .7;
    turret.hitpoints = 10;
    turret.moveRight = true;
    turret.getImage = function () {
        return this;
    }

    turret.x = x;
    turret.y = y;
	turret.rotation = 90;
	bossTurret = turret;
}

function moveTheBoss() {
            if (inbounds(bossTurret.x + 70, bossTurret.y) == false) {
                bossTurret.moveRight = false;
            } else if (inbounds(bossTurret.x - 50, bossTurret.y) == false) {
                bossTurret.moveRight = true;
            }
            if (bossTurret.moveRight) {
                bossTurret.x += 5;
            } else {
                bossTurret.x -= 5;
            }
}