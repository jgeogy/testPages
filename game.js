"use strict";

var config = {
  type: Phaser.AUTO,
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
  audio: {
    disableWebAudio: true
  },
  scene: [Load, Menu, CutScene, GameScene, GameOver]
};
var game = new Phaser.Game(config);