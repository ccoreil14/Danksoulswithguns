var levelSelect;

function createLevelSelect() {
    levelSelect = new createjs.Bitmap(queue.getResult("levelSelect"));
    levelSelect.x = levelSelect.y = 0;
    stage.addChild(levelSelect);
    levelSelect.visible = false;
    
    level1Btn = new createjs.Bitmap(queue.getResult("level1"));
    level1Btn.x = 50; 
    level1Btn.y = 400; 
    level1Btn.scaleX = level1Btn.scaleY = 0.5;
    stage.addChild(level1Btn);

    level2Btn = new createjs.Bitmap(queue.getResult("level2"));
    level2Btn.x = 300; 
    level2Btn.y = 400; 
    level2Btn.scaleX = level2Btn.scaleY = 0.5;
    stage.addChild(level2Btn);
    
    level3Btn = new createjs.Bitmap(queue.getResult("level3"));
    level3Btn.x = 550; 
    level3Btn.y = 400; 
    level3Btn.scaleX = level3Btn.scaleY = 0.5;
    stage.addChild(level3Btn);
}