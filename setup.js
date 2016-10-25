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
	{src:"images/moon.png", id:"playarea"},
	{src:"images/instructionsButton.png", id:"instructionsButton"},
	{src:"images/playButton.png", id:"playButton"},
	{src:"images/menuButton.png", id:"menuButton"},
	{src:"images/ufo.png", id:"ufo"},
	{src:"scripts/keyboardClicks" + jsEnd},
	{src:"scripts/buildGameOver" + jsEnd},
	{src:"scripts/buildPlayArea" + jsEnd},
	{src:"scripts/buildTitle" + jsEnd},
	{src:"scripts/buildInstructions" + jsEnd},
	{src:"scripts/buttonControls" + jsEnd},
	{src:"scripts/mainLoop" + jsEnd},
	{src:"scripts/mouseInfo" + jsEnd},
	{src:"scripts/createPlayer" + jsEnd},
	{src:"scripts/turret" + jsEnd},
	{src:"scripts/stateMachine" + jsEnd}
	
];
 
var queue;

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");  
    queue.on("complete", loadComplete, this);  
    queue.loadManifest(manifest);
}

var blocks, blockArray;

blockArray = [];

function displaySprites() {
	
//	for(i = 0; i < 5; i++){
//		blocks.x=i*31+20;
//		blocks.y=215;
//		blocks.gotoAndStop(i);
//		blockArray.push(blocks.clone());
//	}
//	for(j = 0; j < 5; j++){
//		stage.addChild(blockArray[j]);	
//	}
}
 
function loadComplete(evt) {
    createPlayArea();
	createPlayer();
	createGameTimer();
	createGameOver();
	createTitle();
	createInstructions();
	setupButtons();
	initCoorText();
	mouseInit();
    
}

(function main(){
	setupCanvas();
	loadFiles();	
})();
