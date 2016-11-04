function createBasic(direction, x, y) {
    turret = new createjs.Bitmap(queue.getResult("basic"));
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


function moveBTurrets() {
    for (var i = 0; i < bTurrets.length; i++) {
        bTurrets[i].visible = true;
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

function spawnBasicTurret() {
    var randNum = Math.floor((Math.random() * 4) + 1);
    var randX = Math.floor((Math.random() * 500) + 1);
    var randY = Math.floor((Math.random() * 500) + 1);
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

    createBasic(direction, xpos, ypos);
    bTurrets.push(turret);
    stage.addChild(turret);
}
var spawnTime = (FPS * 5);
var totalGameTime = (FPS * 120);

function spawnLevel1() {
    spawnTime--;
    if (spawnTime <= 0) {
        spawnTime = (FPS * 3);
        spawnBasicTurret();
    }
}

function spawnLevel2() {
    spawnTime--;
    if (spawnTime <= 0) {
        spawnTime = (FPS * 3);
        var rand = Math.floor(Math.random() * 2);
        if (rand === 0) {
            spawnBasicTurret();
        } else {
            spawnLazerTurret();
        }
    }
}

function spawnLevel3() {
    spawnTime--;
    if (spawnTime <= 0) {
        spawnTime = (FPS * 3);
        var rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
            spawnBasicTurret();
        } else if(rand === 1) {
            spawnLazerTurret();
        }else{
            spawnDuckfootTurret();
        }
    }
}