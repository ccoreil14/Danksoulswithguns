var FPS = 30;
var frameCount = 0;
var timeUntilFire = 30;

var looop = false;

function loop() {
    stateChange();
    runGameTimer();
    updateBullets();
    movePlayer();
    updateDuckfootBullets();
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
    }


    if (timeUntilFire === 0) {
        timeUntilFire = 30;
        makeDuckfootBullet();
    }

    if (frameCount % (FPS / 10) === 0) {
        if (state === 700) {
            for (i = 0; i < duckfootBullets.length; i++) {
                if (collisionMethod(duckfootBullets[i], player)) {
                    healthSize -= 0.05;
                }
                updateHealth();

                if (healthSize <= 0) {
                    1
                    state = 800;
                }
            }
        }
    }

}