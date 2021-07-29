class Menu extends Phaser.Scene {
  constructor() {
    super({key: "Menu"});

    this.fromLoad;
    this.levelNum;
    this.levelDiff;
  }

  preload() {

  }

  init(data) {
    this.fromLoad = data.fromLoad;
    this.levelNum = data.levelNum;
    this.levelDiff = data.levelDiff;
  }

  create() {
    this.add.image(615,374, 'LoadBG');

    if(this.fromLoad == 1) {
      this.time.delayedCall(2000, this.timerEnd, null, this);
    } else if(this.fromLoad == 0) {
      this.add.image(640,384, 'LoadIndicator');
    }
  }

  timerEnd() {
    this.scene.start("Cutscene", {levelNum: this.levelNum, levelDiff: this.levelDiff});
  }

}
