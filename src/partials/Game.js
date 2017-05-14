import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
export default class Game {

	constructor(element, settings) {
		this.width = settings.boardWidth;
		this.height = settings.boardHeight;
		this.gameElement = document.getElementById(element);
		this.paddleWidth = settings.paddleWidth;
		this.paddleHeight = settings.paddleHeight;
		this.paddleSpeed = settings.paddleSpeed;
		this.padding = settings.padding;
		this.gamePaused = false;
		this.scoreSize = 30;
		this.scoreHeight = 3 * settings.padding;

		document.addEventListener('keydown', event => {
			if (event.key === KEYS.pause) {
				this.gamePaused = !this.gamePaused;
			}
		});
		this.reset();
	}

	reset (){
		this.board = new Board(this.width, this.height);
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.paddleSpeed,
			this.padding,
			(this.height - this.paddleHeight) / 2,
			KEYS.p1up,
			KEYS.p1dn
		)
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.paddleSpeed,
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
		if (this.player1.score >= 11) {
			alert ('Player 1 Wins!');
			this.reset ();
		}
		if (this.player2.score >= 11){
			alert ('Player 2 Wins!');
			this.reset ();
		}

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