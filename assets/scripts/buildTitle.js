var titleScreen;

function createTitle(){
	titleScreen = new createjs.Bitmap(queue.getResult("title"));
	titleScreen.x = titleScreen.y = 0;
	stage.addChild(titleScreen);
}


