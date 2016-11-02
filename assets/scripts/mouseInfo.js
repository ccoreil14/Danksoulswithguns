var mouseX;
var mouseY;

var shotdelay = 0;
var shoot = false;
var moX;
var moY;

function initCoorText() {
    mouseX = new createjs.Text("X: " + 0);
    mouseX.x = 50;
    mouseX.y = 50;
    mouseY = new createjs.Text("Y: " + 0);
    mouseY.x = 50;
    mouseY.y = 70;
    stage.addChild(mouseX);
    stage.addChild(mouseY);
}

function mouseInit() {
    stage.on("stagemousemove", function (evt) {
        mouseX.text = "X: " + evt.stageX;
        mouseY.text = "Y: " + evt.stageY;
        moX = evt.stageX;
        moY = evt.stageY;
    });
    stage.on("stagemousedown", function (evt) {
        if (state == 700) {
            shoot = true;
        }
    });
    stage.on("stagemouseup", function (evt) {
        if (state == 700 && gameStarted) {
            shoot = false;
            shotdelay = 0;
        }
    });
}

function playerShotDelay() {
    if (shoot) {
        shotdelay += 1;
        if (shotdelay == 10) {
            shotdelay = 0;
            playerShoot(moX, moY);
        }
    }
}