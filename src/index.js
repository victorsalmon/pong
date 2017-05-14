import './styles/game.css';
import { SETTINGS } from './settings'
import Game from './partials/Game';

// create a game instance
let game = new Game('game', SETTINGS);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();