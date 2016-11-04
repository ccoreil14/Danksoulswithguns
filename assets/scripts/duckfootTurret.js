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

function moveDTurrets() {
    for (var i = 0; i < dTurrets.length; i++) {
        //y pos
        if (dTurrets[i].rotation === 0) {
            if (inbounds(dTurrets[i].x, dTurrets[i].y + 30) == false) {
                dTurrets[i].moveRight = false;
            } else if (inbounds(dTurrets[i].x, dTurrets[i].y - 50) == false) {
                dTurrets[i].moveRight = true;
            }
            if (dTurrets[i].moveRight) {
                dTurrets[i].y += 5;
            } else {
                dTurrets[i].y -= 5;
            }
        }
        //x pos
        if (dTurrets[i].rotation === 90) {
            if (inbounds(dTurrets[i].x + 70, dTurrets[i].y) == false) {
                dTurrets[i].moveRight = false;
            } else if (inbounds(dTurrets[i].x - 50, dTurrets[i].y) == false) {
                dTurrets[i].moveRight = true;
            }
            if (dTurrets[i].moveRight) {
                dTurrets[i].x += 5;
            } else {
                dTurrets[i].x -= 5;
            }
        }
        //y pos
        if (dTurrets[i].rotation === 180) {
            if (inbounds(dTurrets[i].x, dTurrets[i].y - 30) == false) {
                dTurrets[i].moveRight = false;
            } else if (inbounds(dTurrets[i].x, dTurrets[i].y + 50) == false) {
                dTurrets[i].moveRight = true;
            }
            if (dTurrets[i].moveRight) {
                dTurrets[i].y -= 5;
            } else {
                dTurrets[i].y += 5;
            }
        }
        //x pos
        if (dTurrets[i].rotation === 270) {
            if (inbounds(dTurrets[i].x - 70, dTurrets[i].y) == false) {
                dTurrets[i].moveRight = false;
            } else if (inbounds(dTurrets[i].x + 50, dTurrets[i].y) == false) {
                dTurrets[i].moveRight = true;
            }
            if (dTurrets[i].moveRight) {
                dTurrets[i].x -= 5;
            } else {
                dTurrets[i].x += 5;
            }
        }
        if (dTurrets[i].hitpoints === 0) {
            stage.removeChild(dTurrets[i]);
            dTurrets.splice(i--, 1);
        }
    }
}


function spawnDuckfootTurret() {
    var randNum = Math.floor((Math.random() * 4) + 1);
    var randX = Math.floor((Math.random() * 700) + 1);
    var randY = Math.floor((Math.random() * 700) + 1);
    var direction = "up";
    var xpos = randX;
    var ypos = 545;
    if (randNum === 1) {
        direction = "right";
        xpos = 75;
        ypos = randY;
    } else if (randNum === 2) {
        direction = "left";
        xpos = 725;
        ypos = randY;
    } else if (randNum === 3) {
        direction = "down";
        xpos = randX;
        ypos = 55;
    }

    createDuckfoot(direction, xpos, ypos);
    dTurrets.push(turret);
    stage.addChild(turret);

}