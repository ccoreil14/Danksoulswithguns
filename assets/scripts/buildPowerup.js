var powerup;
var powerupHit = false;;

function createPowerup() {
    powerup = new createjs.Bitmap(queue.getResult("powerup"));
    movePowerupBack();
    powerup.scaleX = powerup.scaleY = 0.3;
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
    }

    if (powerTime <= 0 && powerupHit == true) {
        powerupHit = false;
        player.tooStrong = false;
    }
}