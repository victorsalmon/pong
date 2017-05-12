import { SVG_NS, COLORS} from '../settings';
export default class Ball {

  constructor(boardWidth, boardHeight) {
    this.radius = 8;
    this.direction = 1;
    this.speed = 5;
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.reset();
  }
  reset () {
    this.posX = this.boardWidth/2
    this.posY = this.boardHeight/2

    //Randomize vector and velocity
    this.vy = Math.floor(Math.random() * 2*this.speed - this.speed); 
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  paddleCollision (player1, player2){
    if (this.vx > 0 &&
        this.posX + this.radius >= player2.coordinates()[0]){
      if (player2.coordinates()[2] >= this.posY ||
          this.posY >= player2.coordinates()[3]){
      this.reset();
      } else {
      this.vx = -this.vx;
      }
    }

    if (this.vx < 0 &&
        this.posX - this.radius <= player1.coordinates()[1]){
      if (player1.coordinates()[2] >= this.posY ||
          this.posY >= player1.coordinates()[3]){
        this.reset();
      } else {
        this.vx = -this.vx;
      }
    }
  }

  wallCollision () {
    const hitLeft = this.posX - this.radius <=0;
    const hitRight = this.posX + this.radius >= this.boardWidth;
    const hitTop = this.posY - this.radius <= 0;
    const hitBottom = this.posY + this.radius >= this.boardHeight;

    if (hitLeft || hitRight){
      this.vx = -this.vx
    }
    if (hitTop || hitBottom){
      this.vy = -this.vy
    }
  }


  render(svg, player1, player2) {
    this.posX += this.vx;
    this.posY += this.vy; 
    this.wallCollision();
    this.paddleCollision(player1, player2);

    const circ = document.createElementNS(SVG_NS, 'circle');
    circ.setAttributeNS(null, 'r', this.radius);
    circ.setAttributeNS(null, 'cx', this.posX);
    circ.setAttributeNS(null, 'cy', this.posY);
    circ.setAttributeNS(null, 'fill', COLORS.fore);
    svg.appendChild(circ);
  }
}