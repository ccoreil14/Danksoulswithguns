var levelSelect;

function createLevelSelect() {
    levelSelect = new createjs.Bitmap(queue.getResult("levelSelect"));
    levelSelect.x = levelSelect.y = 0;
    stage.addChild(levelSelect);
    levelSelect.visible = false;
    
    level1 = new createjs.Bitmap(queue.getResult("level1"));
    level1.x = 50; 
    level1.y = 400; 
    level1.scaleX = level1.scaleY = 0.5;
    stage.addChild(level1);

    level2 = new createjs.Bitmap(queue.getResult("level2"));
    level2.x = 300; 
    level2.y = 400; 
    level2.scaleX = level2.scaleY = 0.5;
    stage.addChild(level2);
    
    level3 = new createjs.Bitmap(queue.getResult("level3"));
    level3.x = 550; 
    level3.y = 400; 
    level3.scaleX = level3.scaleY = 0.5;
    stage.addChild(level3);
}