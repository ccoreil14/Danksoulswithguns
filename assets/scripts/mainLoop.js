var FPS = 30;
var frameCount = 0;
var timeUntilFire = 30;

var looop = false;

function loop() {
    if (gameStarted) {
        playerShotDelay();
		runGameTimer();
    }
    if (frameCount == (FPS * 3)) {
        gameStarted = true;
    }
	
	stateChange();
    
    
    stage.update();
    
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

function createGameTimer() {
    gameTimer = new createjs.Text(0);
    gameTimer.x = 700;
    gameTimer.y = 50;
    stage.addChild(gameTimer);
}

function resetGameTimer() {
    frameCount = 0;
    looop = false;
}

function runGameTimer() {
	checkPlayerBulletCollisionBTurrets();
    checkPlayerBulletCollisionDTurrets();
    checkPlayerBulletCollisionGTurrets();
    updateBullets();
    movePlayer();
    checkDuckfootBulletCollision();
    checkBasicBulletCollision();
    checkLazerBulletCollision();
    updateDuckfootBullets();
    updateBasicBullets();
    updateLazerBullets();
    updateHealth();
    PlayerIFrames();
	
	
	
    if (dTurrets.length === 0 && bTurrets.length === 0 && gTurrets.length === 0) {
        for (i = 0; i < duckfootBullets.length; i++) {
            stage.removeChild(duckfootBullets[i]);
        }
        for (i = 0; i < playerbullets.length; i++) {
            stage.removeChild(playerbullets[i]);
        }
        for (i = 0; i < basicBullets.length; i++) {
            stage.removeChild(basicBullets[i]);
        }
        for (i = 0; i < lazerBullets.length; i++) {
            stage.removeChild(lazerBullets[i]);
        }
        if (state === 400 || state === 500 || state === 600) {
            stopSound();
            state = 900;
        }

    }

    if (looop) {
        if (frameCount == 0) {
            countdown.visible = true;
            countdown.text = 3;
        } else if (frameCount == (FPS)) {
            countdown.text = 2;
        } else if (frameCount == (FPS * 2)) {
            countdown.text = 1;
        } else if (frameCount == (FPS * 3)) {
            countdown.text = "GO!";
        } else if (frameCount == (FPS * 4)) {
            countdown.visible = false;
        }
        frameCount += 1;
        if (gameStarted) {
            timeUntilFire -= 1;
        }
        moveDTurrets();
        moveBTurrets();
        moveGTurrets();

    }
    if (timeUntilFire === 0 && gameStarted) {
        timeUntilFire = 30;
        makeDuckfootBullet();
        makeBasicBullet();
        makeLazerBullet();
    }
	
	if(timeUntilFire === 27){
		for(var i = 0; i < bTurrets.length; i++){
			bTurrets[i].image = queue.getResult("basic");
		}
		for(var i = 0; i < dTurrets.length; i++){
			dTurrets[i].image = queue.getResult("duckfoot");
		}
		for(var i = 0; i < gTurrets.length; i++){
			gTurrets[i].image = queue.getResult("lazer");
		}
	}

}

function isDead() {
    if (healthSize <= 0) {
        for (i = 0; i < playerbullets.length; i++) {
            stage.removeChild(playerbullets[i]);
        }
        for (i = 0; i < duckfootBullets.length; i++) {
            stage.removeChild(duckfootBullets[i]);
        }
        for (i = 0; i < basicBullets.length; i++) {
            stage.removeChild(basicBullets[i]);
        }
        for (i = 0; i < lazerBullets.length; i++) {
            stage.removeChild(lazerBullets[i]);
        }
        for (i = 0; i < dTurrets.length; i++) {
            stage.removeChild(dTurrets[i]);
        }
        for (i = 0; i < bTurrets.length; i++) {
            stage.removeChild(bTurrets[i]);
        }
        for (i = 0; i < gTurrets.length; i++) {
            stage.removeChild(gTurrets[i]);
        }
        movePowerup();
        stopSound();
        playGameOver();
        state = 800;
    }
}