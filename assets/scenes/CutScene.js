
// You can write more code here

/* START OF COMPILED CODE */

class CutScene extends Phaser.Scene {
	
	constructor() {
		super("CutScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	_create() {
		
		// cUTSCENES_WORLDOFNUMBERS
		const cUTSCENES_WORLDOFNUMBERS = this.add.image(612, 384, "CUTSCENES_WORLDOFNUMBERS");
		
		this.cUTSCENES_WORLDOFNUMBERS = cUTSCENES_WORLDOFNUMBERS;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	cUTSCENES_WORLDOFNUMBERS;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this._create();

		this.time.delayedCall(2000, this.timerEnd, null, this);
	}
	
	timerEnd() {
		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
