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

var Load = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Load, _Phaser$Scene);

  var _super = _createSuper(Load);

  function Load() {
    var _this;

    _classCallCheck(this, Load);

    _this = _super.call(this, {
      key: "Load"
    });
    _this.loadTxt;
    return _this;
  }

  _createClass(Load, [{
    key: "preload",
    value: function preload() {
      var loadTxt = this.add.text(600, 375, "", {});
      loadTxt.setOrigin(0.5, 0.5);
      loadTxt.text = "Loading";
      loadTxt.setStyle({
        "fontSize": "48px"
      });
      this.loadTxt = loadTxt;
      var myScene = this.scene; //images

      this.load.image('LoadBG', 'assets/images/load/bg.png');
      this.load.image('LoadIndicator', 'assets/images/load/dino.png');
      this.load.image('CSBG', 'assets/images/cutscene/csbg.png');
      this.load.image('Asset 21-8', 'assets/images/menu/Asset 21-8.png');
      this.load.image('TitleBG', 'assets/images/menu/Asset 15-8.png');
      this.load.image('Title1', 'assets/images/menu/Asset 14-8.png');
      this.load.image('Adam', 'assets/images/menu/Asset 19-8.png');
      this.load.image('Joury', 'assets/images/menu/Asset 20-8.png');
      this.load.image('Title2', 'assets/images/menu/Asset 16-8.png');
      this.load.image('PlayBTN', 'assets/images/menu/Asset 17-8.png');
      this.load.image('MusicBTN', 'assets/images/menu/Asset 18-8.png');
      this.load.image('MusicOffBTN', 'assets/images/menu/btn_musicoff.png'); //Audio

      this.load.audio('bgm', ['assets/audio/bgm.mp3', 'assets/audio/bgm.ogg']);
      this.load.audio('intro_01', ['assets/audio/intro_01.mp3', 'assets/audio/intro_01.ogg']);
      this.load.audio('g5_17_we no longer have this', ['assets/audio/g5_17_we no longer have this.mp3', 'assets/audio/g5_17_we no longer have this.ogg']);
      this.load.audio('g6_02_done making', ['assets/audio/g6_02_done making.mp3', 'assets/audio/g6_02_done making.ogg']);
      this.load.audio('general_07_well done', ['assets/audio/general_07_well done.mp3', 'assets/audio/general_07_well done.ogg']);
      this.load.audio('general_08_haay', ['assets/audio/general_08_haay.mp3', 'assets/audio/general_08_haay.ogg']);
      this.load.audio('general_09_woow', ['assets/audio/general_09_woow.mp3', 'assets/audio/general_09_woow.ogg']);
      this.load.audio('general_10_nice', ['assets/audio/general_10_nice.mp3', 'assets/audio/general_10_nice.ogg']);
      this.load.audio('star', ['assets/audio/star.mp3', 'assets/audio/star.ogg']);
      this.load.audio('swoosh', ['assets/audio/swoosh.mp3', 'assets/audio/swoosh.ogg']);
      this.load.audio('winning', ['assets/audio/winning.mp3', 'assets/audio/winning.ogg']);
      this.load.audio('wrongchoicex', ['assets/audio/wrongchoicex.mp3', 'assets/audio/wrongchoicex.ogg']); //Atlas

      this.load.pack("asset-pack_Game", "assets/images/Game/asset-pack_Game.json");
      this.load.on('progress', function (p) {
        loadTxt.text = "Loading " + p * 100 + "%";
      });
      this.load.on('complete', function () {
        myScene.start("Menu", {
          fromLoad: 0,
          levelNum: 1,
          levelDiff: 1
        });
      });
    }
  }, {
    key: "init",
    value: function init(data) {}
  }, {
    key: "create",
    value: function create() {}
  }]);

  return Load;
}(Phaser.Scene);