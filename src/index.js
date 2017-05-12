import './styles/game.css';
import { GAME_SIZE } from './settings.js'
import Game from './partials/Game';

// create a game instance
let game = new Game('game', GAME_SIZE.width, GAME_SIZE.height);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();