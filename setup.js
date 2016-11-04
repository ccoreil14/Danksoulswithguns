var stage;
var date = new Date();
var cacheversion = date.getTime();
var jsEnd = ".js?a=" + cacheversion;
var canvasX, CanvasY;
var instructionsButton;
var playButton;
var menuButton;
var loaded = false;

var loadbarWidth = 20;
var loadbarHeight = 20;
var loadProgressLabel = new createjs.Text("", "18px Verdana", "#ffffff");
loadProgressLabel.x = 380;
loadProgressLabel.y = 350;
var g = new createjs.Graphics().beginFill("#ffffff").drawRect(0, 0, loadbarWidth, loadbarHeight);
var b = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, 800, 600);
var loadBar = new createjs.Shape(g);
loadBar.x = 200;
loadBar.y = 320;
var loadingScreen = new createjs.Shape(b);
loadingScreen.x = 0;
loadingScreen.y = 0;

function handleProgress() {
    stage.setChildIndex(loadingScreen, stage.getNumChildren() - 2);
    stage.setChildIndex(loadProgressLabel, stage.getNumChildren() - 1);
    stage.setChildIndex(loadBar, stage.getNumChildren() - 1);
    loadBar.scaleX = queue.progress * loadbarWidth;
    var progressPrecentage = Math.round(queue.progress * 100);
    loadProgressLabel.text = progressPrecentage + "% Loaded";
    stage.update();
}

function handleComplete() {
    loadProgressLabel.text = "100%";
    loadBar.visible = false;
    loadProgressLabel.visible = false;
    loadingScreen.visible = false;
    stage.update();
}

function createLoadScreen() {
    stage.addChild(loadingScreen);
    stage.addChild(loadBar);
    stage.addChild(loadProgressLabel);
    stage.update();
}

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

manifest = [
    {
        src: "images/gameover.png",
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
    }, {
        src: "images/unmuteBtn.png",
        id: "unmuteBtn"
    },
    {
        src: "images/A51.png",
        id: "levelThree"
    },
    {
        src: "images/bossTurret.png",
        id: "boss"
    },
    {
        src: "images/bossTurretFlash.png",
        id: "bossFlash"
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
        src: "images/lazerSprite.png",
        id: "bossBullet"
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

var sounds = [
    {
        id: "BossGun",
        src: "bossGun.mp3"
        },
    {
        id: "BossMusic",
        src: "BossMusic.wav"
        },
    {
        id: "EasterEggMusic",
        src: "EasterEggMusic.wav"
        },
    {
        id: "GameOver",
        src: "GameOver.mp3"
        },
    {
        id: "Level1Music",
        src: "Level1Music.wav"
        },
    {
        id: "Level2Music",
        src: "Level2Music.wav"
        },
    {
        id: "Level2MusicAlt",
        src: "Level2MusicAlt.wav"
        },
    {
        id: "Meme",
        src: "Meme.mp3"
        },
    {
        id: "MenuMusic",
        src: "MenuMusic.wav"
        },
    {
        id: "PlayerGun",
        src: "playerGun.wav"
        },
    {
        id: "PowerUpGet",
        src: "powerUp.mp3"
        },
    {
        id: "Turret3",
        src: "turret3.mp3"
        }

    ];

var queue;

function loadFiles() {
	createjs.Sound.alternateExtensions = ["mp3"];
	createjs.Sound.registerSounds(sounds, "assets/sounds/");
    queue = new createjs.LoadQueue(true, "assets/");
	queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", handleComplete);
    queue.addEventListener("progress", handleProgress);
	//createjs.Sound.addEventListener("complete", loadComplete);	
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function loadComplete(evt) {
    if (!loaded) {
        loaded = true;
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
		state = 100;
    }
    //    createGameTimer();
}

(function main() {
    setupCanvas();
    createLoadScreen();
    loadFiles();

})();