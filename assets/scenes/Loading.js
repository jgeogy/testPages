
// You can write more code here

/* START OF COMPILED CODE */

class Loading extends Phaser.Scene {
	
	constructor() {
		super("Loading");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	preload() {
		
		this.load.pack("asset-pack", "assets/asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {
			this.scene.start("Menu");
		});
	}
	
	editorCreate() {
	}
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
