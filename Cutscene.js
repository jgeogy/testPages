"use strict";
class Cutscene extends Phaser.Scene {
  constructor() {
    super({key: "Cutscene"});

    this.levelNum;
    this.levelDiff;
  }

  //VARIABLES


  init(data) {
    this.levelNum = data.levelNum;
    this.levelDiff = data.levelDiff;
  }

  create() {
    this.add.image(640,384, 'CSBG');

    this.time.delayedCall(2000, this.timerEnd, null, this);
  }

  timerEnd() {
    this.scene.start("Menu", {fromLoad: 0, levelNum: this.levelNum, levelDiff: this.levelDiff});
  }

}
