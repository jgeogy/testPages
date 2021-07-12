
// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {
	
	constructor() {
		super("Menu");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.fromLoad;
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// MenuBG
		this.add.image(624, 390, "Asset 21-8");
		
		// Menu_TitleBG
		const menu_TitleBG = this.add.image(640, -204, "Asset 15-8");
		
		// Menu_Title1
		const menu_Title1 = this.add.image(640, 197, "Asset 14-8");
		
		// Menu_Adam
		const menu_Adam = this.add.image(270, 1099, "Asset 19-8");
		
		// Menu_Joury
		const menu_Joury = this.add.image(1018, 1125, "Asset 20-8");
		
		// Menu_Title2
		const menu_Title2 = this.add.image(640, 937, "Asset 16-8");
		
		// Menu_PlayBTN
		const menu_PlayBTN = this.add.image(728, 607, "Asset 17-8");
		
		// Menu_MusicBTN
		const menu_MusicBTN = this.add.image(528, 607, "Asset 18-8");
		
		// Menu_MusicOffBTN
		const menu_MusicOffBTN = this.add.image(528, 607, "btn_musicoff");
		
		this.menu_TitleBG = menu_TitleBG;
		this.menu_Title1 = menu_Title1;
		this.menu_Adam = menu_Adam;
		this.menu_Joury = menu_Joury;
		this.menu_Title2 = menu_Title2;
		this.menu_PlayBTN = menu_PlayBTN;
		this.menu_MusicBTN = menu_MusicBTN;
		this.menu_MusicOffBTN = menu_MusicOffBTN;
	}

	/** @type {Phaser.GameObjects.Image} */
	menu_TitleBG;
	/** @type {Phaser.GameObjects.Image} */
	menu_Title1;
	/** @type {Phaser.GameObjects.Image} */
	menu_Adam;
	/** @type {Phaser.GameObjects.Image} */
	menu_Joury;
	/** @type {Phaser.GameObjects.Image} */
	menu_Title2;
	/** @type {Phaser.GameObjects.Image} */
	menu_PlayBTN;
	/** @type {Phaser.GameObjects.Image} */
	menu_MusicBTN;
	/** @type {Phaser.GameObjects.Image} */
	menu_MusicOffBTN;
	
	/* START-USER-CODE */
	
	bgmRef		//BGM Reference

	// Write your code here
	init(data) {
		this.fromLoad = data.fromLoad;
	}

	create() {

		this.editorCreate();

		if(this.fromLoad == 1) {
			
			this.menu_Title1.setAlpha(0);
			this.menu_PlayBTN.setActive(false);
			this.menu_MusicBTN.setActive(false);
			this.menu_MusicBTN.setAlpha(0);
			this.menu_PlayBTN.setAlpha(0);
			
			var tweenTimeLine = this.tweens.createTimeline();

			tweenTimeLine.add({
				targets:this.menu_TitleBG,
				y: 223,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeLine.add({
				targets: this.menu_Title1,
				alpha: 1,
				duration: 500,
				ease: Phaser.Math.Easing.Quadratic.Out
			});

			tweenTimeLine.add({
				targets: this.menu_Title2,
				y: 425,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeLine.add({
				targets: [this.menu_Adam, this.menu_Joury],
				y: 564,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeLine.add({
				targets: [this.menu_PlayBTN, this.menu_MusicBTN],
				alpha: 1,
				duration: 400,
				ease: Phaser.Math.Easing.Quadratic.Out,
				onComplete: this.timelineComplete.bind(this)
			});

			tweenTimeLine.play();

			
		}
		else if(this.fromLoad == 0){
			this.menu_Adam.y = this.menu_Joury.y = 564;
			this.menu_TitleBG.y = 223;
			this.menu_Title1.alpha = 1;
			this.menu_Title2.y = 425;
		}

		var sceneM = this.scene.get("Menu");

		this.menu_PlayBTN.setInteractive().on('pointerdown', function() {
			sceneM.menuClicked();
		});

		this.menu_MusicBTN.setInteractive().on('pointerdown', function() {
			sceneM.musicClicked();
		});
		this.menu_MusicOffBTN.setInteractive().on('pointerdown', function() {
			sceneM.musicClicked();
		});

		var sceneM = this.scene.get("Menu");
		//Start BGM
		if(!sceneM.sound.get('bgm')) {
			//this.bgmRef = sceneM.sound.add('bgm');
			//this.bgmRef.play();
			//this.bgmRef.setLoop(true);
			this.menu_MusicOffBTN.setVisible(false);
			this.menu_MusicOffBTN.setActive(false);
		} else if(sceneM.sound.get('bgm')) {
			//this.bgmRef = sceneM.sound.get('bgm');
			/*
			if(this.bgmRef.mute) {
				this.menu_MusicBTN.setActive(false);
				this.menu_MusicBTN.setVisible(false);
				this.menu_MusicOffBTN.setActive(true);
				this.menu_MusicOffBTN.setVisible(true);
			} else if(!this.bgmRef.mute) {
				this.menu_MusicBTN.setActive(true);
				this.menu_MusicBTN.setVisible(true);
				this.menu_MusicOffBTN.setActive(false);
				this.menu_MusicOffBTN.setVisible(false);
			}
			*/
		}

	}
	
	update(time, delta) {

	}

	timelineComplete() {
		this.menu_PlayBTN.setActive(true);
		this.menu_PlayBTN.setVisible(true);
		this.menu_MusicBTN.setActive(true);
		this.menu_MusicBTN.setVisible(true);
	}

	menuClicked() {
		this.scene.start("CutScene", {levelNum: 1, levelDiff: 1});
	}

	musicClicked() {
		console.log("musicBTN clicked");
		if(this.bgmRef.mute) {				//unmute
			this.bgmRef.setMute(false);
			this.menu_MusicBTN.setActive(true);
			this.menu_MusicBTN.setVisible(true);
			this.menu_MusicOffBTN.setActive(false);
			this.menu_MusicOffBTN.setVisible(false);
		} else if(!this.bgmRef.mute) {		//mute
			this.bgmRef.setMute(true);
			this.menu_MusicBTN.setActive(false);
			this.menu_MusicBTN.setVisible(false);
			this.menu_MusicOffBTN.setActive(true);
			this.menu_MusicOffBTN.setVisible(true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
