var mouseX;
var mouseY;

function initCoorText() {
    mouseX = new createjs.Text("X: " + 0);
    mouseX.x = 50;
    mouseX.y = 50;
    mouseY = new createjs.Text("Y: " + 0);
    mouseY.x = 50;
    mouseY.y = 70;
    stage.addChild(mouseX);
    stage.addChild(mouseY);
}

function mouseInit() {
    stage.on("stagemousemove", function (evt) {
        mouseX.text = "X: " + evt.stageX;
        mouseY.text = "Y: " + evt.stageY;
    });
    stage.on("click", function (evt) {
        if (state == 300) {
            playerShoot(evt.stageX, evt.stageY);
        }
    });
}