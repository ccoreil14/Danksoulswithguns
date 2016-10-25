var FPS = 30;
var frameCount = 0;

var looop = false;

function loop() {
    stateChange();
    runGameTimer();
    updateBullets();
    movePlayer();
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
    }

    if (frameCount % (FPS / 10) === 0) {

        if (state === 300) {
            healthSize -= 0.01;
            updateHealth();
        }
        gameTimer.text = frameCount / (FPS);
    }

    if (gameTimer.text >= 10) {
        state = 400;
        resetGameTimer();
    }
}