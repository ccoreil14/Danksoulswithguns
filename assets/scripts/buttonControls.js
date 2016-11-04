function setupButtons() {
    instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
    instructionsButton.x = 200;
    instructionsButton.y = 500;

    menuButton = new createjs.Bitmap(queue.getResult("menuButton"));
    menuButton.x = 200;
    menuButton.y = 500;
    menuButton.visible = false;

    playButton = new createjs.Bitmap(queue.getResult("playButton"));
    playButton.x = 500;
    playButton.y = 500;



    stage.addChild(instructionsButton);
    stage.addChild(menuButton);
    stage.addChild(playButton);
    stage.enableMouseOver();
    instructionsButton.on("click", function (evt) {
        console.log(state);
        if (state === 100) {
            state = 200;
        }

    });
    menuButton.on("click", function (evt) {
        if (state === 200 || state === 800 || state === 900) {
            state = 100;
            
        }

    });
    var firstTime = true;
    playButton.on("click", function (evt) {
        console.log(state);
        if (state === 100) {
            state = 300;
        }
    });

    level1Btn.on("click", function (evt) {
        if (state === 300) {
            state = 400;
            //letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
            stopSound();
            playLevel1Music();
        }
    });

    level2Btn.on("click", function (evt) {
        if (state === 300) {
            state = 500;
            //letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
            stopSound();
            if (eggOn === true) {
                playLevel2MusicAlt();
            } else {
                playLevel2Music();
            }


        }
    });

    level3Btn.on("click", function (evt) {
        if (state === 300) {
            state = 600;
            //letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
            stopSound();
            if (eggOn === true) {
                playEasterEggMusic();
            } else {
                playBossMusic();
            }

        }
    });

    unmuteBtn.on("click", function (evt) {
        stopSound();
        unmuteBtn.y = -100;
        muteBtn.y = 20;
    });

    muteBtn.on("click", function (evt) {
        if (state === 100 || state === 200 || state === 300) {
            playMenuMusic();
        } else if (state === 400) {
            playLevel1Music();
        } else if (state === 500) {
            if (eggOn === false) {
                playLevel2Music();
            } else {
                playLevel2MusicAlt();
            }
        } else if (state === 600) {
            if (eggOn === false) {
                playBossMusic();
            } else {
                playEasterEggMusic();
            }
        }
        muteBtn.y = -100;
        unmuteBtn.y = 20;
    });
}