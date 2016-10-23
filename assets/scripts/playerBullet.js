var playerbullets = [];

var bulletspeed = 15;

function makebullet(playerx, playery) {
    var playerbullet = new createjs.Bitmap(queue.getResult("bullet"));
    playerbullet.x = playerx + 15;
    playerbullet.y = playery + 15;
    //    playerbullet.getImage = function () {
    //        return this;
    //    }
    playerbullets.push(playerbullet);
    stage.addChild(playerbullet);
}

function updatebullets() {
    for (i = 0; i < playerbullets.length; i++) {
        playerbullets[i].x += bulletspeed;
        if (inbounds(playerbullets[i].x, playerbullets[i].y) == false) {
            stage.removeChild(playerbullets[i]);
            playerbullets.splice(i--, 1);
        }
    }
}