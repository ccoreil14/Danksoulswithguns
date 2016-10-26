var victoryScreen;

function createVictory(){
	victoryScreen = new createjs.Bitmap(queue.getResult("victory"));
	victoryScreen.x = victoryScreen.y = 0;
	stage.addChild(victoryScreen);
	victoryScreen.visible = false;
}