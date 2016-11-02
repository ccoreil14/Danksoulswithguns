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
		if(state === 100){
			state = 200;
		}
        
    });
    menuButton.on("click", function (evt) {
		if(state === 200 || state === 800 || state === 900){
			state = 100;
		}
        
    });
    var firstTime = true;
    playButton.on("click", function (evt) {
		console.log(state);
		if(state === 100){
			state = 300;
		}        
    });

    level1.on("click", function (evt) {
        if (state === 300) {
            state = 400;
            letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
        }
    });

    level2.on("click", function (evt) {
        if (state === 300) {
            state = 500;
            letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
        }
    });

    level3.on("click", function (evt) {
        if (state === 300) {
            state = 600;
            letThereBeTurrets();
            player.x = 400;
            player.y = 380;
            if (firstTime === true) {
                createPowerup();
                firstTime = false;
            } else {
                movePowerupBack();
            }
            displaySprites();
        }
    });
}