var state = 000;

function stateChange(){
	switch (state){
		//loading state
		case 000:
			break;
		//title state
		case 100:
			finalScore.text = "";
			instructionsButton.visible = true;
			playButton.visible = true;
			menuButton.visible = false;
			titleScreen.visible = true;
			instructionsScreen.visible = false;
			playScreen.visible = false;
			overScreen.visible = false;
			break;
		//instructions state
		case 200:
			instructionsButton.visible = false;
			playButton.visible = true;
			menuButton.visible = true;
			titleScreen.visible = false;
			instructionsScreen.visible = true;
			playScreen.visible = false;
			overScreen.visible = false;
			break;
		//levelSelect state
		case 300:
			
			break;
		//levelOne state
		case 400:
			
			break;
		//levelTwo state
		case 500:
			
			break;
		//levelThree state
		case 600:
			
			break;			
		//game state
		case 700:
			looop = true;
			instructionsButton.visible = false;
			playButton.visible = false;
			menuButton.visible = false;
			titleScreen.visible = false;
			instructionsScreen.visible = false;
			playScreen.visible = true;
			overScreen.visible = false;
			break;
		//game over state
		case 800:
			looop = false;
			addFinalScore();
			score.text = "Score: 0";
			instructionsButton.visible = false;
			playButton.visible = false;
			menuButton.visible = true;
			titleScreen.visible = false;
			instructionsScreen.visible = false;
			playScreen.visible = false;
			overScreen.visible = true;
			break;
	}
}
