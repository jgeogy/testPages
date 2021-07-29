var config = {
  type: Phaser.CANVAS,
  width: 1280,
  height: 768,
  backgroundColor: "#555555",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	input: {
		activePointers: 1
	},
  scene: [ Load, Menu, Cutscene ]

}

var game = new Phaser.Game(config);
