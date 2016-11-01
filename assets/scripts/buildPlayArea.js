var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var dTurrets = [];
var bTurrets = [];
var gTurrets = [];
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
    dTurrets.length = 0;
	bTurrets.length = 0;
	gTurrets.length = 0;

	createBasic("right", 75, 75);
    bTurrets.push(turret);

	createDuckfoot("right", 75, 550);
    dTurrets.push(turret);

	createLazer("left", 725, 50);
    gTurrets.push(turret);

	createDuckfoot("left", 725, 500);
    dTurrets.push(turret);

	createBasic("down", 675, 55);
    bTurrets.push(turret);

	createDuckfoot("down", 100, 55);
    dTurrets.push(turret);

	createLazer("up", 120, 545);
    gTurrets.push(turret);

	createDuckfoot("up", 700, 545);
    bTurrets.push(turret);

    for (var i = 0; i < bTurrets.length; i++) {
        stage.addChild(bTurrets[i]);
    }
	for (var i = 0; i < dTurrets.length; i++) {
        stage.addChild(dTurrets[i]);
    }
	for (var i = 0; i < gTurrets.length; i++) {
        stage.addChild(gTurrets[i]);
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