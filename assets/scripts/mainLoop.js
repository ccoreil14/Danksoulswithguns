var FPS = 30;
var frameCount = 0;
var timeUntilFire = 30;

var looop = false;

function loop() {
    if (gameStarted) {
        playerShotDelay();
    }
    if (frameCount == (FPS * 3)) {
        gameStarted = true;
    }
    stateChange();
    runGameTimer();
    checkPlayerBulletCollision();
    updateBullets();
    movePlayer();
    checkDuckfootBulletCollision();
    updateDuckfootBullets();
    updateHealth();
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
    frameCount = 0;
    looop = false;
}

function runGameTimer() {
    if (turrets.length === 0) {
        for (i = 0; i < duckfootBullets.length; i++) {
            stage.removeChild(duckfootBullets[i]);
        }
        for (i = 0; i < playerbullets.length; i++) {
            stage.removeChild(playerbullets[i]);
        }
        if (state === 700) {
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
        moveTurretBetter();

    }
    if (timeUntilFire === 0 && gameStarted) {
        timeUntilFire = 30;
        makeDuckfootBullet();
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
        for (i = 0; i < turrets.length; i++) {
            stage.removeChild(turrets[i]);
        }
        movePowerup();
        state = 800;
    }
}