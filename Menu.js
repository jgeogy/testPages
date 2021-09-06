"use strict";
class Menu extends Phaser.Scene {
  constructor() {
    super({key: "Menu"});

    this.fromLoad;
    this.levelNum;
    this.levelDiff;

    this.bgmRef;

    this.titleBG;
    this.title1;
    this.adam;
    this.joury;
    this.title2;
    this.playBTN;
    this.musicBTN;
    this.musicOffBTN;
  }

  preload() {

  }

  init(data) {
    this.fromLoad = data.fromLoad;
    this.levelNum = data.levelNum;
    this.levelDiff = data.levelDiff;
  }

  create() {
    this.createScene();
    /*
    if(this.fromLoad == 1) {
      this.time.delayedCall(2000, this.timerEnd, null, this);
    } else if(this.fromLoad == 0) {
      this.add.image(640,384, 'LoadIndicator');
    }
    */

    if(this.fromLoad == 1) {

			this.title1.setAlpha(0);
			this.playBTN.setActive(false);
			this.musicBTN.setActive(false);
			this.musicBTN.setAlpha(0);
			this.playBTN.setAlpha(0);

			var tweenTimeLine = this.tweens.createTimeline();

			tweenTimeLine.add({
				targets:this.titleBG,
				y: 223,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeLine.add({
				targets: this.title1,
				alpha: 1,
				duration: 500,
				ease: Phaser.Math.Easing.Quadratic.Out
			});

			tweenTimeLine.add({
				targets: this.title2,
				y: 425,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeLine.add({
				targets: [this.adam, this.joury],
				y: 564,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out,
				onComplete: this.timelineComplete.bind(this)
			});

      /*
			tweenTimeLine.add({
				targets: [this.playBTN, this.musicBTN],
				alpha: 1,
				duration: 400,
				ease: Phaser.Math.Easing.Quadratic.Out,
				onComplete: this.timelineComplete.bind(this)
			});
      */

			tweenTimeLine.play();

		}
		else if(this.fromLoad == 0){
			this.adam.y = this.joury.y = 564;
			this.titleBG.y = 223;
			this.title1.alpha = 1;
			this.title2.y = 425;
		}

		var sceneM = this.scene.get("Menu");

		this.playBTN.setInteractive().on('pointerdown', function() {
			sceneM.menuClicked();
		});

		this.musicBTN.setInteractive().on('pointerdown', function() {
			sceneM.musicClicked();
		});
		this.musicOffBTN.setInteractive().on('pointerdown', function() {
			sceneM.musicClicked();
		});

		var sceneM = this.scene.get("Menu");
		//Start BGM
    if(this.bgmRef == null) {
      this.bgmRef = new Howl({
          src: ['assets/audio/bgm.mp3','assets/audio/bgm.ogg'],
          loop: true
      });

      this.bgmRef.play();
			this.musicOffBTN.setVisible(false);
			this.musicOffBTN.setActive(false);
    } else if(this.bgmRef.mute) {
      this.musicBTN.setActive(false);
      this.musicBTN.setVisible(false);
      this.musicOffBTN.setActive(true);
      this.musicOffBTN.setVisible(true);
    } else if(!this.bgmRef.mute) {
      this.musicBTN.setActive(true);
      this.musicBTN.setVisible(true);
      this.musicOffBTN.setActive(false);
      this.musicOffBTN.setVisible(false);
    }
    /* //Phaser audio system
		if(!sceneM.sound.get('bgm')) {
			this.bgmRef = sceneM.sound.add('bgm');
			this.bgmRef.play();
			this.bgmRef.setLoop(true);
		} else if(sceneM.sound.get('bgm')) {
			this.bgmRef = sceneM.sound.get('bgm');
			if(this.bgmRef.mute) {
				this.musicBTN.setActive(false);
				this.musicBTN.setVisible(false);
				this.musicOffBTN.setActive(true);
				this.musicOffBTN.setVisible(true);
			} else if(!this.bgmRef.mute) {
				this.musicBTN.setActive(true);
				this.musicBTN.setVisible(true);
				this.musicOffBTN.setActive(false);
				this.musicOffBTN.setVisible(false);
			}
		}
    */
  }

  createScene() {
    this.add.image(624,390, "Asset 21-8");
    const menu_TitleBG = this.add.image(640, -204, "TitleBG");
    const menu_Title1 = this.add.image(640, 197, "Title1");
    const menu_Adam = this.add.image(270, 1099, "Adam");
    const menu_Joury = this.add.image(1018, 1125, "Joury");
    const menu_Title2 = this.add.image(640, 937, "Title2");
    const menu_PlayBTN = this.add.image(728, 607, "PlayBTN");
    const menu_MusicBTN = this.add.image(528, 607, "MusicBTN");
    const menu_MusicOffBTN = this.add.image(528, 607, "MusicOffBTN");

    this.titleBG = menu_TitleBG;
    this.title1 = menu_Title1;
    this.adam = menu_Adam;
    this.joury = menu_Joury;
    this.title2 = menu_Title2;
    this.playBTN = menu_PlayBTN;
    this.musicBTN = menu_MusicBTN;
    this.musicOffBTN = menu_MusicOffBTN;
  }

  timelineComplete() {
    if(this.fromLoad == 1) {
      this.time.delayedCall(1000, this.endOfIntroDelay, null, this);
    } else {
      this.playBTN.setActive(true);
      this.playBTN.setVisible(true);
      this.musicBTN.setActive(true);
      this.musicBTN.setVisible(true);
    }
	}

  endOfIntroDelay() {
    this.menuClicked();
  }

	menuClicked() {
		this.scene.start("CutScene", {levelNum: this.levelNum, levelDiff: this.levelDiff});
	}

	musicClicked() {
		console.log("musicBTN clicked" + this.bgmRef.muted);
		if(this.bgmRef.muted) {				//unmute
			this.bgmRef.mute(false);
      this.bgmRef.muted = false;
			this.musicBTN.setActive(true);
			this.musicBTN.setVisible(true);
			this.musicOffBTN.setActive(false);
			this.musicOffBTN.setVisible(false);
		} else if(!this.bgmRef.muted) {		//mute
			this.bgmRef.mute(true);
      this.bgmRef.muted = true;
			this.musicBTN.setActive(false);
			this.musicBTN.setVisible(false);
			this.musicOffBTN.setActive(true);
			this.musicOffBTN.setVisible(true);
		}
	}


}
