
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
		
		// asset_15_8
		this.add.image(640, 267, "Asset 15-8");
	}
	
	/* START-USER-CODE */
	
	// Write your code here

	init(data) {
		this.fromLoad = data.fromLoad;
		this.levelNum = data.levelNum;
		this.levelDiff = data.levelDiff;
	}
	
	create() {
	
		this.editorCreate();
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
