var FPS = 30;
var frameCount = 0;
var timeUntilFire = 30;

var looop = false;

function loop() {
    stateChange();
    runGameTimer();
    checkPlayerBulletCollision();
    updateBullets();
    movePlayer();
    checkDuckfootBulletCollision();
	checkBasicBulletCollision();
	checkLazerBulletCollision();
    updateDuckfootBullets();
	updateBasicBullets();
	updateLazerBullets();
    updateHealth();
    playerShotDelay();
    PlayerIFrames();
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
    gameTimer.text = 0;
    frameCount = 0;
    looop = false;
}

function runGameTimer() {
    if (dTurrets.length === 0 && bTurrets.length === 0 && gTurrets === 0) {
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
        if (state === 700) {
            state = 900;
        }

    }

    if (looop) {
        frameCount += 1;
        timeUntilFire -= 1;
        moveDTurrets();
		moveBTurrets();
		moveGTurrets();
    }
    if (timeUntilFire === 0) {
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
        state = 800;
    }
}