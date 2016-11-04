(function(window) {
Symbol_2 = function() {
	this.initialize();
}
Symbol_2._SpriteSheet = new createjs.SpriteSheet({images: ["Untitled-1.png"], frames: [[0,0,43,394,0,21,196],[0,0,43,394,0,21,196],[43,0,33,378,0,16,195],[43,0,33,378,0,16,195],[76,0,49,394,0,24,196],[76,0,49,394,0,24,196],[125,0,30,348,0,14,193],[125,0,30,348,0,14,193],[0,0,43,394,0,21,196]]});
var Symbol_2_p = Symbol_2.prototype = new createjs.Sprite();
Symbol_2_p.Sprite_initialize = Symbol_2_p.initialize;
Symbol_2_p.initialize = function() {
	this.Sprite_initialize(Symbol_2._SpriteSheet);
	this.paused = false;
}
window.Symbol_2 = Symbol_2;
}(window));

