import { SVG_NS, PADDLE } from '../settings';
export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = PADDLE.speed;
    this.score = 0;

    //Bind keys to paddles
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }

  coordinates() {
    let leftX = this.x;
    let rightX = this.x + this.width;
    let topY = this.y;
    let bottomY = this.y + this.height;
    return [leftX, rightX, topY, bottomY];
  }
  //Move paddles but prevent leaving the board surface
  down() {
    this.y = Math.min((this.y + this.speed), (this.boardHeight - this.height));
  }
  up() {
    this.y = Math.max(0, this.y - this.speed)
  }

  //Display paddles
  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'white');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    svg.appendChild(rect);
  }

}
