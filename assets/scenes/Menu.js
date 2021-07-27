
// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {
	
	constructor() {
		super("Menu");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.fromLoad;
		this.levelNum;
		this.levelDiff;
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// asset_21_8
		this.add.image(628, 395, "Asset 21-8");
		
		// Title_BG
		const title_BG = this.add.image(640, -204, "Asset 15-8");
		
		// Menu_Title
		const menu_Title = this.add.image(640, 197, "Asset 14-8");
		
		// Menu_Adam
		const menu_Adam = this.add.image(270, 1099, "Asset 19-8");
		
		// Menu_Joury
		const menu_Joury = this.add.image(1018, 1125, "Asset 20-8");
		
		// Menu_Number
		this.add.image(640, 937, "Asset 16-8");
		
		this.title_BG = title_BG;
		this.menu_Title = menu_Title;
		this.menu_Adam = menu_Adam;
		this.menu_Joury = menu_Joury;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	title_BG;
	/** @type {Phaser.GameObjects.Image} */
	menu_Title;
	/** @type {Phaser.GameObjects.Image} */
	menu_Adam;
	/** @type {Phaser.GameObjects.Image} */
	menu_Joury;
	
	/* START-USER-CODE */
	
	// Write your code here

	init(data) {
		this.fromLoad = data.fromLoad;
		this.levelNum = data.levelNum;
		this.levelDiff = data.levelDiff;
	}
	
	create() {
	
		this.editorCreate();

		if(this.fromLoad == 1) {
			this.menu_Title.setAlpha(0);

			var tweenTimeline = this.tweens.createTimeline();

			tweenTimeline.add({
				targets: this.title_BG,
				y: 223,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeline.add({
				targets: this.menu_Title,
				alpha: 1,
				duration: 500,
				ease: Phaser.Math.Easing.Quadratic.Out
			});

			tweenTimeline.add({
				targets: this.menu_Number,
				y:425,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out
			});

			tweenTimeline.add({
				targets: [this.menu_Adam, this.menu_Joury],
				y: 564,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out,
				onComplete: this.timelineComplete.bind(this)
			});

			tweenTimeline.play();
		} else if(this.fromLoad == 0) {
			this.menu_Joury.y = this.menu_Adam.y = 564;
			this.title_BG.y = 223;
			this.menu_Title.alpha = 1;
			this.menu_Number.y = 425;
		}
	} 
	
	timelineComplete() {
		console.log("tweens completed");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
