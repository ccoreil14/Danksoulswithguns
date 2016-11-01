var player;
var iframecounter = 0;


function createPlayer() {
    //When we make it into a sprite we can put the call to the "fly" animation for the UFO
    //player.gotoAndPlay("fly");

    var characterSheet = new createjs.SpriteSheet({
        images: [queue.getResult("ufo")],
        frames: [[0, 0, 274, 274, 0, 3, 3.95], [0, 0, 274, 274, 0, 3, 3.95], [274, 0, 274, 274, 0, 3, 3.95], [274, 0, 274, 274, 0, 3, 3.95], [548, 0, 274, 274, 0, 2, 3.95], [548, 0, 274, 274, 0, 2, 3.95], [0, 274, 274, 274, 0, 2, 3.95], [0, 274, 274, 274, 0, 2, 3.95], [274, 274, 274, 274, 0, 3, 3.95], [274, 274, 274, 274, 0, 3, 3.95], [548, 274, 274, 274, 0, 3, 3.95], [548, 274, 274, 274, 0, 3, 3.95], [0, 548, 274, 274, 0, 3, 3.95], [0, 548, 274, 274, 0, 3, 3.95], [274, 548, 274, 274, 0, 3, 3.95], [548, 548, 274, 274, 0, 3, 3.95], [0, 822, 274, 274, 0, 3, 3.95], [0, 822, 274, 274, 0, 3, 3.95], [274, 822, 275, 275, 0, 4, 3.95], [274, 822, 275, 275, 0, 4, 3.95], [549, 822, 274, 274, 0, 3, 3.95], [549, 822, 274, 274, 0, 3, 3.95], [0, 1097, 274, 274, 0, 3, 3.95], [0, 1097, 274, 274, 0, 3, 3.95]],
        animations: {
            rotate: [0, 23, "rotate"],
        }
    });


    player = new createjs.Sprite(characterSheet);
    player.x = 400;
    player.y = 380;
    player.scaleX = 0.15;
    player.scaleY = 0.15;
    player.tooStrong = false;
    player.gotHit = false;
    player.gotoAndPlay("rotate");
    stage.addChild(player);


}

function playerShoot(mX, mY) {
    makePlayerBullet(player.x, player.y, mX, mY);
}

//checks player.gotHit boolean to track when the player has been hit, sets player.tooStrong to true so they take no damage
function PlayerIFrames() {
    if (player.gotHit === true) {
        player.tooStrong = true;
        if (iframecounter === 30) {
            iframecounter = 0;
            player.tooStrong = false;
            player.gotHit = false;
        }
        iframecounter += 1;
        player.alpha = 0;
        if (iframecounter % 2 == 0) {
            player.alpha = 1;
        }
    } else {
        player.alpha = 1;
    }
}

//This will return false if whatever x or y you pass in is out of bounds
function inbounds(x, y) {
    if (x > 790 || x < 20) {
        return false;
    } else if (y > 590 || y < 30) {
        return false;
    } else {
        return true;
    }
}