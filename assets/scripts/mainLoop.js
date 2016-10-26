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
	if(turrets.length === 0){
		for (i = 0; i < duckfootBullets.length; i++) {
			duckfootBullets[i].visible = false;
		}
		duckfootBullets.splice(0, duckfootBullets.length);
		if(state === 700){
			state = 900;
		}
		
	}
	
    if (looop) {
        frameCount += 1;
        timeUntilFire -= 1;
        moveTurrets();
    }
    if (timeUntilFire === 0) {
        timeUntilFire = 30;
        makeDuckfootBullet();
    }

}