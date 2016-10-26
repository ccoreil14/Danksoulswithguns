var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var turrets = [];
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();
var turret;
//var leftMovementUp = true;
//var rightMovementUp = true;
//var downMovementLeft = true;
//var upMovementLeft = true;

function createPlayArea() {
    playScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    playScreen.x = playScreen.y = 0;
    playScreen.visible = false;

    letThereBeTurrets();


    score.x = 100;
    score.y = 100;
    stage.addChild(playScreen);
    stage.addChild(score);
    createHealth();
    stage.update();
}

function letThereBeTurrets() {
    turrets.length = 0;

    createDuckfoot("right", 75, 75);
    turrets.push(turret);
    //stage.addChild(turret);

    createDuckfoot("right", 75, 550);
    turrets.push(turret);

    createDuckfoot("left", 725, 50);
    turrets.push(turret);

    createDuckfoot("left", 725, 500);
    turrets.push(turret);

    createDuckfoot("down", 675, 60);
    turrets.push(turret);

    createDuckfoot("down", 100, 60);
    turrets.push(turret);

    createDuckfoot("up", 120, 540);
    turrets.push(turret);

    createDuckfoot("up", 700, 540);
    turrets.push(turret);

    for (var i = 0; i < turrets.length; i++) {
        stage.addChild(turrets[i]);
    }
}

function createDuckfoot(direction, x, y) {
    turret = new createjs.Bitmap(queue.getResult("duckfoot"));
    turret.regX = turret.regY = 50;
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
            if (inbounds(turrets[i].x, turrets[i].y + 50) == false) {
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
            if (inbounds(turrets[i].x + 50, turrets[i].y) == false) {
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
            if (inbounds(turrets[i].x, turrets[i].y - 50) == false) {
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
            if (inbounds(turrets[i].x - 50, turrets[i].y) == false) {
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

function moveTurrets() {
    for (var i = 0; i < turrets.length; i++) {
        if (turrets[i].rotation === 0) {
            if (turrets[i].y === 50) {
                leftMovementUp = false;
            }
            if (turrets[i].y === 600) {
                leftMovementUp = true;
            }

            if (leftMovementUp) {
                turrets[i].y -= 5;
                leftMovementUp = false;
            } else {
                turrets[i].y += 5;
                leftMovementUp = true;
            }

        } else if (turrets[i].rotation === 90) {
            if (turrets[i].x === 25) {
                upMovementLeft = false;
            }
            if (turrets[i].x === 720) {
                upMovementLeft = true;
            }

            if (upMovementLeft) {
                turrets[i].x -= 5;
                upMovementLeft = false;
            } else {
                turrets[i].x += 5;
                upMovementLeft = true;
            }

        } else if (turrets[i].rotation === 180) {
            if (turrets[i].y === 50) {
                rightMovementUp = false;
            }
            if (turrets[i].y === 600) {
                rightMovementUp = true;
            }

            if (rightMovementUp) {
                turrets[i].y -= 5;
                rightMovementUp = false;
            } else {
                turrets[i].y += 5;
                rightMovementUp = true;
            }

        } else if (turrets[i].rotation === 270) {
            if (turrets[i].x === 25) {
                downMovementLeft = false;
            }
            if (turrets[i].x === 720) {
                downMovementLeft = true;
            }

            if (downMovementLeft) {
                turrets[i].x -= 5;
                downMovementLeft = false;
            } else {
                turrets[i].x += 5;
                downMovementLeft = true;
            }

        }
        if (turrets[i].hitpoints === 0) {
            stage.removeChild(turrets[i]);
            turrets.splice(i--, 1);
        }
    }
}

function createHealth() {
    graphics.beginFill(healthColor).drawRect(10, 2, 20, 100);
    healthBar = new createjs.Shape(graphics);
    stage.addChild(healthBar);
    stage.update();
}

function updateHealth() {
    healthBar.scaleY = healthSize;
}