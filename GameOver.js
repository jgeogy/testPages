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

var GameOver = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(GameOver, _Phaser$Scene);

  var _super = _createSuper(GameOver);

  function GameOver() {
    var _this;

    _classCallCheck(this, GameOver);

    _this = _super.call(this, {
      key: "GameOver"
    });
    _this.fromLevel; //check which level it was coming from

    _this.levelDiff; //store current difficulty

    _this.score; //score earned

    _this.rightCount; //Total number of right number

    _this.wrongCount; //Total number of wrong number

    _this.stars; //number of stars

    _this.btn_home;
    _this.btn_replay;
    _this.btn_next;
    _this.s1;
    _this.s2;
    _this.s3;
    return _this;
  }

  _createClass(GameOver, [{
    key: "sceneSetUp",
    value: function sceneSetUp() {
      // result_base
      this.add.image(640, 358, "result_base"); // sg1

      this.add.image(460, 164, "sg1"); // sg2

      this.add.image(640, 137, "sg2"); // sg3

      this.add.image(820, 164, "sg3"); // joory

      var joory = this.add.image(1015, 703, "joory");
      joory.setOrigin(0.5, 1); // adam

      var adam = this.add.image(270, 703, "adam");
      adam.setOrigin(0.5, 1); // btn_home

      var btn_home = this.add.image(640, 675, "btn_home"); // btn_replay

      var btn_replay = this.add.image(490, 675, "btn_replay"); // btn_next

      var btn_next = this.add.image(790, 675, "btn_next"); // s1

      var s1 = this.add.image(460, 164, "s1"); // s2

      var s2 = this.add.image(640, 137, "s2"); // s3

      var s3 = this.add.image(820, 164, "s3");
      this.btn_home = btn_home;
      this.btn_replay = btn_replay;
      this.btn_next = btn_next;
      this.s1 = s1;
      this.s2 = s2;
      this.s3 = s3;
    }
  }, {
    key: "init",
    value: function init(data) {
      this.score = data.score;
      this.fromLevel = data.fromLevel;
      this.levelDiff = data.levelDiff;
      this.rightCount = data.rightCount;
      this.wrongCount = data.wrongCount;
      console.log(this.fromLevel + "||" + this.levelDiff);
    }
  }, {
    key: "create",
    value: function create() {
      if (this.fromLevel == 1) {
        this.cameras.main.setBackgroundColor("#8dffe3");
      } else if (this.fromLevel == 2) {
        this.cameras.main.setBackgroundColor("#caff90");
      } else if (this.fromLevel == 3) {
        this.cameras.main.setBackgroundColor("#fe85b4");
      }

      if (this.score < 5) {
        this.stars = 0;
      } else if (this.score >= 5 && this.score < 12) {
        this.stars = 1;
      } else if (this.score >= 12 && this.score < 20) {
        this.stars = 2;
      } else if (this.score >= 20) {
        this.stars = 3;
      }

      this.sceneSetUp(); //Make stars size 0

      this.s1.setScale(0, 0);
      this.s2.setScale(0, 0);
      this.s3.setScale(0, 0);
      var sceneGO = this.scene.get("GameOver");
      this.btn_home.setInteractive().on('pointerdown', function () {
        //What happens when home btn is pressed
        sceneGO.home();
      });
      this.btn_next.setInteractive().on('pointerdown', function () {
        //What happens when next button is pressed
        var nextLvl = Number(sceneGO.fromLevel) + 1;

        if (nextLvl <= 3) {
          sceneGO.proceed(nextLvl);
        } else if (nextLvl > 3) {
          sceneGO.home();
        }
      });
      this.btn_replay.setInteractive().on('pointerdown', function () {
        var lvl = Number(sceneGO.fromLevel);
        sceneGO.replay(lvl);
      }); //Pop stars into place

      if (this.stars > 0) {
        this.tweens.add({
          targets: this.s1,
          scaleX: 1,
          scaleY: 1,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out,
          onComplete: this.s1End.bind(this)
        });
      }

      var voRef = sceneGO.sound.add('g6_02_done making');
      voRef.play();
      this.time.delayedCall(voRef.duration * 1000, this.voTimerEnd, null, this); //this.time.delayedCall(2000, this.voTimerEnd, null, this);

      this.btn_home.setActive(false);
      this.btn_home.setVisible(false);
      this.btn_replay.setActive(false);
      this.btn_replay.setVisible(false);
      this.btn_next.setActive(false);
      this.btn_next.setVisible(false);
    } //All stars done

  }, {
    key: "allStarsDone",
    value: function allStarsDone() {
      console.log("All stars done");
    }
  }, {
    key: "s1End",
    value: function s1End() {
      console.log("1st star done");

      if (this.stars > 1) {
        this.tweens.add({
          targets: this.s2,
          scaleX: 1,
          scaleY: 1,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out,
          onComplete: this.s2End.bind(this)
        });
      } else if (this.stars == 1) {
        this.allStarsDone();
      }
    }
  }, {
    key: "s2End",
    value: function s2End() {
      console.log("2nd star done");

      if (this.stars > 2) {
        this.tweens.add({
          targets: this.s3,
          scaleX: 1,
          scaleY: 1,
          duration: 400,
          ease: Phaser.Math.Easing.Back.Out,
          onComplete: this.allStarsDone.bind(this)
        });
      } else if (this.stars == 2) {
        this.allStarsDone();
      }
    }
  }, {
    key: "replay",
    value: function replay(lvl) {
      this.scene.start("GameScene", {
        levelNum: lvl,
        levelDiff: this.levelDiff
      });
    }
  }, {
    key: "proceed",
    value: function proceed(lvl) {
      this.scene.start("GameScene", {
        levelNum: lvl,
        levelDiff: this.levelDiff
      });
    }
  }, {
    key: "home",
    value: function home() {
      this.scene.start("Menu", {
        fromLoad: 0,
        levelDiff: this.levelDiff
      });
    }
  }, {
    key: "voTimerEnd",
    value: function voTimerEnd() {
      this.btn_home.setActive(true);
      this.btn_home.setVisible(true);
      this.btn_replay.setActive(true);
      this.btn_replay.setVisible(true);
      this.btn_next.setActive(true);
      this.btn_next.setVisible(true);
    }
  }]);

  return GameOver;
}(Phaser.Scene);