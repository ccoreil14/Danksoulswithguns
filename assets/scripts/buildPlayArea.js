var level1;
var level2;
var level3;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var dTurrets = [];
var bTurrets = [];
var gTurrets = [];
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();
var turret;
var gameStarted = false;

var countdown = new createjs.Text(3, "50px Arial", "#FFF");
countdown.visible = false;
//var leftMovementUp = true;
//var rightMovementUp = true;
//var downMovementLeft = true;
//var upMovementLeft = true;

function createPlayArea() {
    level1 = new createjs.Bitmap(queue.getResult("levelOne"));
    level1.x = level1.y = 0;
    level1.visible = false;
	
	level2 = new createjs.Bitmap(queue.getResult("levelTwo"));
    level2.x = level2.y = 0;
    level2.visible = false;
	
	level3 = new createjs.Bitmap(queue.getResult("levelThree"));
    level3.x = level3.y = 0;
    level3.visible = false;



    countdown.x = 400;
    countdown.y = 300;

    score.x = 100;
    score.y = 100;
    stage.addChild(level1);
	stage.addChild(level2);
	stage.addChild(level3);
    stage.addChild(score);
    stage.addChild(countdown);
    createHealth();
    stage.update();
}


function letThereBeTurrets1() {
    bTurrets.length = 0;
    spawnBasicTurret();
}

function letThereBeTurrets2() {
    bTurrets.length = 0;
    gTurrets.length = 0;

    spawnBasicTurret();
    spawnLazerTurret();
}

function letThereBeTurrets3() {
    dTurrets.length = 0;
    bTurrets.length = 0;
    gTurrets.length = 0;

    spawnBasicTurret();
    spawnDuckfootTurret();
    spawnLazerTurret();
}


function createHealth() {
    graphics.beginFill(healthColor).drawRect(10, 2, 20, 100);
    healthBar = new createjs.Shape(graphics);
    healthBar.visible = false;
    stage.addChild(healthBar);
    stage.update();
}

function updateHealth() {
    healthBar.scaleY = healthSize;
}