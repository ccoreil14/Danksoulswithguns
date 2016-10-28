var powerup;

function createPowerup() {
    powerup = new createjs.Bitmap(queue.getResult("powerup"));
    powerup.x = powerup.y = 100;
    powerup.scaleX = powerup.scaleY = 0.3;
    stage.addChild(powerup);
}



function deletePowerup() {
    stage.removeChild(powerup);
}

function checkPowerupHit() {
    if (ndgmr.checkRectCollision(powerup, player)) {
        player.tooStrong = true;
        deletePowerup();
        setInterval(function () {
            player.tooStrong = false;
        }, 5000);
    }
}