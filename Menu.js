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

var Menu = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Menu, _Phaser$Scene);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, {
      key: "Menu"
    });
    _this.fromLoad;
    _this.levelNum;
    _this.levelDiff;
    _this.bgmRef;
    _this.titleBG;
    _this.title1;
    _this.adam;
    _this.joury;
    _this.title2;
    _this.playBTN;
    _this.musicBTN;
    _this.musicOffBTN;
    return _this;
  }

  _createClass(Menu, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "init",
    value: function init(data) {
      this.fromLoad = data.fromLoad;
      this.levelNum = data.levelNum;
      this.levelDiff = data.levelDiff;
    }
  }, {
    key: "create",
    value: function create() {
      this.createScene();
      /*
      if(this.fromLoad == 1) {
        this.time.delayedCall(2000, this.timerEnd, null, this);
      } else if(this.fromLoad == 0) {
        this.add.image(640,384, 'LoadIndicator');
      }
      */

      if (this.fromLoad == 1) {
        this.title1.setAlpha(0);
        this.playBTN.setActive(false);
        this.musicBTN.setActive(false);
        this.musicBTN.setAlpha(0);
        this.playBTN.setAlpha(0);
        var tweenTimeLine = this.tweens.createTimeline();
        tweenTimeLine.add({
          targets: this.titleBG,
          y: 223,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out
        });
        tweenTimeLine.add({
          targets: this.title1,
          alpha: 1,
          duration: 500,
          ease: Phaser.Math.Easing.Quadratic.Out
        });
        tweenTimeLine.add({
          targets: this.title2,
          y: 425,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out
        });
        tweenTimeLine.add({
          targets: [this.adam, this.joury],
          y: 564,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out,
          onComplete: this.timelineComplete.bind(this)
        });
        /*
        tweenTimeLine.add({
        targets: [this.playBTN, this.musicBTN],
        alpha: 1,
        duration: 400,
        ease: Phaser.Math.Easing.Quadratic.Out,
        onComplete: this.timelineComplete.bind(this)
        });
        */

        tweenTimeLine.play();
      } else if (this.fromLoad == 0) {
        this.adam.y = this.joury.y = 564;
        this.titleBG.y = 223;
        this.title1.alpha = 1;
        this.title2.y = 425;
      }

      var sceneM = this.scene.get("Menu");
      this.playBTN.setInteractive().on('pointerdown', function () {
        sceneM.menuClicked();
      });
      this.musicBTN.setInteractive().on('pointerdown', function () {
        sceneM.musicClicked();
      });
      this.musicOffBTN.setInteractive().on('pointerdown', function () {
        sceneM.musicClicked();
      });
      var sceneM = this.scene.get("Menu"); //Start BGM

      if (this.bgmRef == null) {
        //Howler.usingWebAudio = false;
        this.bgmRef = new Howl({
          src: ['assets/audio/bgm.mp3', 'assets/audio/bgm.ogg', 'assets/audio/bgm.wav', 'assets/audio/bgm.m4a'],
          loop: true
        });

        if (Howler.usingWebAudio) {
          this.title2.alpha = 0.5;
        }

        this.bgmRef.play();
        this.musicOffBTN.setVisible(false);
        this.musicOffBTN.setActive(false);
      } else if (this.bgmRef.mute) {
        this.musicBTN.setActive(false);
        this.musicBTN.setVisible(false);
        this.musicOffBTN.setActive(true);
        this.musicOffBTN.setVisible(true);
      } else if (!this.bgmRef.mute) {
        this.musicBTN.setActive(true);
        this.musicBTN.setVisible(true);
        this.musicOffBTN.setActive(false);
        this.musicOffBTN.setVisible(false);
      }
      /* //Phaser audio system
      if(!sceneM.sound.get('bgm')) {
      this.bgmRef = sceneM.sound.add('bgm');
      this.bgmRef.play();
      this.bgmRef.setLoop(true);
      } else if(sceneM.sound.get('bgm')) {
      this.bgmRef = sceneM.sound.get('bgm');
      if(this.bgmRef.mute) {
      this.musicBTN.setActive(false);
      this.musicBTN.setVisible(false);
      this.musicOffBTN.setActive(true);
      this.musicOffBTN.setVisible(true);
      } else if(!this.bgmRef.mute) {
      this.musicBTN.setActive(true);
      this.musicBTN.setVisible(true);
      this.musicOffBTN.setActive(false);
      this.musicOffBTN.setVisible(false);
      }
      }
      */

    }
  }, {
    key: "createScene",
    value: function createScene() {
      this.add.image(624, 390, "Asset 21-8");
      var menu_TitleBG = this.add.image(640, -204, "TitleBG");
      var menu_Title1 = this.add.image(640, 197, "Title1");
      var menu_Adam = this.add.image(270, 1099, "Adam");
      var menu_Joury = this.add.image(1018, 1125, "Joury");
      var menu_Title2 = this.add.image(640, 937, "Title2");
      var menu_PlayBTN = this.add.image(728, 607, "PlayBTN");
      var menu_MusicBTN = this.add.image(528, 607, "MusicBTN");
      var menu_MusicOffBTN = this.add.image(528, 607, "MusicOffBTN");
      this.titleBG = menu_TitleBG;
      this.title1 = menu_Title1;
      this.adam = menu_Adam;
      this.joury = menu_Joury;
      this.title2 = menu_Title2;
      this.playBTN = menu_PlayBTN;
      this.musicBTN = menu_MusicBTN;
      this.musicOffBTN = menu_MusicOffBTN;
    }
  }, {
    key: "timelineComplete",
    value: function timelineComplete() {
      if (this.fromLoad == 1) {
        this.time.delayedCall(1000, this.endOfIntroDelay, null, this);
      } else {
        this.playBTN.setActive(true);
        this.playBTN.setVisible(true);
        this.musicBTN.setActive(true);
        this.musicBTN.setVisible(true);
      }
    }
  }, {
    key: "endOfIntroDelay",
    value: function endOfIntroDelay() {
      this.menuClicked();
    }
  }, {
    key: "menuClicked",
    value: function menuClicked() {
      this.scene.start("CutScene", {
        levelNum: this.levelNum,
        levelDiff: this.levelDiff
      });
    }
  }, {
    key: "musicClicked",
    value: function musicClicked() {
      console.log("musicBTN clicked" + this.bgmRef.muted);

      if (this.bgmRef.muted) {
        //unmute
        this.bgmRef.mute(false);
        this.bgmRef.muted = false;
        this.musicBTN.setActive(true);
        this.musicBTN.setVisible(true);
        this.musicOffBTN.setActive(false);
        this.musicOffBTN.setVisible(false);
      } else if (!this.bgmRef.muted) {
        //mute
        this.bgmRef.mute(true);
        this.bgmRef.muted = true;
        this.musicBTN.setActive(false);
        this.musicBTN.setVisible(false);
        this.musicOffBTN.setActive(true);
        this.musicOffBTN.setVisible(true);
      }
    }
  }]);

  return Menu;
}(Phaser.Scene);