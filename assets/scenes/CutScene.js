
// You can write more code here

/* START OF COMPILED CODE */

class CutScene extends Phaser.Scene {
	
	constructor() {
		super("CutScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// cUTSCENES_WORLDOFNUMBERS
		this.add.image(612, 384, "CUTSCENES_WORLDOFNUMBERS");
	}
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		this.time.delayedCall(2000, this.timerEnd, null, this);
	}
	
	timerEnd() {
		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
