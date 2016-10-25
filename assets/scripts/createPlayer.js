var player;



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
    player.scaleX = 0.2;
    player.scaleY = 0.2;

    player.gotoAndPlay("rotate");
    stage.addChild(player);


}

function playerShoot() {
    //We can put the function for creating a bullet here, we may need to pass more info to the function so I put ??? as a filler
    //makeBullet(player.x, player.y, ???)

    //Play a sound here, we could also set the volume of the sound here
}

function checkPlayerCollision() {
    //Iterate through the array of enemy bullets using a for loop
    //for(){
    //Remove the bullet from the array, as well as from the stage
    //May need to add a boolean or something so the laser of the last boss doesn't disappear immediately on a hit
    //}
}

//This will return false if whatever x or y you pass in is out of bounds
function inbounds(x, y) {
    if (x > 800 || x < 0) {
        return false;
    } else if (y > 600 || y < 0) {
        return false;
    } else {
        return true;
    }
}