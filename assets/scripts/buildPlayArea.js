var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");


function createPlayArea(){
	playScreen = new createjs.Bitmap(queue.getResult("playarea"));
	playScreen.x = playScreen.y = 0;
	playScreen.visible = false;
	score.x = 100;
	score.y = 100;
	stage.addChild(playScreen);
	stage.addChild(score);
	stage.update();
}
