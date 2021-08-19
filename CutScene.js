"use strict";
class CutScene extends Phaser.Scene {
  constructor() {
    super({key: "CutScene"});

    this.levelNum;
    this.levelDiff;
		this.voRef;
  }

  //VARIABLES


  init(data) {
    this.levelNum = data.levelNum;
    this.levelDiff = data.levelDiff;
  }

  create() {
    this.add.image(640,384, 'CSBG');

    this.voRef = this.scene.get("CutScene").sound.add('intro_01');
		this.voRef.play();
		var dur = this.voRef.duration;
		dur = dur*1000;

		this.time.delayedCall(dur, this.timerEnd, null, this);
  }

  timerEnd() {
		console.log("end of timer");

		var lvl = Number(this.levelNum);
		var diff = Number(this.levelDiff);
		this.scene.start("GameScene", {levelNum: lvl, levelDiff: diff});
    //this.scene.start("Menu", {fromLoad: 0, levelNum: this.levelNum, levelDiff: this.levelDiff});
	}

}
