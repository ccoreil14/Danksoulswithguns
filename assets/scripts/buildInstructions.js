var instructionsScreen;

function createInstructions(){
	instructionsScreen = new createjs.Bitmap(queue.getResult("instructions"));
	instructionsScreen.x = instructionsScreen.y = 0;
	stage.addChild(instructionsScreen);
	instructionsScreen.visible = false;
}
