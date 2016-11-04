var stage;
var date = new Date();
var cacheversion = date.getTime();
var jsEnd = ".js?a=" + cacheversion;
var canvasX, CanvasY;
var instructionsButton;
var playButton;
var menuButton;
var loaded = false;


function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

manifest = [
    {
        src: "images/loadScreen.jpg",
        id: "loading"
    },
    {
        src: "scripts/loadingScreen" + jsEnd
    },
    {
        src: "images/gameover.jpg",
        id: "gameover"
    },
    {
        src: "images/instructions.png",
        id: "instructions"
    },
    {
        src: "images/Level1.png",
        id: "level1"
    },
    {
        src: "images/Level2.png",
        id: "level2"
    },
    {
        src: "images/Level3.png",
        id: "level3"
    },
    {
        src: "images/levelselect.png",
        id: "levelSelect"
    },
    {
        src: "images/powerup2B.png",
        id: "powerup"
    },
    {
        src: "images/title.png",
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
        src: "images/muteBtn.png",
        id: "muteBtn"
    },{
        src: "images/unmuteBtn.png",
        id: "unmuteBtn"
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
        src: "images/duckfootTurretFlash.png",
        id: "duckfootFlash"
    },
    {
        src: "images/duckfootBullet.png",
        id: "duckfootBullet"
    },
    {
        src: "images/basicTurret.png",
        id: "basic"
    },
    {
        src: "images/basicTurretFlash.png",
        id: "basicFlash"
    },
    {
        src: "images/lazerTurret.png",
        id: "lazer"
    },
    {
        src: "images/lazerTurretFlash.png",
        id: "lazerFlash"
    },
    {
        src: "images/basicBullet.png",
        id: "basicBullet"
    },
    {
        src: "images/lazerBullet.png",
        id: "lazerBullet"
    },
    {
        src: "images/credits.png",
        id: "credits"
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
        src: "images/shotRainbow.png",
        id: "shotrainbow"
    },
    {
        src: "scripts/buildVictory" + jsEnd
    },
    {
        src: "scripts/duckfootBullet" + jsEnd
    },
    {
        src: "scripts/basicBullet" + jsEnd
    },
    {
        src: "scripts/lazerBullet" + jsEnd
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
    },
    {
        src: "scripts/duckfootTurret" + jsEnd
    },
    {
        src: "scripts/basicTurret" + jsEnd
    },
    {
        src: "scripts/buildLevelSelect" + jsEnd
    },
    {
        src: "scripts/lazerTurret" + jsEnd
    },
    {
        src: "scripts/setupSound" + jsEnd
    }

];

var queue;

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);

}





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
    if (!loaded) {
        state = 100;
        loaded = true
        createPlayArea();
        createPlayer();
        createLevelSelect();
        createGameOver();
        createTitle();
        createInstructions();
        createVictory();
        createMuteBtns();
        setupButtons();
        initCoorText();
        mouseInit();
        createLoadScreen();
		playMenuMusic();
    }
    //    createGameTimer();
}

(function main() {
    setupCanvas();
    loadFiles();
    
})();