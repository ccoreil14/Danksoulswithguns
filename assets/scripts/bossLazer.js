var death;

function fireLazer(){
var lazer= new createjs.SpriteSheet({
	images: ["Untitled-1.png"], 
	frames: [[0,0,43,394,0,21,196],[0,0,43,394,0,21,196],		[43,0,33,378,0,16,195],[43,0,33,378,0,16,195],[76,0,49,394,0,24,196],[76,0,49,394,0,24,196],[125,0,30,348,0,14,193],[125,0,30,348,0,14,193],[0,0,43,394,0,21,196]],
	animations: {
            fire: [0, 8, "fire"]
        }
});
	
	death = new createjs.Sprite(death);
	death.gotoAndPlay("fire");
	stage.addChild(death);
}

function fireTheLazer(){
	death.x = bossTurret.x;
	death.y = bossTurret.y;
	
}