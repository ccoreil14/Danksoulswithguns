function createBasic(direction, x, y) {
    turret = new createjs.Bitmap(queue.getResult("basic"));
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


function moveBTurrets() {
    for (var i = 0; i < bTurrets.length; i++) {
        //y pos
        if (bTurrets[i].rotation === 0) {
            if (inbounds(bTurrets[i].x, bTurrets[i].y + 30) == false) {
                bTurrets[i].moveRight = false;
            } else if (inbounds(bTurrets[i].x, bTurrets[i].y - 50) == false) {
                bTurrets[i].moveRight = true;
            }
            if (bTurrets[i].moveRight) {
                bTurrets[i].y += 5;
            } else {
                bTurrets[i].y -= 5;
            }
        }
        //x pos
        if (bTurrets[i].rotation === 90) {
            if (inbounds(bTurrets[i].x + 70, bTurrets[i].y) == false) {
                bTurrets[i].moveRight = false;
            } else if (inbounds(bTurrets[i].x - 50, bTurrets[i].y) == false) {
                bTurrets[i].moveRight = true;
            }
            if (bTurrets[i].moveRight) {
                bTurrets[i].x += 5;
            } else {
                bTurrets[i].x -= 5;
            }
        }
        //y pos
        if (bTurrets[i].rotation === 180) {
            if (inbounds(bTurrets[i].x, bTurrets[i].y - 30) == false) {
                bTurrets[i].moveRight = false;
            } else if (inbounds(bTurrets[i].x, bTurrets[i].y + 50) == false) {
                bTurrets[i].moveRight = true;
            }
            if (bTurrets[i].moveRight) {
                bTurrets[i].y -= 5;
            } else {
                bTurrets[i].y += 5;
            }
        }
        //x pos
        if (bTurrets[i].rotation === 270) {
            if (inbounds(bTurrets[i].x - 70, bTurrets[i].y) == false) {
                bTurrets[i].moveRight = false;
            } else if (inbounds(bTurrets[i].x + 50, bTurrets[i].y) == false) {
                bTurrets[i].moveRight = true;
            }
            if (bTurrets[i].moveRight) {
                bTurrets[i].x -= 5;
            } else {
                bTurrets[i].x += 5;
            }
        }
        if (bTurrets[i].hitpoints === 0) {
            stage.removeChild(bTurrets[i]);
            bTurrets.splice(i--, 1);
        }
    }
}
