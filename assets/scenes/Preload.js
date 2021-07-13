
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {
	
	constructor() {
		super("Preload");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	_preload() {
		
		this.load.pack("asset-pack", "assets/asset-pack.json");
	}
	
	_create() {
		
		// image
		this.add.image(604, 323, "dino");
		
		// loadingText
		const loadingText = this.add.text(600, 375, "", {});
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Loading";
		loadingText.setStyle({"fontSize":"48px"});
		
		this.loadingText = loadingText;
	}
	
	/** @type {Phaser.GameObjects.Text} */
	loadingText;
	
	/* START-USER-CODE */

	preload() {

		this._create();

		this._preload();

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.loadingText.text = "Loading " + Math.floor(p * 100) + "%"
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {

			this.scene.start("Level");
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
