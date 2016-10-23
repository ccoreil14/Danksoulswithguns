var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();

function createPlayArea() {
    playScreen = new createjs.Bitmap(queue.getResult("playarea"));
    playScreen.x = playScreen.y = 0;
    playScreen.visible = false;
    score.x = 100;
    score.y = 100;
    stage.addChild(playScreen);
    stage.addChild(score);
    //add background conveyor belts?
    createHealth();
    stage.update();
}

function createHealth() {
    graphics.beginFill(healthColor).drawRect(10, 2, 20, 100);
    healthBar = new createjs.Shape(graphics);
    stage.addChild(healthBar);
    stage.update();

}

function updateHealth() {
    healthBar.scaleY = healthSize;
}