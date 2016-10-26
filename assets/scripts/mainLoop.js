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