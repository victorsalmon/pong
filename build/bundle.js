/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';
var SETTINGS = exports.SETTINGS = {
  ballRadius: 8,
  ballSpeed: 4,
  boardWidth: 512,
  boardHeight: 256,
  padding: 10,
  paddleHeight: 56,
  paddleSpeed: 10,
  paddleWidth: 8
};
var COLORS = exports.COLORS = {
  back: '#353535',
  fore: 'white'
};
var KEYS = exports.KEYS = {
  p1up: 'a', // player 1 up key
  p1dn: 'z', // player 1 down key
  p2up: 'ArrowUp', // player 2 up key
  p2dn: 'ArrowDown', // player 2 down key
  pause: ' ',
  menu: 'm'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// retrieve modules to build out the game


var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Board2 = _interopRequireDefault(_Board);

var _Paddle = __webpack_require__(7);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(5);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(8);

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {

	// accept binding element and settings from config tool 
	function Game(element, settings) {
		var _this = this;

		_classCallCheck(this, Game);

		this.width = settings.boardWidth;
		this.height = settings.boardHeight;
		this.gameElement = document.getElementById(element);
		this.paddleWidth = settings.paddleWidth;
		this.paddleHeight = settings.paddleHeight;
		this.paddleSpeed = settings.paddleSpeed;
		this.ballRadius = settings.ballRadius;
		this.ballSpeed = settings.ballSpeed;
		this.padding = settings.padding;
		this.gamePaused = false;
		this.scoreSize = 30;
		this.scoreHeight = 3 * settings.padding;

		document.addEventListener('keydown', function (event) {
			if (event.key === _settings.KEYS.pause) {
				_this.gamePaused = !_this.gamePaused;
			}
		});
		this.reset();
	}

	_createClass(Game, [{
		key: 'reset',
		value: function reset() {
			//If someone won, reset the game
			this.board = new _Board2.default(this.width, this.height);

			// create paddles for each player bound to keys from settings
			this.player1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.paddleSpeed, this.padding, (this.height - this.paddleHeight) / 2, _settings.KEYS.p1up, _settings.KEYS.p1dn);
			this.player2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.paddleSpeed, this.width - this.paddleWidth - this.padding, (this.height - this.paddleHeight) / 2, _settings.KEYS.p2up, _settings.KEYS.p2dn);

			// create a ball based on settings
			this.ball = new _Ball2.default(this.width, this.height, this.ballRadius, this.ballSpeed);

			// scores are kept as objects on each player's paddle
			this.score1 = new _Score2.default(this.player1, this.scoreSize, this.width / 4, this.scoreHeight);
			this.score2 = new _Score2.default(this.player2, this.scoreSize, 3 * this.width / 4, this.scoreHeight);
		}
	}, {
		key: 'render',
		value: function render() {
			//Is the game paused?
			if (this.gamePaused) {
				return;
			}

			//Did either player win?
			if (this.player1.score >= 11) {
				if (confirm('Player 1 Wins! Click OK to play again! Click cancel to reconfigure!')) {
					this.reset();
				} else {
					location.reload();
				}
			}
			if (this.player2.score >= 11) {
				if (confirm('Player 2 Wins! Click OK to play again! Click cancel to reconfigure!')) {
					this.reset();
				} else {
					location.reload();
				}
			}

			//Render game
			this.gameElement.innerHTML = '';
			var svg = document.createElementNS(_settings.SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
			this.board.render(svg);
			this.player1.render(svg);
			this.player2.render(svg);
			this.ball.render(svg, this.player1, this.player2);
			this.score1.render(svg);
			this.score2.render(svg);
			this.gameElement.appendChild(svg);
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(14)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _settings = __webpack_require__(0);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _settings.SETTINGS;
config.paddleWidth = _settings.SETTINGS.paddleWidth;
config.padding = _settings.SETTINGS.padding;

// quick configuration script
if (confirm('Do you want to configure pong? If yes, you must enter a value and each must be a number.')) {
    config.ballRadius = parseInt(prompt('In pixels, how big should the ball radius be? (default is 8)', 8));
    config.ballSpeed = parseInt(prompt('In pixels, how fast should the ball fly? (default is 4)', 4));
    config.boardWidth = parseInt(prompt('In pixels, how wide should the game be? (default is 512)', 512));
    config.boardHeight = parseInt(prompt('In pixels, how tall should the game be? (default is 256)', 256));
    config.paddleHeight = parseInt(prompt('In pixels, how tall should the paddles be? (default is 56)', 56));
    config.paddleSpeed = parseInt(prompt('In pixels, how far should the paddles travel per key press? (default is 10)', 10));
}

// create a game instance
var game = new _Game2.default('game', config);

// run the game
(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(boardWidth, boardHeight, radius, speed) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.direction = 1;
    this.speed = speed;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.reset();
    this.ping1 = new Audio('public/sounds/pong-01.wav');
    this.ping2 = new Audio('public/sounds/pong-02.wav');
  }

  // reset the game


  _createClass(Ball, [{
    key: 'reset',
    value: function reset() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.direction;

      this.posX = this.boardWidth / 2;
      this.posY = this.boardHeight / 2;

      //Randomize vector and velocity
      this.vy = Math.floor(Math.random() * 2 * this.speed - this.speed);
      this.vx = direction * (this.speed + 2 - Math.abs(this.vy));
      if (this.vy === 0) {
        this.reset();
      }
    }

    // detect ball-paddle bounces

  }, {
    key: 'paddleCollision',
    value: function paddleCollision(player1, player2) {
      var _player1$coordinates = player1.coordinates(),
          _player1$coordinates2 = _slicedToArray(_player1$coordinates, 4),
          rightX1 = _player1$coordinates2[1],
          topY1 = _player1$coordinates2[2],
          botY1 = _player1$coordinates2[3];

      var _player2$coordinates = player2.coordinates(),
          _player2$coordinates2 = _slicedToArray(_player2$coordinates, 4),
          leftX2 = _player2$coordinates2[0],
          topY2 = _player2$coordinates2[2],
          botY2 = _player2$coordinates2[3];

      if (this.vx > 0 && this.posX + this.radius >= leftX2) {
        if (topY2 >= this.posY || botY2 <= this.posY) {
          //invert
        } else {
          this.vx = -this.vx;
          this.ping1.play();
        }
      }
      if (this.vx < 0 && this.posX - this.radius <= rightX1) {
        if (topY1 >= this.posY || botY1 <= this.posY) {
          //invert
        } else {
          this.vx = -this.vx;
          this.ping1.play();
        }
      }
    }

    // detect ball-wall bounces

  }, {
    key: 'wallCollision',
    value: function wallCollision(player1, player2) {
      var hitLeft = this.posX - this.radius <= 0;
      var hitRight = this.posX + this.radius >= this.boardWidth;
      var hitTop = this.posY - this.radius <= 0;
      var hitBottom = this.posY + this.radius >= this.boardHeight;

      if (hitLeft) {
        this.reset(1);
        player2.score++;
        this.ping2.play();
      }
      if (hitRight) {
        this.reset(-1);
        player1.score++;
        this.ping2.play();
      }
      if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    }

    // draw the ball where it's supposed to be now

  }, {
    key: 'render',
    value: function render(svg, player1, player2) {
      this.posX += this.vx;
      this.posY += this.vy;
      this.paddleCollision(player1, player2);
      this.wallCollision(player1, player2);

      var circ = document.createElementNS(_settings.SVG_NS, 'circle');
      circ.setAttributeNS(null, 'r', this.radius);
      circ.setAttributeNS(null, 'cx', this.posX);
      circ.setAttributeNS(null, 'cy', this.posY);
      circ.setAttributeNS(null, 'fill', _settings.COLORS.fore);
      svg.appendChild(circ);
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {

  // accept settings on how large of a board to draw from config tool
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  }

  // draw the board


  _createClass(Board, [{
    key: 'render',
    value: function render(svg) {
      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      var line = document.createElementNS(_settings.SVG_NS, 'line');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'fill', _settings.COLORS.back);
      svg.appendChild(rect);

      line.setAttributeNS(null, 'stroke-dasharray', '22, 17');
      line.setAttributeNS(null, 'stroke', _settings.COLORS.fore);
      line.setAttributeNS(null, 'stroke-width', '4');
      line.setAttributeNS(null, 'x1', this.width / 2);
      line.setAttributeNS(null, 'x2', this.width / 2);
      line.setAttributeNS(null, 'y1', '0');
      line.setAttributeNS(null, 'y2', this.height);
      svg.appendChild(line);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(boardHeight, width, height, speed, x, y, up, down) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = 0;

    //Bind keys to paddles
    document.addEventListener('keydown', function (event) {
      switch (event.key) {
        case up:
          _this.up();
          break;
        case down:
          _this.down();
          break;
      }
    });
  }

  _createClass(Paddle, [{
    key: 'coordinates',
    value: function coordinates() {
      var leftX = this.x;
      var rightX = this.x + this.width;
      var topY = this.y;
      var bottomY = this.y + this.height;
      return [leftX, rightX, topY, bottomY];
    }
    //Move paddles but prevent leaving the board surface

  }, {
    key: 'down',
    value: function down() {
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }
  }, {
    key: 'up',
    value: function up() {
      this.y = Math.max(0, this.y - this.speed);
    }

    //Display paddles

  }, {
    key: 'render',
    value: function render(svg) {
      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'fill', 'white');
      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y', this.y);
      svg.appendChild(rect);
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(player, size, x, y) {
    _classCallCheck(this, Score);

    // which player's score this is
    this.player = player;

    // display settings
    this.size = size;
    this.x = x;
    this.y = y;
  }

  // draw the score


  _createClass(Score, [{
    key: 'render',
    value: function render(svg) {
      var score = document.createElementNS(_settings.SVG_NS, 'text');
      score.setAttributeNS(null, 'x', this.x);
      score.setAttributeNS(null, 'y', this.y);
      score.setAttributeNS(null, 'fill', 'white');
      score.setAttributeNS(null, 'font-family', '\'Silkscreen Web\' monotype');
      score.setAttributeNS(null, 'font-size', this.size);
      score.textContent = this.player.score;
      svg.appendChild(score);
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n\r\n/* HTML5 display-role reset for older browsers */\r\n\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after {\r\n  content: '';\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n\r\n/**\r\n * FONTS\r\n */\r\n\r\n@font-face {\r\n  font-family: 'Silkscreen Web';\r\n  src: url(" + __webpack_require__(1) + ");\r\n  src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(13) + ") format('woff'), url(" + __webpack_require__(12) + ") format('truetype'), url(" + __webpack_require__(11) + "#silkscreennormal) format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n\r\n/**\r\n * GAME\r\n */\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  align-items: center;\r\n  display: flex;\r\n  font-family: 'Silkscreen Web', monotype;\r\n  height: 100vh;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);