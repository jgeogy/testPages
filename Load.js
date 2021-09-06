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

    //images
    this.load.image('LoadBG', 'assets/images/load/bg.png');
    this.load.image('LoadIndicator', 'assets/images/load/dino.png');
    this.load.image('CSBG', 'assets/images/cutscene/csbg.png');
    this.load.image('Asset 21-8','assets/images/menu/Asset 21-8.png');
    this.load.image('TitleBG','assets/images/menu/Asset 15-8.png');
    this.load.image('Title1','assets/images/menu/Asset 14-8.png');
    this.load.image('Adam','assets/images/menu/Asset 19-8.png');
    this.load.image('Joury','assets/images/menu/Asset 20-8.png');
    this.load.image('Title2','assets/images/menu/Asset 16-8.png');
    this.load.image('PlayBTN','assets/images/menu/Asset 17-8.png');
    this.load.image('MusicBTN','assets/images/menu/Asset 18-8.png');
    this.load.image('MusicOffBTN','assets/images/menu/btn_musicoff.png');

    //Audio
    this.load.audio('bgm', ['assets/audio/bgm.mp3','assets/audio/bgm.ogg']);
    this.load.audio('intro_01', ['assets/audio/intro_01.mp3','assets/audio/intro_01.ogg']);
    this.load.audio('g5_17_we no longer have this', ['assets/audio/g5_17_we no longer have this.mp3','assets/audio/g5_17_we no longer have this.ogg']);
    this.load.audio('g6_02_done making', ['assets/audio/g6_02_done making.mp3','assets/audio/g6_02_done making.ogg']);
    this.load.audio('general_07_well done', ['assets/audio/general_07_well done.mp3','assets/audio/general_07_well done.ogg']);
    this.load.audio('general_08_haay', ['assets/audio/general_08_haay.mp3','assets/audio/general_08_haay.ogg']);
    this.load.audio('general_09_woow', ['assets/audio/general_09_woow.mp3','assets/audio/general_09_woow.ogg']);
    this.load.audio('general_10_nice', ['assets/audio/general_10_nice.mp3','assets/audio/general_10_nice.ogg']);
    this.load.audio('star', ['assets/audio/star.mp3','assets/audio/star.ogg']);
    this.load.audio('swoosh', ['assets/audio/swoosh.mp3','assets/audio/swoosh.ogg']);
    this.load.audio('winning', ['assets/audio/winning.mp3','assets/audio/winning.ogg']);
    this.load.audio('wrongchoicex', ['assets/audio/wrongchoicex.mp3','assets/audio/wrongchoicex.ogg']);

    //Atlas
		this.load.pack("asset-pack_Game", "assets/images/Game/asset-pack_Game.json");

    this.load.on('progress', function (p) {
			loadTxt.text = "Loading " + p * 100 + "%";
		});

    this.load.on('complete', function () {
      myScene.start("Menu", {fromLoad: 0, levelNum: 1, levelDiff: 1});
    });

  }

  init(data) {

  }

  create() {

  }

}
