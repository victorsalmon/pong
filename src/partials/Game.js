import { SVG_NS, KEYS, PADDLE, PADDING } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.paddleWidth = PADDLE.width;
		this.paddleHeight = PADDLE.height;
		this.padding = PADDING;
		this.gamePaused = false;
		this.scoreSize = 30;
		this.scoreHeight = 3 * PADDING;

		document.addEventListener('keydown', event => {
			if (event.key === KEYS.pause) {
				this.gamePaused = !this.gamePaused;
			}

		});

		this.board = new Board(width, height);
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.padding,
			(this.height - this.paddleHeight) / 2,
			KEYS.p1up,
			KEYS.p1dn
		)
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.paddleWidth - this.padding,
			(this.height - this.paddleHeight) / 2,
			KEYS.p2up,
			KEYS.p2dn
		)
		this.ball = new Ball(this.width, this.height)
		this.score1 = new Score(this.player1, this.scoreSize, this.width / 4, this.scoreHeight);
		this.score2 = new Score(this.player2, this.scoreSize, 3 * this.width / 4, this.scoreHeight);
	}

	render() {
		if (this.gamePaused) { return; }
		this.gameElement.innerHTML = '';
		const svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
		this.score1.render(svg);
		this.score2.render(svg);
		this.gameElement.appendChild(svg);
	}

}