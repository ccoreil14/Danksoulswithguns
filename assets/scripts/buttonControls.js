function setupButtons() {
    instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
    instructionsButton.x = 400;
    instructionsButton.y = 400;

    menuButton = new createjs.Bitmap(queue.getResult("menuButton"));
    menuButton.x = 400;
    menuButton.y = 400;
    menuButton.visible = false;

    playButton = new createjs.Bitmap(queue.getResult("playButton"));
    playButton.x = 550;
    playButton.y = 400;



    stage.addChild(instructionsButton);
    stage.addChild(menuButton);
    stage.addChild(playButton);
    stage.enableMouseOver();
    instructionsButton.on("click", function (evt) {
        state = 200;
    });
    menuButton.on("click", function (evt) {
        state = 100;
    });
    var firstTime = true;
    playButton.on("click", function (evt) {
        state = 300;
    });

    level1.on("click", function (evt) {
        state=400;
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
    });
    
        level2.on("click", function (evt) {
        state=500;
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
    });
    
        level3.on("click", function (evt) {
        state=600;
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
    });
}