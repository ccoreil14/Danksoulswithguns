var overScreen;
var finalScore = new createjs.Text("", "14px Arial", "#F00");

function createGameOver() {
    overScreen = new createjs.Bitmap(queue.getResult("gameover"));
    overScreen.x = overScreen.y = 0;
    finalScore.x = 100;
    finalScore.y = 100;
    stage.addChild(overScreen);
    stage.addChild(finalScore);
    overScreen.visible = false;
}

function addFinalScore() {
    finalScore.text = score.text;
}

function checkIfGameover() {
    if (healthSize == 0) {
        1
        state = 800;
    }
}