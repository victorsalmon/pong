import { SVG_NS, COLORS } from '../settings';
export default class Board {

  // accept settings on how large of a board to draw from config tool
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // draw the board
  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect');
    const line = document.createElementNS(SVG_NS, 'line');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', COLORS.back);
    svg.appendChild(rect);

    line.setAttributeNS(null, 'stroke-dasharray', '22, 17');
    line.setAttributeNS(null, 'stroke', COLORS.fore);
    line.setAttributeNS(null, 'stroke-width', '4');
    line.setAttributeNS(null, 'x1', (this.width / 2));
    line.setAttributeNS(null, 'x2', (this.width / 2));
    line.setAttributeNS(null, 'y1', '0');
    line.setAttributeNS(null, 'y2', this.height);
    svg.appendChild(line);
  }
}