var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var turrets = [];
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();
var turret;
var gameStarted = false;

var countdown = new createjs.Text(3, "50px Arial", "#FFF");
//var leftMovementUp = true;
//var rightMovementUp = true;
//var downMovementLeft = true;
//var upMovementLeft = true;

function createPlayArea() {
    playScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    playScreen.x = playScreen.y = 0;
    playScreen.visible = false;

    letThereBeTurrets();

    countdown.x = 400;
    countdown.y = 300;

    score.x = 100;
    score.y = 100;
    stage.addChild(playScreen);
    stage.addChild(score);
    stage.addChild(countdown);
    createHealth();
    stage.update();
}

function letThereBeTurrets() {
    turrets.length = 0;

    createDuckfoot("right", 75, 75);
    turrets.push(turret);

    createDuckfoot("right", 75, 550);
    turrets.push(turret);

    createDuckfoot("left", 725, 50);
    turrets.push(turret);

    createDuckfoot("left", 725, 500);
    turrets.push(turret);

    createDuckfoot("down", 675, 55);
    turrets.push(turret);

    createDuckfoot("down", 100, 55);
    turrets.push(turret);

    createDuckfoot("up", 120, 545);
    turrets.push(turret);

    createDuckfoot("up", 700, 545);
    turrets.push(turret);

    for (var i = 0; i < turrets.length; i++) {
        stage.addChild(turrets[i]);
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