
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 768,
		type: Phaser.AUTO,
        backgroundColor: "#444444",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Loading", Loading, true);

});
