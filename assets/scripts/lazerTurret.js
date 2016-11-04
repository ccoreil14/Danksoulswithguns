function createLazer(direction, x, y) {
    turret = new createjs.Bitmap(queue.getResult("lazer"));
    turret.regX = turret.regY = 50;
    turret.scaleX = turret.scaleY = .7;
    turret.hitpoints = 3;
    turret.moveRight = true;
    turret.visible = false;
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


function moveGTurrets() {
    for (var i = 0; i < gTurrets.length; i++) {
        gTurrets[i].visible = true;
        //y pos
        if (gTurrets[i].rotation === 0) {
            if (inbounds(gTurrets[i].x, gTurrets[i].y + 30) == false) {
                gTurrets[i].moveRight = false;
            } else if (inbounds(gTurrets[i].x, gTurrets[i].y - 50) == false) {
                gTurrets[i].moveRight = true;
            }
            if (gTurrets[i].moveRight) {
                gTurrets[i].y += 5;
            } else {
                gTurrets[i].y -= 5;
            }
        }
        //x pos
        if (gTurrets[i].rotation === 90) {
            if (inbounds(gTurrets[i].x + 70, gTurrets[i].y) == false) {
                gTurrets[i].moveRight = false;
            } else if (inbounds(gTurrets[i].x - 50, gTurrets[i].y) == false) {
                gTurrets[i].moveRight = true;
            }
            if (gTurrets[i].moveRight) {
                gTurrets[i].x += 5;
            } else {
                gTurrets[i].x -= 5;
            }
        }
        //y pos
        if (gTurrets[i].rotation === 180) {
            if (inbounds(gTurrets[i].x, gTurrets[i].y - 30) == false) {
                gTurrets[i].moveRight = false;
            } else if (inbounds(gTurrets[i].x, gTurrets[i].y + 50) == false) {
                gTurrets[i].moveRight = true;
            }
            if (gTurrets[i].moveRight) {
                gTurrets[i].y -= 5;
            } else {
                gTurrets[i].y += 5;
            }
        }
        //x pos
        if (gTurrets[i].rotation === 270) {
            if (inbounds(gTurrets[i].x - 70, gTurrets[i].y) == false) {
                gTurrets[i].moveRight = false;
            } else if (inbounds(gTurrets[i].x + 50, gTurrets[i].y) == false) {
                gTurrets[i].moveRight = true;
            }
            if (gTurrets[i].moveRight) {
                gTurrets[i].x -= 5;
            } else {
                gTurrets[i].x += 5;
            }
        }
        if (gTurrets[i].hitpoints === 0) {
            stage.removeChild(gTurrets[i]);
            gTurrets.splice(i--, 1);
        }
    }
}


function spawnLazerTurret() {
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

    createLazer(direction, xpos, ypos);
    gTurrets.push(turret);
    stage.addChild(turret);

}