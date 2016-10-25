var playScreen;
var score = new createjs.Text("Score: " + 0, "14px Arial", "#000");
var turrets = [];
var healthColor = "#0D0";
var healthSize = 1.0;
var graphics = new createjs.Graphics();
var turret;
var leftMovementUp = true;
var rightMovementUp = true;
var downMovementLeft = true;
var upMovementLeft = true;

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

function moveTurrets(){
	for(var i = 0; i < turrets.length; i++){
		if(turrets[i].rotation === 0){
			if(turrets[i].y === 50){
				leftMovementUp = false;
			}
			if(turrets[i].y === 600){
				leftMovementUp = true;
			}
			
			if(leftMovementUp){
				turrets[i].y -= 5;
				leftMovementUp = false;
			}else {
				turrets[i].y += 5;
				leftMovementUp = true;
			}
			
		}else if(turrets[i].rotation === 90){
			if(turrets[i].x === 25){
				upMovementLeft = false;
			}
			if(turrets[i].x === 720){
				upMovementLeft = true;
			}
			
			if(upMovementLeft){
				turrets[i].x -= 5;
				upMovementLeft = false;
			}else {
				turrets[i].x += 5;
				upMovementLeft = true;
			}
			
		}else if(turrets[i].rotation === 180){
			if(turrets[i].y === 50){
				rightMovementUp = false;
			}
			if(turrets[i].y === 600){
				rightMovementUp = true;
			}
			
			if(rightMovementUp){
				turrets[i].y -= 5;
				rightMovementUp = false;
			}else {
				turrets[i].y += 5;
				rightMovementUp = true;
			}
			
		}else if(turrets[i].rotation === 270){
			if(turrets[i].x === 25){
				downMovementLeft = false;
			}
			if(turrets[i].x === 720){
				downMovementLeft = true;
			}
			
			if(downMovementLeft){
				turrets[i].x -= 5;
				downMovementLeft = false;
			}else {
				turrets[i].x += 5;
				downMovementLeft = true;
			}
			
		}
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