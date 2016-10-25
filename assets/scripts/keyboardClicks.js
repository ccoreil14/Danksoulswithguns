var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var KEYCODE_SPACE = 32;
var KEYCODE_A = 65;
var KEYCODE_W = 87;
var KEYCODE_D = 68;
var KEYCODE_S = 83;

var right = false;
var left = false;
var up = false;
var down = false;
//var mouseX, mouseY;
//
//function mouseInit() {
//    stage.on("click", function (evt) {
//        mouseX = Math.floor(evt.stageX);
//        mouseY = Math.floor(evt.stageY);
//        console.log(mouseX + " hereda Y " + mouseY);
//    });
//}

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:

        return false;
    case KEYCODE_RIGHT:

        return false;
    case KEYCODE_UP:

        return false;
    case KEYCODE_DOWN:

        return false;
    case KEYCODE_SPACE:
			
        return false;
        //Below the + or - 30 represents where we want the players bounds to be
    case KEYCODE_A:
        left = true;
        return false;
    case KEYCODE_W:
        up = true;
        return false;
    case KEYCODE_D:
        right = true;
        return false;
    case KEYCODE_S:
        down = true;
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:

        break;
    case KEYCODE_RIGHT:

        break;
    case KEYCODE_UP:

        break;
    case KEYCODE_DOWN:

        break;
    case KEYCODE_SPACE:

        return false;
    case KEYCODE_A:
        left = false;
        return false;
    case KEYCODE_W:
        up = false;
        return false;
    case KEYCODE_D:
        right = false;
        return false;
    case KEYCODE_S:
        down = false;
        return false;
    }
}

function movePlayer() {
    if (inbounds(player.x - 70, player.y) && left) {
        player.x -= 10;
    }
    if (inbounds(player.x, player.y - 40) && up) {
        player.y -= 10;
    }
    if (inbounds(player.x + 120, player.y) && right) {
        player.x += 10;
    }
    if (inbounds(player.x, player.y + 100) && down) {
        player.y += 10
    }
}

stage.on("stagemousedown", function (evt) {
    //Add shoot function here, we may need to add a variable for a shot delay+
})

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;