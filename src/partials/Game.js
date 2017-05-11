import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById (element);
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.padding = 10;

		this.board = new Board (width, height);
		this.player1 = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.padding, 
			(this.height-this.paddleHeight)/2,
			KEYS.p1up,
			KEYS.p1dn
		)
		this.player2 = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.width-this.paddleWidth-this.padding,
			(this.height-this.paddleHeight)/2,
			KEYS.p2up,
			KEYS.p2dn
		)
	}

	render() {
		this.gameElement.innerHTML = '';
		const svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild (svg);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);



	}

}