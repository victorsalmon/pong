import { SVG_NS, PADDING } from '../settings';
export default class Score {

  constructor(player, size, x) {
    this.player = player;
    this.size = size;
    this.x = x;
  }
 
  render (svg) {
    let score = document.createElementNS(SVG_NS, 'text')    
    score.setAttributeNS(null, 'x', this.x);
    score.setAttributeNS(null, 'y', 3*PADDING);
    score.setAttributeNS(null, 'fill', 'white');
    score.setAttributeNS(null, 'font-family', '\'Silkscreen Web\' monotype');
    score.setAttributeNS(null, 'font-size', this.size);
    score.textContent = this.player.score;
    svg.appendChild(score);
  }
}