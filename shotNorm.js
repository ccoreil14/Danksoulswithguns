(function(window) {
SHotNormal = function() {
	this.initialize();
}
SHotNormal._SpriteSheet = new createjs.SpriteSheet({images: ["shotNorm.png"], frames: [[0,0,60,36,0,0.95,0.6500000000000004],[60,0,59,40,0,0.95,2.6500000000000004],[119,0,57,44,0,-0.050000000000000044,4.65],[176,0,51,50,0,-3.05,7.65],[0,50,45,56,0,-6.05,10.65],[45,50,40,60,0,-8.05,12.65],[85,50,38,60,0,-9.05,12.65],[123,50,40,60,0,-8.05,12.65],[163,50,45,56,0,-6.05,10.65],[0,110,51,50,0,-3.05,7.65],[51,110,57,44,0,-0.050000000000000044,4.65],[108,110,59,39,0,0.95,1.6500000000000004]]});
var SHotNormal_p = SHotNormal.prototype = new createjs.Sprite();
SHotNormal_p.Sprite_initialize = SHotNormal_p.initialize;
SHotNormal_p.initialize = function() {
	this.Sprite_initialize(SHotNormal._SpriteSheet);
	this.paused = false;
}
window.SHotNormal = SHotNormal;
}(window));

