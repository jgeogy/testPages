"use strict";
class Load extends Phaser.Scene {
  constructor() {
    super({key: "Load"});

    this.loadTxt;
  }


  preload() {
    const loadTxt = this.add.text(600, 375, "", {});
    loadTxt.setOrigin(0.5, 0.5);
    loadTxt.text = "Loading";
    loadTxt.setStyle({"fontSize":"48px"});

    this.loadTxt = loadTxt;
    var myScene = this.scene;

    this.load.image('LoadBG', 'assets/images/load/bg.png');
    this.load.image('LoadIndicator', 'assets/images/load/dino.png');
    this.load.image('CSBG', 'assets/images/cutscene/csbg.png');

    this.load.on('progress', function (p) {
			loadTxt.text = "Loading " + p * 100 + "%";
		});

    this.load.on('complete', function () {
      myScene.start("Menu", {fromLoad: 1, levelNum: 1, levelDiff: 2});
    });

  }

  init(data) {

  }

  create() {

  }

}
