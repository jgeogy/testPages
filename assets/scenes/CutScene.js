"use strict"
// You can write more code here

/* START OF COMPILED CODE */

class CutScene extends Phaser.Scene {
	
	constructor() {
		super("CutScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.levelNum;		//to reference the number that should be showed
		this.levelDiff;		//for level difficulty
		this.voRef;			//VO reference
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// CS_Sample
		this.add.image(640, 384, "CUTSCENES_WORLDOFNUMBERS");
	}
		
	preload() {
		this._preload();
	}

	_preload() {
		
	}

	/* START-USER-CODE */

	// Write your code here

	init(data) {
		this.levelNum = data.levelNum;
		this.levelDiff = data.levelDiff;
	}
	
	create() {
	
		this.editorCreate();


		this.voRef = this.scene.get("CutScene").sound.add('intro_01');
		this.voRef.play();
		var dur = this.voRef.duration;
		dur = dur*1000;

		this.time.delayedCall(dur, this.timerEnd, null, this);
	}
	
	timerEnd() {
		console.log("end of timer");

		var lvl = Number(this.levelNum);
		var diff = Number(this.levelDiff);
		this.scene.start("GameScene", {levelNum: lvl, levelDiff: diff});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
