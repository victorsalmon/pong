import { SVG_NS } from '../settings';
export default class Score {

  constructor(player, size, x, y) {
    // which player's score this is
    this.player = player;

    // display settings
    this.size = size;
    this.x = x;
    this.y = y;
  }

  // draw the score
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