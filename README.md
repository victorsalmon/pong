# Pong Game
## ES2015 Concepts, SVG Simplicity
This is an SVG-based pong game that demonstrates ES2015, Babel, webpack, and XML namespace ability. A configuration script allows redesign of the game on the fly to re-use modular code and allow for cool variations of the timeless classic.

## Faithfully Rendered Classic
The original is re-created with attention to detail including some 8-bit sound effects. While this was a class project, I made modifications to the randomization function so serves have a tighter band of angles normalizing the range of horizontal speeds and leading to a better gameplay experience.

<img src="https://raw.githubusercontent.com/victorsalmon/pong/master/public/images/pong-default.png">

## Completely Configurable by Modular Design
By using the prompt for configuration, rules can be changed including ball radius, paddle length, size of board, paddle speed, and ball speed. This can lead to some fairly reasonable looking games:
<img src="https://raw.githubusercontent.com/victorsalmon/pong/master/public/images/pong-custom.png">

...and some pretty challenging/absurd ones:
<img src="https://raw.githubusercontent.com/victorsalmon/pong/master/public/images/pong-challenge.png">

## Score-Keeping and Victory Conditions
As with any complete game of pong, scores are kept and winners are announced, resetting the game immediately afterwards and calling the configuration confirm. To play the same rules again, simply click cancel on the config tool and it immediately aborts running, resetting the game as is.
<img src="https://raw.githubusercontent.com/victorsalmon/pong/master/public/images/pong-victory.png">

## How to Play
Games go to 11 as with table tennis. Keys are as follows:


P1 Up: a
P1 Down: z

Pause: spacebar

P2 Up: ▲
P2 Down: ▼
