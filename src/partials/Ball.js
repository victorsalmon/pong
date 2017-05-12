import { SVG_NS, COLORS, GAME_SIZE, BALL_SIZE } from '../settings';
export default class Ball {

  constructor() {
    this.radius = BALL_SIZE;
    this.centerX = GAME_SIZE.width/2;
    this.centerY = GAME_SIZE.height/2;

  }

  render(svg) {
    const circ = document.createElementNS(SVG_NS, 'circle');
    circ.setAttributeNS(null, 'r', this.radius);
    circ.setAttributeNS(null, 'cx', this.centerX);
    circ.setAttributeNS(null, 'cy', this.centerY);
    circ.setAttributeNS(null, 'fill', COLORS.fore);
    svg.appendChild(circ);
  }
}


//			<circle r="8" cx="256" cy="128" fill="white"/>