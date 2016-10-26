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
    {
        src: "images/gameover.jpg",
        id: "gameover"
    },
    {
        src: "images/instructions.png",
        id: "instructions"
    },
    {
        src: "images/powerup.png",
        id: "powerup"
    },
    {
        src: "images/title.jpg",
        id: "title"
    },
    {
        src: "images/moon.png",
        id: "levelOne"
    },
    {
        src: "images/space.png",
        id: "levelTwo"
    },
    {
        src: "images/A51.png",
        id: "levelThree"
    },
    {
        src: "images/duckfootTurret.png",
        id: "duckfoot"
    },
    {
        src: "images/duckfootBullet.png",
        id: "duckfootBullet"
    },
    {
        src: "images/moon.png",
        id: "playarea"
    },
    {
        src: "images/victory.png",
        id: "victory"
    },
    {
        src: "images/instructionsButton.png",
        id: "instructionsButton"
    },
    {
        src: "images/playButton.png",
        id: "playButton"
    },
    {
        src: "images/menuButton.png",
        id: "menuButton"
    },
    {
        src: "images/ufo.png",
        id: "ufo"
    },
    {
        src: "images/shotNorm.png",
        id: "shotnorm"
    },
    {
        src: "scripts/buildVictory" + jsEnd
    },
    {
        src: "scripts/duckfootBullet" + jsEnd
    },
    {
        src: "scripts/keyboardClicks" + jsEnd
    },
    {
        src: "scripts/buildGameOver" + jsEnd
    },
    {
        src: "scripts/buildPlayArea" + jsEnd
    },
    {
        src: "scripts/buildTitle" + jsEnd
    },
    {
        src: "scripts/buildInstructions" + jsEnd
    },
    {
        src: "scripts/buttonControls" + jsEnd
    },
    {
        src: "scripts/mouseInfo" + jsEnd
    },
    {
        src: "scripts/stateMachine" + jsEnd
    },
    {
        src: "scripts/createPlayer" + jsEnd
    },
    {
        src: "scripts/playerBullet" + jsEnd
    },
    {
        src: "scripts/buildPowerup" + jsEnd
    },
    {
        src: "scripts/mainLoop" + jsEnd
    }

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
    createGameOver();
    createTitle();
    createInstructions();
    createVictory();
    setupButtons();
    initCoorText();
    mouseInit();
    //    createGameTimer();
}

(function main() {
    setupCanvas();
    loadFiles();
})();