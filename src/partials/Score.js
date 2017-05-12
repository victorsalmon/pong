import { SVG_NS } from '../settings';
export default class Score {

  constructor(player, size, x, y) {
    this.player = player;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  render(svg) {
    let score = document.createElementNS(SVG_NS, 'text')
    score.setAttributeNS(null, 'x', this.x);
    score.setAttributeNS(null, 'y', this.y);
    score.setAttributeNS(null, 'fill', 'white');
    score.setAttributeNS(null, 'font-family', '\'Silkscreen Web\' monotype');
    score.setAttributeNS(null, 'font-size', this.size);
    score.textContent = this.player.score;
    svg.appendChild(score);
  }
}