
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {
	
	constructor() {
		super("GameOver");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// result_base
		this.add.image(640, 358, "result_base");
		
		// sg1
		this.add.image(460, 164, "sg1");
		
		// sg2
		this.add.image(640, 137, "sg2");
		
		// sg3
		this.add.image(820, 164, "sg3");
		
		// joory
		const joory = this.add.image(1015, 703, "joory");
		joory.setOrigin(0.5, 1);
		
		// adam
		const adam = this.add.image(270, 703, "adam");
		adam.setOrigin(0.5, 1);
		
		// btn_home
		const btn_home = this.add.image(640, 675, "btn_home");
		
		// btn_replay
		const btn_replay = this.add.image(490, 675, "btn_replay");
		
		// btn_next
		const btn_next = this.add.image(790, 675, "btn_next");
		
		// s1
		const s1 = this.add.image(460, 164, "s1");
		
		// s2
		const s2 = this.add.image(640, 137, "s2");
		
		// s3
		const s3 = this.add.image(820, 164, "s3");
		
		this.btn_home = btn_home;
		this.btn_replay = btn_replay;
		this.btn_next = btn_next;
		this.s1 = s1;
		this.s2 = s2;
		this.s3 = s3;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	btn_home;
	/** @type {Phaser.GameObjects.Image} */
	btn_replay;
	/** @type {Phaser.GameObjects.Image} */
	btn_next;
	/** @type {Phaser.GameObjects.Image} */
	s1;
	/** @type {Phaser.GameObjects.Image} */
	s2;
	/** @type {Phaser.GameObjects.Image} */
	s3;
	
	/* START-USER-CODE */
	
	fromLevel;		//check which level it was coming from
	levelDiff;		//store current difficulty
	score;			//score earned
	rightCount;		//Total number of right number
	wrongCount;		//Total number of wrong number
	stars;			//number of stars

	// Write your code here
	init(data) {
		this.score = data.score;
		this.fromLevel = data.fromLevel;
		this.levelDiff = data.levelDiff;
		this.rightCount = data.rightCount;
		this.wrongCount = data.wrongCount;
		console.log(this.fromLevel + "||" + this.levelDiff);
	}

	create() {

		//this.scene.stop("GameScene");

		if(this.fromLevel == 1) {
			this.cameras.main.setBackgroundColor("#8dffe3");
		} else if(this.fromLevel == 2) {
			this.cameras.main.setBackgroundColor("#caff90");
		} else if(this.fromLevel == 3) {
			this.cameras.main.setBackgroundColor("#fe85b4");
		}

		if(this.score < 5) {
			this.stars = 0;
		} else if(this.score >= 5 && this.score < 12) {
			this.stars = 1;
		} else if(this.score >= 12 && this.score < 20) {
			this.stars = 2;
		} else if(this.score >= 20) {
			this.stars = 3;
		}
		
		this.editorCreate();

		//Make stars size 0
		this.s1.setScale(0,0);
		this.s2.setScale(0,0);
		this.s3.setScale(0,0);

		var sceneGO = this.scene.get("GameOver");
		this.btn_home.setInteractive().on('pointerdown', function() {
			//What happens when home btn is pressed
			sceneGO.home();
		});

		this.btn_next.setInteractive().on('pointerdown', function() {
			//What happens when next button is pressed
			var nextLvl = Number(sceneGO.fromLevel) + 1;
			if(nextLvl <= 3) {
				sceneGO.proceed(nextLvl);
			}
			else if(nextLvl > 3) {
				sceneGO.home();
			}
		});

		this.btn_replay.setInteractive().on('pointerdown', function() {
			var lvl = Number(sceneGO.fromLevel);
			sceneGO.replay(lvl);
		});

		//Pop stars into place
		if(this.stars > 0) {
			this.tweens.add({
				targets: this.s1,
				scaleX: 1,
				scaleY: 1,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out,
				onComplete: this.s1End.bind(this)
			});
		}

		//var voRef = sceneGO.sound.add('g6_02_done making');
		//voRef.play();
		//this.time.delayedCall(voRef.duration*1000, this.voTimerEnd, null, this);
		this.time.delayedCall(2000, this.voTimerEnd, null, this);

		this.btn_home.setActive(false);
		this.btn_home.setVisible(false);
		this.btn_replay.setActive(false);
		this.btn_replay.setVisible(false);
		this.btn_next.setActive(false);
		this.btn_next.setVisible(false);

	}

	//All stars done
	allStarsDone() {
		console.log("All stars done");
	}

	s1End() {
		console.log("1st star done");
		if(this.stars > 1) {
			this.tweens.add({
				targets: this.s2,
				scaleX: 1,
				scaleY: 1,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out,
				onComplete: this.s2End.bind(this)
			});
		} else if(this.stars == 1) {
			this.allStarsDone();
		}
	}

	s2End() {
		console.log("2nd star done");
		if(this.stars > 2) {
			this.tweens.add({
				targets: this.s3,
				scaleX: 1,
				scaleY: 1,
				duration: 400,
				ease: Phaser.Math.Easing.Back.Out,
				onComplete: this.allStarsDone.bind(this)
			});
		} else if(this.stars == 2) {
			this.allStarsDone();
		}
	}

	replay(lvl) {
		this.scene.start("GameScene", {levelNum: lvl, levelDiff: this.levelDiff});
	}

	proceed(lvl) {
		this.scene.start("GameScene", {levelNum: lvl, levelDiff: this.levelDiff});
	}

	home() {
		this.scene.start("Menu", {fromLoad: 0, levelDiff: this.levelDiff});
	}

	voTimerEnd() {
		this.btn_home.setActive(true);
		this.btn_home.setVisible(true);
		this.btn_replay.setActive(true);
		this.btn_replay.setVisible(true);
		this.btn_next.setActive(true);
		this.btn_next.setVisible(true);
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
