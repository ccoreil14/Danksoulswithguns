var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var turrets = [];


function createPlayArea() {
    playScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    playScreen.x = playScreen.y = 0;
    playScreen.visible = false;
	turret = new createjs.Bitmap(queue.getResult("duckfoot"));
	turret.x = turret.y = 300;
	turret.regX = turret.regY = 50;
	turret.rotation = 270;
    score.x = 100;
    score.y = 100;
    stage.addChild(playScreen);
    stage.addChild(score);
	stage.addChild(turret);
    stage.update();
}
