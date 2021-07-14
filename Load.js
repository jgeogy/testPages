class Load extends Phaser.Scene {
  constructor() {
    super({key: "Load"});
  }

  loadTxt;

  preload() {
    const loadTxt = this.add.text(600, 375, "", {});
    loadTxt.setOrigin(0.5, 0.5);
    loadTxt.text = "Loading";
    loadTxt.setStyle({"fontSize":"48px"});

    this.loadTxt = loadTxt;

    this.load.image('LoadBG', 'assets/images/load/bg-8.png');
    this.load.image('LoadIndicator', 'assets/images/load/indicator-8.png');
    this.load.image('LoadBar', 'assets/images/load/bg-8.png');
    this.load.image('LoadFill', 'assets/images/load/bg-8.png');
    this.load.image('CSBG', 'assets/images/cutscene/CUTSCENES_WORLDOFNUMBERS.png');

    this.load.on(Phaser.Loader.Events.PROGRESS, p => {
			this.loadTxt.text = "Loading " + p * 100 + "%"
		});

    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      this.scene.start("Menu", {fromLoad: 1, levelNum: 1, levelDiff: 2});
    })

  }

  init(data) {

  }

  create() {

  }

}
