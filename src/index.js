import './styles/game.css';
import { SETTINGS } from './settings'
import Game from './partials/Game';

let config = SETTINGS;
config.paddleWidth = SETTINGS.paddleWidth;
config.padding = SETTINGS.padding;

//configure
if (confirm('Do you want to configure pong? If yes, you must enter a value and each must be a number.')) {
    config.ballRadius = parseInt(prompt('In pixels, how big should the ball radius be? (default is 8)', 8))
    config.ballSpeed = parseInt(prompt('In pixels, how fast should the ball fly? (default is 4)', 4))
    config.boardWidth = parseInt(prompt('In pixels, how wide should the game be? (default is 512)', 512))
    config.boardHeight = parseInt(prompt('In pixels, how tall should the game be? (default is 256)', 256))
    config.paddleHeight = parseInt(prompt('In pixels, how tall should the paddles be? (default is 56)', 56))
    config.paddleSpeed = parseInt(prompt('In pixels, how far should the paddles travel per key press? (default is 10)', 10))
}

// create a game instance
let game = new Game('game', config);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();