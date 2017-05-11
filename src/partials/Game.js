import { SVG_NS } from '../settings';
export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
	
		this.gameElement = document.getElementById (element);

	}

	render() {
		const svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.innerHTML(svg);
	}

}