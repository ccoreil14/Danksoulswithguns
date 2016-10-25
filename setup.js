var stage;
var date = new Date();
var cacheversion = date.getTime();
var jsEnd = ".js?a=" + cacheversion;
var canvasX, CanvasY;
var instructionsButton;
var playButton;
var menuButton;


function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

manifest = [
	{src:"images/gameover.jpg", id:"gameover"},
	{src:"images/instructions.jpg", id:"instructions"},
	{src:"images/title.jpg", id:"title"},
	{src:"images/moon.png", id:"levelOne"},
	{src:"images/space.png", id:"levelTwo"},
	{src:"images/A51.png", id:"levelThree"},
	{src:"images/duckfootTurret.png", id:"duckfoot"},
	{src:"images/duckfootBullet.png", id:"duckfootBullet"},
	{src:"images/instructionsButton.png", id:"instructionsButton"},
	{src:"images/playButton.png", id:"playButton"},
	{src:"images/menuButton.png", id:"menuButton"},
	{src:"scripts/keyboardClicks" + jsEnd},
	{src:"scripts/buildGameOver" + jsEnd},
	{src:"scripts/buildPlayArea" + jsEnd},
	{src:"scripts/buildTitle" + jsEnd},
	{src:"scripts/buildInstructions" + jsEnd},
	{src:"scripts/buttonControls" + jsEnd},
	{src:"scripts/mainLoop" + jsEnd},
	{src:"scripts/mouseInfo" + jsEnd},
	{src:"scripts/stateMachine" + jsEnd},
	{src:"scripts/createPlayer" + jsEnd},
	{src:"scripts/duckfootBullet" + jsEnd}
	
];

var queue;

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");  
    queue.on("complete", loadComplete, this);  
    queue.loadManifest(manifest);
}

function displaySprites() {
    
	
}
 
function loadComplete(evt) {
	createPlayArea();
	createGameOver();
	createTitle();
	createInstructions();
	setupButtons();
	initCoorText();
	mouseInit();
	createGameTimer();
}

(function main(){
	setupCanvas();
	loadFiles();	
})();
