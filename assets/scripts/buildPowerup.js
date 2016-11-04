var powerup;
var powerupHit = false;;

function createPowerup() {
    powerupSheet = new createjs.SpriteSheet({
        images: [queue.getResult("powerup")],
        frames: [[0,0,202,202,0,9.5,9.5],[0,0,202,202,0,9.5,9.5],[0,0,202,202,0,9.5,9.5],[0,0,202,202,0,9.5,9.5],[0,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[202,202,202,202,0,9.5,9.5],[202,202,202,202,0,9.5,9.5],[202,202,202,202,0,9.5,9.5],[202,202,202,202,0,9.5,9.5],[202,202,202,202,0,9.5,9.5],[0,404,202,202,0,9.5,9.5],[0,404,202,202,0,9.5,9.5],[0,404,202,202,0,9.5,9.5],[0,404,202,202,0,9.5,9.5],[0,404,202,202,0,9.5,9.5],[202,404,202,202,0,9.5,9.5],[202,404,202,202,0,9.5,9.5],[202,404,202,202,0,9.5,9.5],[202,404,202,202,0,9.5,9.5],[202,404,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[0,202,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5],[202,0,202,202,0,9.5,9.5]],
        animations: {
            rotate: [0, 39, "pulse"],
        }
    });
    powerup = new createjs.Sprite(powerupSheet);
    movePowerupBack();
    powerup.scaleX = powerup.scaleY = 0.3;
    powerup.gotoAndPlay("pulse");

    stage.addChild(powerup);
}



function movePowerup() {
    powerup.y = powerup.x = -100;
}

function movePowerupBack() {
    powerup.y = powerup.x = 100;
}

var powerTime = 0;

function checkPowerupHit() {
    powerTime--;
    if (ndgmr.checkRectCollision(powerup, player)) {
        powerupHit = true;
        player.tooStrong = true;
        powerTime = (FPS * 5);
        movePowerup();
        playPowerUpGet();
    }

    if (powerTime <= 0 && powerupHit == true) {
        powerupHit = false;
        player.tooStrong = false;
    }
}