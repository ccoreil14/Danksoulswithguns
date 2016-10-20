var player = new createjs.Shape();
shape.graphics.beginFill("#ff0000").drawRect(-20, -20, 40, 40);

player.x = 400;
player.y = 300;

function createPlayer() {
    //When we make it into a sprite we can put the call to the "fly" animation for the UFO
    //player.gotoAndPlay("fly");
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