var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var turrets = [];
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();
var turret;

function createPlayArea() {
    playScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    playScreen.x = playScreen.y = 0;
    playScreen.visible = false;
	
	
	createDuckfoot("right");
	turrets.push(turret);
	
	createDuckfoot("right");
	turrets.push(turret);
	
	createDuckfoot("left");
	turrets.push(turret);
	
	createDuckfoot("left");
	turrets.push(turret);
	
	createDuckfoot("down");
	turrets.push(turret);
	
	createDuckfoot("down");
	turrets.push(turret);
	
	createDuckfoot("up");
	turrets.push(turret);
	
	
	createDuckfoot("up");
	turrets.push(turret);
	
	
	
    score.x = 100;
    score.y = 100;
    stage.addChild(playScreen);
    stage.addChild(score);
	
	for(var i = 0; i < turrets.length; i++){
		stage.addChild(turrets[i]);
	}
    createHealth();
    stage.update();
}

function createDuckfoot(direction){
	turret = new createjs.Bitmap(queue.getResult("duckfoot"));
	turret.regX = turret.regY = 50;
	
	if(direction === "right"){
		turret.x = 75;
		turret.y = 300;
	}else if(direction === "down"){
		turret.x = 400;
		turret.y = 50;
	}else if(direction === "left"){
		turret.x = 725;
		turret.y = 300;
	}else if(direction === "up"){
		turret.x = 400;
		turret.y = 550;
	}
	
	
	if(direction === "right"){
		turret.rotation = 0;
	}else if(direction === "down"){
		turret.rotation = 90;
	}else if(direction === "left"){
		turret.rotation = 180;
	}else if(direction === "up"){
		turret.rotation = 270;
	}
	
}

function createHealth() {
    graphics.beginFill(healthColor).drawRect(10, 2, 20, 100);
    healthBar = new createjs.Shape(graphics);
    stage.addChild(healthBar);
    stage.update();

}

function updateHealth() {
    healthBar.scaleY = healthSize;
}