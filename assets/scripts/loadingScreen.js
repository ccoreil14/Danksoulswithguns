var loadbarWidth = 20;
var loadbarHeight = 20;
var loadProgressLabel = new createjs.Text("", "18px Verdana", "#ffffff");
loadProgressLabel.x = 380;
loadProgressLabel.y = 350;
var g = new createjs.Graphics().beginFill("#ffffff").drawRect(0, 0, loadbarWidth, loadbarHeight);
var loadBar = new createjs.Shape(g);
loadBar.x = 200;
loadBar.y = 320;
var loadingScreen = new createjs.Bitmap(queue.getResult("loading"));
queue.adaEventListener("complete", handleComplete);
queue.addEventListener("progress", handleProgress);

function handleProgress() {
    loadBar.scaleX = queue.progress * loadbarWidth;
    var progressPrecentage = Math.round(queue.progress * 100);
    loadProgressLabel.text = progressPrecentage + "% Loaded";
    stage.update();
}

function handleComplete() {
    console.log("DONE");
    loadProgressLabel.text = "100%";

    loadBar.visible = false;
    loadProgressLabel.visible = false;
    loadingScreen.visible = false;
    console.log("removed");
    stage.update();
}

function createLoadScreen() {
    stage.addChild(loadingScreen);
    stage.addChild(loadBar);
    stage.addChild(loadProgressLabel);
    stage.update();
}