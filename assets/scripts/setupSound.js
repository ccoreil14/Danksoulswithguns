var audioPath = "assets/sounds/";
var sounds = [
    {
        id: "BossGun",
        src: "bossGun.mp3"
        },
    {
        id: "BossMusic",
        src: "BossMusic.mp3"
        },
    {
        id: "EasterEggMusic",
        src: "EasterEggMusic.mp3"
        },
    {
        id: "GameOver",
        src: "GameOver.mp3"
        },
    {
        id: "Level1Music",
        src: "Level1Music.mp3"
        },
    {
        id: "Level2Music",
        src: "Level2Music.mp3"
        },
    {
        id: "Level2MusicAlt",
        src: "Level2MusicAlt.mp3"
        },
    {
        id: "Meme",
        src: "Meme.mp3"
        },
    {
        id: "MenuMusic",
        src: "MenuMusic.mp3"
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
        id: "Turret1",
        src: "turret1.mp3"
        },
    {
        id: "Turret2",
        src: "turret2.mp3"
        },
    {
        id: "Turret3",
        src: "turret3.mp3"
        }

    ];
createjs.Sound.addEventListener("fileload", loadComplete);
createjs.Sound.registerSounds(sounds, audioPath);

function playBossGun(e){
    createjs.Sound.play("BossGun");
}

function playBossMusic(e){
    createjs.Sound.play("BossMusic");
}

function playEasterEggMusic(e){
    createjs.Sound.play("EasterEggMusic");
}

function playGameOver(e){
    createjs.Sound.play("GameOver");
}

function playLevel1Music(e){
    createjs.Sound.play("Level1Music");
}

function playLevel2Music(e){
    createjs.Sound.play("Level2Music");
}

function playLevel2MusicAlt(e){
    createjs.Sound.play("Level2MusicAlt");
}

function playMeme(e){
    createjs.Sound.play("Meme");
}

function playMenuMusic(e){
    createjs.Sound.play("MenuMusic");
}

function playPlayerGun(e){
    createjs.Sound.play("PlayerGun");
}

function playTurret1(e){
    createjs.Sound.play("Turret1");
}

function playTurret2(e){
    createjs.Sound.play("Turret2");
}

function playTurret3(e){
    createjs.Sound.play("Turret3");
}

function playPowerUpGet(e){
    createjs.Sound.play("PowerUpGet");
}