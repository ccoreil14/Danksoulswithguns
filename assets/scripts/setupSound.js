var audioPath = "assets/sounds/";

//createjs.Sound.alternateExtensions = ["mp3"];
//createjs.Sound.registerSounds(sounds, audioPath);

function playBossGun(e) {
    createjs.Sound.play("BossGun");
}

function playBossMusic(e) {
    createjs.Sound.play("BossMusic");
}

function playEasterEggMusic(e) {
    createjs.Sound.play("EasterEggMusic");
}

function playGameOver(e) {
    createjs.Sound.play("GameOver");
}

function playLevel1Music(e) {
    createjs.Sound.play("Level1Music");
}

function playLevel2Music(e) {
    createjs.Sound.play("Level2Music");
}

function playLevel2MusicAlt(e) {
    createjs.Sound.play("Level2MusicAlt");
}

function playMeme(e) {
    createjs.Sound.play("Meme");
}

function playMenuMusic(e) {
    createjs.Sound.play("MenuMusic");
}

function playPlayerGun(e) {
    createjs.Sound.play("PlayerGun");
}

function playTurret3(e) {
    createjs.Sound.play("Turret3");
}

function playPowerUpGet(e) {
    createjs.Sound.play("PowerUpGet");
}

function stopSound(e){
    createjs.Sound.stop();
}

function createMuteBtns(){
    muteBtn = new createjs.Bitmap(queue.getResult("muteBtn"));
    muteBtn.x = 760;
    muteBtn.y = -100;
    muteBtn.scaleX = muteBtn.scaleY = 0.1; 
    stage.addChild(muteBtn);
    
    unmuteBtn = new createjs.Bitmap(queue.getResult("unmuteBtn"));
    unmuteBtn.x = 760;
    unmuteBtn.y = 20;
    unmuteBtn.scaleX = unmuteBtn.scaleY = 0.1; 
    stage.addChild(unmuteBtn);
}
