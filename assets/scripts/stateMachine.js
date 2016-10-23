var state = 000;

function stateChange() {
    switch (state) {
        //loading state
    case 000:
        break;
        //title state
    case 100:
        finalScore.text = "";
        instructionsButton.visible = true;
        playButton.visible = true;
        menuButton.visible = false;
        titleScreen.visible = true;
        instructionsScreen.visible = false;
        playScreen.visible = false;
        overScreen.visible = false;
        player.visible = false;
        break;
        //instructions state
    case 200:
        instructionsButton.visible = false;
        playButton.visible = true;
        menuButton.visible = true;
        titleScreen.visible = false;
        instructionsScreen.visible = true;
        playScreen.visible = false;
        overScreen.visible = false;
        break;
        //game state
    case 300:
        player.x = 400;
        player.y = 380;
        looop = true;
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = false;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
        playScreen.visible = true;
        overScreen.visible = false;
        player.visible = true;
        break;
        //game over state
    case 400:
        player.visible = false;
        looop = false;
        addFinalScore();
        score.text = "Score: 0";
        instructionsButton.visible = false;
        playButton.visible = false;
        menuButton.visible = true;
        titleScreen.visible = false;
        instructionsScreen.visible = false;
        playScreen.visible = false;
        overScreen.visible = true;
        break;
    }
}