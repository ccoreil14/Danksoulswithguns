var levelSelect;

function createLevelSelect() {
    levelSelect = new createjs.Bitmap(queue.getResult("levelSelect"));
    levelSelect.x = levelSelect.y = 0;
    stage.addChild(levelSelect);
    levelSelect.visible = false;
}