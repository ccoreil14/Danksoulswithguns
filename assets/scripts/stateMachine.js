var state = 000;
var play = true;

function stateChange() {
    switch (state) {
        //loading state
    case 000:
        break;
        //title state
    case 100:
			if(play){
				playMenuMusic();
				play = false;
			}
        countdown.visible = false;
        healthBar.visible = false;
        level1Btn.visible = false;
		level2Btn.visible = false;
		level3Btn.visible = false;
		looop = false;
        gameStarted = false;
        finalScore.text = "";
        instructionsButton.visible = true;
        playButton.visible = true;
        menuButton.visible = false;
        titleScreen.visible = true;
        instructionsScreen.visible = false;
        level1.visible = false;
		level2.visible = false;
		level3.visible = false;
        overScreen.visible = false;
        player.visible = false;
        healthBar.visible = false;
        victoryScreen.visible = false;
        levelSelect.visible = false;
        break;
        //instructions state
    case 200:
        looop = false;
        gameStarted = false;
        instructionsButton.visible = false;
        playButton.visible = true;
        instructionsButton.visible = false;
        playButton.visible = true;
        menuButton.visible = true;
        titleScreen.visible = false;
        instructionsScreen.visible = true;
        overScreen.visible = false;
        victoryScreen.visible = false;
        resetGameTimer();
        break;
        //levelSelect state
    case 300:
        levelSelect.visible = true;
        level1Btn.visible = true;
		level2Btn.visible = true;
		level3Btn.visible = true;
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
        levelSelect.visible = true;
        break;
        //levelOne state
    case 400:
        healthBar.visible = true;
        looop = true;
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
		levelSelect.visible = false;
		levelSelect.visible = true;
        level1Btn.visible =false;
		level2Btn.visible =false;
		level3Btn.visible =false;
        level1.visible = true;
		level2.visible = false;
		level3.visible = false;
        overScreen.visible = false;
        checkPowerupHit();
        player.visible = true;
        healthBar.visible = true;
        levelSelect.visible = false;
        isDead();
        totalGameTime--;
        if (totalGameTime > 0) {
            spawnLevel1();
        } else {
            canWin = true;
        }
        break;
        //levelTwo state
    case 500:
        healthBar.visible = true;
        looop = true;
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
		level1Btn.visible =false;
		level2Btn.visible =false;
		level3Btn.visible =false;
        level1.visible = false;
		level2.visible = true;
		level3.visible = false;
        overScreen.visible = false;
        checkPowerupHit();
        player.visible = true;
        healthBar.visible = true;
        levelSelect.visible = false;
        isDead();
        totalGameTime--;
        if (totalGameTime > 0) {
            spawnLevel2();
        } else {
            canWin = true;
        }
        break;
        //levelThree state
    case 600:
        healthBar.visible = true;
        looop = true;
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
		level1Btn.visible =false;
		level2Btn.visible =false;
		level3Btn.visible =false;
        level1.visible = false;
		level2.visible = false;
		level3.visible = true;
        overScreen.visible = false;
        checkPowerupHit();
        player.visible = true;
        healthBar.visible = true;
        levelSelect.visible = false;
        isDead();
        totalGameTime--;
        if (totalGameTime > 0) {
            spawnLevel3();
        } else {
            canWin = true;
        }
        break;
        //game state
    case 700:
        //state is dead
        break;
        //game over state
    case 800:
        totalGameTime = (FPS * 120);
        gameStarted = false;
        shoot = false;
        movePowerup();
        powerTime = 0;
        healthSize = 1.0;
        looop = false;
        addFinalScore();
        score.text = "Score: 0";
        instructionsButton.visible = false;
        playButton.visible = false;
        playButton
        menuButton.visible = true;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
        level1.visible = false;
		level2.visible = false;
		level3.visible = false;
        overScreen.visible = true;
        victoryScreen.visible = false;
        resetGameTimer();
        break;
        //Victory state
    case 900:
        totalGameTime = (FPS * 120);
        gameStarted = false;
        shoot = false;
        movePowerup();
        powerTime = 0;
        healthSize = 1.0;
        looop = false;
        addFinalScore();
        instructionsButton.visible = false;
        playButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
        level1.visible = false;
		level2.visible = false;
		level3.visible = false;
        overScreen.visible = false;
        victoryScreen.visible = true;
        menuButton.visible = true;
        resetGameTimer();
        break;
    }
}