import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const boardWidth = 512;
const boardHeight = 256;
let game = new Game('game', boardWidth, boardHeight);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();