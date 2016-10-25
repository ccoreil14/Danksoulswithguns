var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var KEYCODE_SPACE = 32;
var KEYCODE_A = 65;
var KEYCODE_W = 87;
var KEYCODE_D = 68;
var KEYCODE_S = 83;
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
        if (inbounds(player.x - 30, player.y)) {
//            console.log("a");
            player.x -= 10;
        }
        return false;
    case KEYCODE_W:
        if (inbounds(player.x, player.y - 30)) {
            player.y -= 10;
        }
        return false;
    case KEYCODE_D:
        if (inbounds(player.x + 30, player.y)) {
            player.x += 10;
        }
        return false;
    case KEYCODE_S:
        if (inbounds(player.x, player.y + 30)) {
            player.y += 10
        }
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

        return false;
    case KEYCODE_W:

        return false;
    case KEYCODE_D:

        return false;
    case KEYCODE_S:

        return false;
    }
}

stage.on("stagemousedown", function (evt) {
    //Add shoot function here, we may need to add a variable for a shot delay+
})

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;