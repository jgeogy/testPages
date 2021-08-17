"use strict"
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 768,
		type: Phaser.AUTO,
        backgroundColor: "#555555",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		input: {
			activePointers: 1
		}
	});
	
	game.scene.add("Preload", Preload, true);

});
