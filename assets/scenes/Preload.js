/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {
	
	constructor() {
		super("Preload");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
	}
	
	/* START-USER-CODE */

	preload() {

		this._create();

		this._preload();

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.loadingText.text = "Loading " + p * 100 + "%"
			if(p == 1) {
				//this.loadingText.text = p;
			}
		});

		this.load.on('complete', () => {
			//this.loadingText.text = "loading completed progress";
			//this.scene.start("Menu", {fromLoad: 1});
			//this.scene.start("Menu", {fromLoad: 1, levelNum: 1, levelDiff: 2});
			this.logText.text += "||complete called";
		});

		this.load.on('loaderror', f => {
			this.errorText.text += f;
		});

		this.load.on('postprocess', () => {
			this.logText.text += "||post process called";
		});

		this.load.on('filecomplete', f => {
			this.logText.text += " " + f;
		});
	}

	_preload() {
		
		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("asset-pack_Game", "assets/images/Game/asset-pack_Game.json");
		this.load.pack("ap_Audio", "assets/audio/asset-pack_audio.json");
	}
	
	_create() {
		
		// loadingText
		const loadingText = this.add.text(600, 375, "", {});
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Loading";
		loadingText.setStyle({"fontSize":"48px"});

		const errorText = this.add.text(100, 50, "", {});
		errorText.setOrigin(0, 0.5);
		errorText.text = "Errors: ";
		errorText.setStyle({"fontSize":"24px"});
		
		const logText = this.add.text(100, 150, "", {});
		logText.setOrigin(0, 0);
		logText.text = "Log: ";
		logText.setStyle({"fontSize":"12px"});

		this.loadingText = loadingText;
		this.errorText = errorText;
		this.logText = logText;

		this.logText.setWordWrapWidth(500);

		if(this.sys.game.device.os.iOS) {
			this.logText.text += " io";
			this.logText.text += this.sys.game.device.os.iOSVersion;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
