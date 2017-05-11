import { SVG_NS } from '../settings';
export default class Board {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect');
    const line = document.createElementNS(SVG_NS, 'line');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#353535');
    svg.appendChild(rect);

    line.setAttributeNS(null, 'stroke-dasharray', '22, 17');
    line.setAttributeNS(null, 'stroke', 'white');
    line.setAttributeNS(null, 'stroke-width', '4');
    line.setAttributeNS(null, 'x1', (this.width / 2));
    line.setAttributeNS(null, 'x2', (this.width / 2));
    line.setAttributeNS(null, 'y1', '0');
    line.setAttributeNS(null, 'y2', this.height);
    svg.appendChild(line);
  }
}