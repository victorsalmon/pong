import { SVG_NS, COLORS } from '../settings';
export default class Ball {

  constructor(boardWidth, boardHeight) {
    this.radius = 8;
    this.direction = 1;
    this.speed = 5;
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.reset();
    this.ping1 = new Audio('public/sounds/pong-01.wav');
    this.ping2 = new Audio('public/sounds/pong-02.wav');
  }
  reset(direction = this.direction) {
    this.posX = this.boardWidth / 2
    this.posY = this.boardHeight / 2

    //Randomize vector and velocity
    this.vy = Math.floor(Math.random() * 2 * this.speed - this.speed);
    this.vx = direction * (7 - Math.abs(this.vy));
    if (this.vy === 0) { this.reset(); }
  }

  paddleCollision(player1, player2) {
    const [, rightX1, topY1, botY1] = player1.coordinates();
    const [leftX2, , topY2, botY2] = player2.coordinates();

    if (this.vx > 0 &&
      this.posX + this.radius >= leftX2) {
      if (topY2 >= this.posY ||
        botY2 <= this.posY) {
        //invert
      } else {
        this.vx = -this.vx;
        this.ping1.play();
      }
    }
    if (this.vx < 0 &&
      this.posX - this.radius <= rightX1) {
      if (topY1 >= this.posY ||
        botY1 <= this.posY) {
        //invert
      } else {
        this.vx = -this.vx;
        this.ping1.play();
      }
    }
  }

  wallCollision(player1, player2) {
    const hitLeft = this.posX - this.radius <= 0;
    const hitRight = this.posX + this.radius >= this.boardWidth;
    const hitTop = this.posY - this.radius <= 0;
    const hitBottom = this.posY + this.radius >= this.boardHeight;

    if (hitLeft) {
      this.reset(1);
      player2.score++;
      this.ping2.play();

    }
    if (hitRight) {
      this.reset(-1);
      player1.score++;
      this.ping2.play();
    }
    if (hitTop || hitBottom) {
      this.vy = -this.vy
    }
  }


  render(svg, player1, player2) {
    this.posX += this.vx;
    this.posY += this.vy;
    this.paddleCollision(player1, player2);
    this.wallCollision(player1, player2);

    const circ = document.createElementNS(SVG_NS, 'circle');
    circ.setAttributeNS(null, 'r', this.radius);
    circ.setAttributeNS(null, 'cx', this.posX);
    circ.setAttributeNS(null, 'cy', this.posY);
    circ.setAttributeNS(null, 'fill', COLORS.fore);
    svg.appendChild(circ);
  }
}