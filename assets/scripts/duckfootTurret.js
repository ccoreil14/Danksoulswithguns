function createDuckfoot(direction, x, y) {
    turret = new createjs.Bitmap(queue.getResult("duckfoot"));
    turret.regX = turret.regY = 50;
	turret.scaleX = turret.scaleY = .7;
    turret.hitpoints = 3;
    turret.moveRight = true;
    turret.getImage = function () {
        return this;
    }

    turret.x = x;
    turret.y = y;

    if (direction === "right") {
        turret.rotation = 0;
    } else if (direction === "down") {
        turret.rotation = 90;
    } else if (direction === "left") {
        turret.rotation = 180;
    } else if (direction === "up") {
        turret.rotation = 270;
    }
}

function moveTurretBetter() {
    for (var i = 0; i < turrets.length; i++) {
        //y pos
        if (turrets[i].rotation === 0) {
            if (inbounds(turrets[i].x, turrets[i].y + 30) == false) {
                turrets[i].moveRight = false;
            } else if (inbounds(turrets[i].x, turrets[i].y - 50) == false) {
                turrets[i].moveRight = true;
            }
            if (turrets[i].moveRight) {
                turrets[i].y += 5;
            } else {
                turrets[i].y -= 5;
            }
        }
        //x pos
        if (turrets[i].rotation === 90) {
            if (inbounds(turrets[i].x + 70, turrets[i].y) == false) {
                turrets[i].moveRight = false;
            } else if (inbounds(turrets[i].x - 50, turrets[i].y) == false) {
                turrets[i].moveRight = true;
            }
            if (turrets[i].moveRight) {
                turrets[i].x += 5;
            } else {
                turrets[i].x -= 5;
            }
        }
        //y pos
        if (turrets[i].rotation === 180) {
            if (inbounds(turrets[i].x, turrets[i].y - 30) == false) {
                turrets[i].moveRight = false;
            } else if (inbounds(turrets[i].x, turrets[i].y + 50) == false) {
                turrets[i].moveRight = true;
            }
            if (turrets[i].moveRight) {
                turrets[i].y -= 5;
            } else {
                turrets[i].y += 5;
            }
        }
        //x pos
        if (turrets[i].rotation === 270) {
            if (inbounds(turrets[i].x - 70, turrets[i].y) == false) {
                turrets[i].moveRight = false;
            } else if (inbounds(turrets[i].x + 50, turrets[i].y) == false) {
                turrets[i].moveRight = true;
            }
            if (turrets[i].moveRight) {
                turrets[i].x -= 5;
            } else {
                turrets[i].x += 5;
            }
        }
        if (turrets[i].hitpoints === 0) {
            stage.removeChild(turrets[i]);
            turrets.splice(i--, 1);
        }
    }
}
