"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GameScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  var _super = _createSuper(GameScene);

  function GameScene() {
    var _this;

    _classCallCheck(this, GameScene);

    _this = _super.call(this, {
      key: "GameScene"
    });
    _this.levelNum; //to reference the number that should be showed

    _this.levelDiff; //for level difficulty

    _this.game_BG; //to reference game BG

    _this.game_Items; //to reference the objects behind which the numbers hide

    _this.joury; //joury reference

    _this.adam; //adam reference

    _this.levelName; //Level number 1,2,3 object reference for tweening

    _this.nameBG; //the circle on which level number is shown

    _this.gameTimer; //timer for play time limit

    _this.timerMask; //mask for timer image

    _this.hiddenNum; //number to find

    _this.falseHiddenNum1; //wrong hidden number 1

    _this.falseHiddenNum2; //wrong hidden number 2

    _this.currentNum; //current number being shown

    _this.numTimer; //timer for number wait time

    _this.maxGameTime; //Time limit for the game

    _this.maxVisibleTime; //Time limit for number to be shown

    _this.numClickable; //Is the number clickable

    _this.score; //Count number of hidden numbers clicked

    _this.wrongClickCount; //Number of wrong clicks

    _this.rightNumCount; //Number of correct number displayed

    _this.wrongNumCount; //Number of incorrect number displayed

    _this.gamePause; //for referencing game pause state
    //Tween distances 1=80, 2=120, 3=100

    _this.firstTweenX; //Distance for hidden number to tween

    _this.secondTweenX; //Distance for falseHiddenNum1 to tween

    _this.thirdTweenX; //Distance for falseHiddenNum2 to tween

    _this.sceneRef; //Reference to this scene

    _this.bgmRef; //Reference to BGM player

    _this.blockLayer;
    _this.aJLayer;
    _this.introLayer;
    _this.numLayer;
    _this.uILayer;
    _this.btn_pause;
    _this.timerBG;
    _this.timer;
    _this.pausePage;
    _this.pause_base;
    _this.btn_play;
    _this.btn_musicon;
    _this.btn_musicoff;
    _this.btn_home;
    _this.btn_restart;
    _this.pause;
    _this.pause1;
    _this.pause2;
    _this.pause3;
    return _this;
  }

  _createClass(GameScene, [{
    key: "init",
    value: function init(data) {
      this.levelNum = data.levelNum;
      this.levelDiff = data.levelDiff;
      console.log("Diff: " + this.levelDiff + "|| Num: " + this.levelNum);
      this.sceneRef = this.scene.get("GameScene");
      this.gameTimer = null;
      this.maxGameTime = 30000;
      this.maxVisibleTime = 5000;
      this.score = 0;
      this.wrongClickCount = 0;
      this.rightNumCount = 0;
      this.wrongNumCount = 0;
      this.gamePause = false;

      if (this.levelNum == 1) {
        this.firstTweenX = 80;

        if (this.levelDiff == 2) {
          this.secondTweenX = 120;
        } else if (this.levelDiff == 3) {
          this.secondTweenX = 120;
          this.thirdTweenX = 100;
        }
      } else if (this.levelNum == 2) {
        this.firstTweenX = 120;

        if (this.levelDiff == 2) {
          this.secondTweenX = 120;
        } else if (this.levelDiff == 3) {
          this.secondTweenX = 120;
          this.thirdTweenX = 120;
        }
      } else if (this.levelNum == 3) {
        this.firstTweenX = 120;

        if (this.levelDiff == 2) {
          this.secondTweenX = 120;
        } else if (this.levelDiff == 3) {
          this.secondTweenX = 120;
          this.thirdTweenX = 120;
        }
      }
    }
  }, {
    key: "create",
    value: function create() {
      this.sceneSetUp();
      var rand = Phaser.Math.Between(1, 3);

      if (this.levelNum == 1) {
        this.game_BG = this.add.image(640, 384, "GameBG_1");
        this.pause2.setVisible(false);
        this.pause3.setVisible(false);
      } else if (this.levelNum == 2) {
        this.game_BG = this.add.image(640, 384, "GameBG_2");
        this.pause1.setVisible(false);
        this.pause3.setVisible(false);
      } else if (this.levelNum == 3) {
        this.game_BG = this.add.image(640, 384, "GameBG_3");
        this.pause1.setVisible(false);
        this.pause2.setVisible(false);
      }

      this.game_BG.setDepth(0);
      this.numLayer.setDepth(1);
      this.blockLayer.setDepth(2);
      this.aJLayer.setDepth(3);
      this.introLayer.setDepth(4);
      this.uILayer.setDepth(5);
      this.pausePage.setDepth(6);
      this.pausePage.setActive(false);
      this.pausePage.setVisible(false);
      this.setLevel();
      this.timerMask = this.make.graphics();
      this.timerMask.fillStyle(0xffffff);
      this.timerMask.beginPath();
      this.timerMask.fillRect(503, 87, 371, 25); //503

      var mask = this.timerMask.createGeometryMask();
      this.timer.setMask(mask);
      var voRef = this.sceneRef.sound.add('g5_17_we no longer have this');
      voRef.play();
      this.time.delayedCall(voRef.duration * 1000, this.introTimerEnd, null, this); //this.time.delayedCall(2000, this.introTimerEnd, null, this);

      var sceneG = this.scene.get("GameScene");
      this.btn_pause.setInteractive().on('pointerdown', function () {
        //Pause game
        sceneG.pauseGame();
      });
      this.btn_play.setInteractive().on('pointerdown', function () {
        //Unpause game
        sceneG.unpauseGame();
      });
      this.hiddenNum.setInteractive().on('pointerdown', function () {
        //User clicked on hiddenNum
        sceneG.numClicked();
      });
      this.bgmRef = this.sceneRef.sound.get('bgm'); //For music btn

      this.btn_musicon.setInteractive().on('pointerdown', function () {
        sceneG.musicClicked();
      });
      this.btn_musicoff.setInteractive().on('pointerdown', function () {
        sceneG.musicClicked();
      });

      if (this.bgmRef.mute) {
        this.btn_musicon.setVisible(false);
        this.btn_musicon.setActive(false);
      } else if (!this.bgmRef.mute) {
        this.btn_musicoff.setVisible(false);
        this.btn_musicoff.setActive(false);
      } //For home btn


      this.btn_home.setInteractive().on('pointerdown', function () {
        sceneG.homeClicked();
      }); //For restart btn

      this.btn_restart.setInteractive().on('pointerdown', function () {
        sceneG.restartClicked();
      });
      this.btn_pause.setVisible(false);
      this.btn_pause.setActive(false);
    }
  }, {
    key: "sceneSetUp",
    value: function sceneSetUp() {
      // BlockLayer
      var blockLayer = this.add.container(0, 0); // AJLayer

      var aJLayer = this.add.container(0, 0); // IntroLayer

      var introLayer = this.add.container(0, 0); // NumLayer

      var numLayer = this.add.container(0, 0); // UILayer

      var uILayer = this.add.container(0, 0); // btn_pause

      var btn_pause = this.add.image(1180, 99, "btn_pause");
      uILayer.add(btn_pause); // timerBG

      var timerBG = this.add.image(640, 100, "tinerbase");
      uILayer.add(timerBG); // timer

      var timer = this.add.image(688, 99, "timer");
      uILayer.add(timer); // PausePage

      var pausePage = this.add.container(503, 100); // pause_base

      var pause_base = this.add.image(137, 284, "pause_base");
      pausePage.add(pause_base); // btn_play

      var btn_play = this.add.image(677, 0, "btn_play");
      pausePage.add(btn_play); // btn_musicon

      var btn_musicon = this.add.image(95, 509, "btn_musicon");
      pausePage.add(btn_musicon); // btn_musicoff

      var btn_musicoff = this.add.image(95, 509, "btn_musicoff");
      pausePage.add(btn_musicoff); // btn_home

      var btn_home = this.add.image(254, 477, "btn_home");
      pausePage.add(btn_home); // btn_restart

      var btn_restart = this.add.image(391, 347, "btn_replay_1");
      pausePage.add(btn_restart); // pause

      var pause = this.add.image(191, 288, "pause");
      pausePage.add(pause); // pause1

      var pause1 = this.add.image(0, 330, "1_pause");
      pausePage.add(pause1); // pause2

      var pause2 = this.add.image(0, 330, "2_pause");
      pausePage.add(pause2); // pause3

      var pause3 = this.add.image(0, 330, "3_pause");
      pausePage.add(pause3);
      this.blockLayer = blockLayer;
      this.aJLayer = aJLayer;
      this.introLayer = introLayer;
      this.numLayer = numLayer;
      this.uILayer = uILayer;
      this.btn_pause = btn_pause;
      this.timerBG = timerBG;
      this.timer = timer;
      this.pausePage = pausePage;
      this.pause_base = pause_base;
      this.btn_play = btn_play;
      this.btn_musicon = btn_musicon;
      this.btn_musicoff = btn_musicoff;
      this.btn_home = btn_home;
      this.btn_restart = btn_restart;
      this.pause = pause;
      this.pause1 = pause1;
      this.pause2 = pause2;
      this.pause3 = pause3;
    } //Game update loop

  }, {
    key: "update",
    value: function update(time, delta) {
      if (this.gameTimer) {
        if (this.gameTimer.getProgress() > 0 && !this.gameTimer.paused) {
          this.timerMask.x -= delta * 370 / this.maxGameTime;
        }
      }
    } //setting level objects

  }, {
    key: "setLevel",
    value: function setLevel() {
      this.nameBG = this.add.image(640, 384, "start1_base");
      this.introLayer.add(this.nameBG);

      if (this.levelNum == 1) {
        //Add things to hide behind
        this.blockLayer.add(this.add.image(274, 270, "item1"));
        this.blockLayer.add(this.add.image(529, 477, "item1"));
        this.blockLayer.add(this.add.image(778, 283, "item1"));
        this.blockLayer.add(this.add.image(1039, 398, "item1")); //Add AJLayer objects

        this.joury = this.add.image(1028, 670, "joory");
        this.aJLayer.add(this.joury); //Add level name objects

        this.levelName = this.add.image(640, 384, "Asset 56");
        this.introLayer.add(this.levelName);
        this.hiddenNum = this.add.image(-100, -100, "default_1");
        this.numLayer.add(this.hiddenNum);
        this.falseHiddenNum1 = this.add.image(-100, -100, "default_2");
        this.numLayer.add(this.falseHiddenNum1);
        this.falseHiddenNum2 = this.add.image(-100, -100, "default_3");
        this.numLayer.add(this.falseHiddenNum2);

        if (this.levelDiff == 2) {
          this.maxVisibleTime = 3000;
        } else if (this.levelDiff == 3) {
          this.maxVisibleTime = 2000;
        }
      } else if (this.levelNum == 2) {
        //Add things to hide behind
        this.blockLayer.add(this.add.image(274, 270, "item2"));
        this.blockLayer.add(this.add.image(529, 477, "item2"));
        this.blockLayer.add(this.add.image(778, 283, "item2"));
        this.blockLayer.add(this.add.image(1039, 398, "item2")); //Add AJLayer objects

        this.adam = this.add.image(317, 654, "adam");
        this.aJLayer.add(this.adam); //Add level name objects

        this.levelName = this.add.image(640, 384, "Asset 55");
        this.introLayer.add(this.levelName);
        this.hiddenNum = this.add.image(-100, -100, "default_2");
        this.numLayer.add(this.hiddenNum);
        this.falseHiddenNum1 = this.add.image(-100, -100, "default_1");
        this.numLayer.add(this.falseHiddenNum1);
        this.falseHiddenNum2 = this.add.image(-100, -100, "default_3");
        this.numLayer.add(this.falseHiddenNum2);

        if (this.levelDiff == 2) {
          this.maxVisibleTime = 3000;
        } else if (this.levelDiff == 3) {
          this.maxVisibleTime = 2000;
        }
      } else if (this.levelNum == 3) {
        //Add things to hide behind
        this.blockLayer.add(this.add.image(274, 270, "item3"));
        this.blockLayer.add(this.add.image(529, 477, "item3"));
        this.blockLayer.add(this.add.image(778, 283, "item3"));
        this.blockLayer.add(this.add.image(1039, 398, "item3")); //Add AJLayer objects

        this.joury = this.add.image(1028, 670, "joory");
        this.aJLayer.add(this.joury); //Add level name objects

        this.levelName = this.add.image(640, 384, "Asset 54");
        this.introLayer.add(this.levelName);
        this.hiddenNum = this.add.image(-100, -100, "default_3");
        this.numLayer.add(this.hiddenNum);
        this.falseHiddenNum1 = this.add.image(-100, -100, "default_2");
        this.numLayer.add(this.falseHiddenNum1);
        this.falseHiddenNum2 = this.add.image(-100, -100, "default_1");
        this.numLayer.add(this.falseHiddenNum2);

        if (this.levelDiff == 2) {
          this.maxVisibleTime = 3000;
        } else if (this.levelDiff == 3) {
          this.maxVisibleTime = 2000;
        }
      }

      var sceneG = this.scene.get("GameScene");
      this.falseHiddenNum1.setInteractive().on('pointerdown', function () {
        sceneG.wrongNumClicked();
      });
      this.falseHiddenNum2.setInteractive().on('pointerdown', function () {
        sceneG.wrongNumClicked();
      });
    } //timer for intro audio

  }, {
    key: "introTimerEnd",
    value: function introTimerEnd() {
      this.tweens.add({
        targets: [this.levelName, this.nameBG],
        alpha: 0,
        duration: 400,
        ease: Phaser.Math.Easing.Quadratic.Out,
        onComplete: this.introTweenEnd.bind(this)
      });
    } //End of title image tween

  }, {
    key: "introTweenEnd",
    value: function introTweenEnd() {
      //Game time timer stars
      this.gameTimer = this.time.delayedCall(this.maxGameTime, this.gameTimerEnd, null, this);
      this.newSpot();
      this.btn_pause.setVisible(true);
      this.btn_pause.setActive(true);
    } //End of time for game

  }, {
    key: "gameTimerEnd",
    value: function gameTimerEnd() {
      console.log("Times up!!!");
      this.gameTimer = null;
      this.hiddenNum.destroy();
      this.falseHiddenNum1.destroy();
      this.falseHiddenNum2.destroy();
      this.time.delayedCall(2000, this.outroTimerEnd, null, this);
      this.btn_pause.setVisible(false);
      this.btn_pause.setActive(false);
    }
  }, {
    key: "newSpot",
    value: function newSpot() {
      //Move number behind an object
      this.hiddenNum.x = -100;
      this.hiddenNum.y = -100;
      this.falseHiddenNum1.x = -100;
      this.falseHiddenNum1.y = -100;
      this.falseHiddenNum2.x = -100;
      this.falseHiddenNum2.y = -100;

      if (this.levelDiff == 1) {
        this.setPosAndTween(this.hiddenNum, this.firstTweenX);
        this.currentNum = 1;
        this.rightNumCount++;
      } else if (this.levelDiff == 2) {
        var rando = Phaser.Math.RND.integerInRange(1, 100);

        if (rando <= 50) {
          this.setPosAndTween(this.hiddenNum, this.firstTweenX);
          this.currentNum = 1;
          this.rightNumCount++;
        } else if (rando > 50) {
          this.setPosAndTween(this.falseHiddenNum1, this.secondTweenX);
          this.currentNum = 2;
          this.wrongNumCount++;
        }
      } else if (this.levelDiff == 3) {
        var rando = Phaser.Math.RND.integerInRange(1, 100);

        if (rando <= 40) {
          this.setPosAndTween(this.hiddenNum, this.firstTweenX);
          this.currentNum = 1;
          this.rightNumCount++;
        } else if (rando > 40 && rando <= 70) {
          this.setPosAndTween(this.falseHiddenNum1, this.secondTweenX);
          this.currentNum = 2;
          this.wrongNumCount++;
        } else if (rando > 70) {
          this.setPosAndTween(this.falseHiddenNum2, this.thirdTweenX);
          this.currentNum = 3;
          this.wrongNumCount++;
        }
      }
    }
  }, {
    key: "setPosAndTween",
    value: function setPosAndTween(num, tweenDist) {
      var rando = Phaser.Math.RND.integerInRange(1, 4);

      if (rando == 1) {
        num.x = 274;
        num.y = 270;
      } else if (rando == 2) {
        num.x = 529;
        num.y = 477;
      } else if (rando == 3) {
        num.x = 778;
        num.y = 283;
      } else if (rando == 4) {
        num.x = 1039;
        num.y = 398;
      } //Add tween to number


      this.tweens.add({
        targets: num,
        x: num.x + tweenDist,
        duration: 400,
        ease: Phaser.Math.Easing.Back.Out,
        onComplete: this.numTweenEnd.bind(this)
      });
    }
  }, {
    key: "numTweenEnd",
    value: function numTweenEnd() {
      //set timer for how long the number should stay
      this.numTimer = this.time.delayedCall(this.maxVisibleTime, this.numTimerEnd, null, this);
      this.numClickable = true;
    }
  }, {
    key: "numTimerEnd",
    value: function numTimerEnd() {
      var curNum, tweenDist;

      if (this.currentNum == 1) {
        curNum = this.hiddenNum;
        tweenDist = this.firstTweenX;
      } else if (this.currentNum == 2) {
        curNum = this.falseHiddenNum1;
        tweenDist = this.secondTweenX;
      } else if (this.currentNum == 3) {
        curNum = this.falseHiddenNum2;
        tweenDist = this.thirdTweenX;
      } //Add tween to number


      this.tweens.add({
        targets: curNum,
        x: curNum.x - tweenDist,
        duration: 400,
        ease: Phaser.Math.Easing.Back.In,
        onComplete: this.numTweenReverseEnd.bind(this)
      });
      this.numClickable = false;
    }
  }, {
    key: "numTweenReverseEnd",
    value: function numTweenReverseEnd() {
      this.newSpot();
    } //Pause game

  }, {
    key: "pauseGame",
    value: function pauseGame() {
      this.gamePause = true; //Container

      this.uILayer.setActive(false);
      this.numLayer.setActive(false);
      this.introLayer.setActive(false);
      this.aJLayer.setActive(false);
      this.uILayer.setActive(false);
      this.blockLayer.setActive(false); //Tweens

      this.tweens.pauseAll(); //Timers

      if (this.gameTimer != null) {
        this.gameTimer.paused = true;
      }

      if (this.numTimer != null) {
        this.numTimer.paused = true;
      } //Show pause UI


      this.pausePage.setActive(true);
      this.pausePage.setVisible(true);
      console.log("pause_clicked");
    } //Unpause game

  }, {
    key: "unpauseGame",
    value: function unpauseGame() {
      this.gamePause = false; //Container

      this.uILayer.setActive(true);
      this.numLayer.setActive(true);
      this.introLayer.setActive(true);
      this.aJLayer.setActive(true);
      this.uILayer.setActive(true);
      this.blockLayer.setActive(true); //Tweens

      this.tweens.resumeAll(); //Timers

      if (this.gameTimer != null) {
        this.gameTimer.paused = false;
      }

      if (this.numTimer != null) {
        this.numTimer.paused = false;
      } //Show pause UI


      this.pausePage.setActive(false);
      this.pausePage.setVisible(false);
      console.log("unpause_clicked");
    } //Hidden number gets clicked

  }, {
    key: "numClicked",
    value: function numClicked() {
      //Only trigger if its in clickable time
      if (this.numClickable && !this.gamePause) {
        this.sceneRef.sound.play("star");
        this.numClickable = false;
        this.score++;
        console.log("score: " + this.score);
        this.numTimer.remove();

        if (this.score % 5 == 0) {
          var rando = Phaser.Math.RND.integerInRange(1, 100);

          if (rando < 25) {
            this.sceneRef.sound.play("general_07_well done");
          } else if (rando >= 25 && rando < 50) {
            this.sceneRef.sound.play("general_08_haay");
          } else if (rando >= 50 && rando < 75) {
            this.sceneRef.sound.play("general_09_woow");
          } else if (rando >= 75) {
            this.sceneRef.sound.play("general_10_nice");
          }
        } //Add tween to number


        this.tweens.add({
          targets: this.hiddenNum,
          x: this.hiddenNum.x - this.firstTweenX,
          duration: 400,
          ease: Phaser.Math.Easing.Back.In,
          onComplete: this.numTweenReverseEnd.bind(this)
        });
      }
    } //Wrong hidden number is clicked

  }, {
    key: "wrongNumClicked",
    value: function wrongNumClicked() {
      if (this.numClickable && !this.gamePause) {
        this.sceneRef.sound.play("wrongchoicex");
        this.numClickable = false;
        this.wrongClickCount++;
        console.log("wrong score: " + this.wrongClickCount);
        this.numTimer.remove();
        var curNum;
        var tweenDist = 0;

        if (this.currentNum == 2) {
          curNum = this.falseHiddenNum1;
          tweenDist = this.secondTweenX;
        } else if (this.currentNum == 3) {
          curNum = this.falseHiddenNum2;
          tweenDist = this.thirdTweenX;
        } //Add tween to number


        this.tweens.add({
          targets: curNum,
          x: curNum.x - tweenDist,
          duration: 400,
          ease: Phaser.Math.Easing.Back.In,
          onComplete: this.numTweenReverseEnd.bind(this)
        });
      }
    }
  }, {
    key: "outroTimerEnd",
    value: function outroTimerEnd() {
      this.scene.start("GameOver", {
        fromLevel: this.levelNum,
        score: this.score,
        levelDiff: this.levelDiff,
        rightCount: this.rightNumCount,
        wrongCount: this.wrongNumCount
      });
    } //Mute clicked

  }, {
    key: "musicClicked",
    value: function musicClicked() {
      if (this.bgmRef.mute) {
        //unmute
        this.bgmRef.setMute(false);
        this.btn_musicoff.setVisible(false);
        this.btn_musicoff.setActive(false);
        this.btn_musicon.setVisible(true);
        this.btn_musicon.setActive(true);
      } else if (!this.bgmRef.mute) {
        //mute
        this.bgmRef.setMute(true);
        this.btn_musicon.setVisible(false);
        this.btn_musicon.setActive(false);
        this.btn_musicoff.setVisible(true);
        this.btn_musicoff.setActive(true);
      }
    }
  }, {
    key: "homeClicked",
    value: function homeClicked() {
      var num = this.levelNum;
      var diff = this.levelDiff;
      this.scene.start("Menu", {
        fromLoad: 0,
        levelNum: num,
        levelDiff: diff
      });
    }
  }, {
    key: "restartClicked",
    value: function restartClicked() {
      this.scene.restart();
    }
  }]);

  return GameScene;
}(Phaser.Scene);