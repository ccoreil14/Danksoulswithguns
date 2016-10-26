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
    updateDuckfootBullets();
    updateHealth();
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
    if (turrets.length === 0) {
        for (i = 0; i < duckfootBullets.length; i++) {
            stage.removeChild(duckfootBullets[i]);
        }
        if (state === 700) {
            state = 900;
        }

    }

    if (looop) {
        frameCount += 1;
        timeUntilFire -= 1;
        moveTurretBetter();
    }
    if (timeUntilFire === 0) {
        timeUntilFire = 30;
        makeDuckfootBullet();
    }

}

function isDead() {
    if (healthSize <= 0) {
		for (i = 0; i < playerbullets.length; i++) {
            stage.removeChild(playerbullets[i]);
        }
		for (i = 0; i < playerbullets.length; i++) {
            stage.removeChild(playerbullets[i]);
        }
		for(i = 0; i < turrets.length; i++){
			stage.removeChild(turrets[i]);
			console.log("its lying");
		}
        state = 800;
    }
}