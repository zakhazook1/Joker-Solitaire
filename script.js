//To everyone else - hey! I'm working on building the cards. 
/*
To-Do List
Build Webpage - Morris & Karon /Done
Build Cards - Zac & Najee
Add motion to the cards - Volunteer Here
Keep the cards from escaping the square - Vandrick
Finish ScoreBoard - Volunteer Here
*/
//get the game to go fullscreen when the lets play button is pressed(Optional)
//Randomize the cards
//

var canvasW = 800, canvasH = 800;
let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
let values = ['Ace','2','3','4','5','6','7','8','9','10','Joker','Queen','King'];
var scoreBoard = 0;
let button;


function setup() {
	createCanvas(800, 800);
  ellipse(mouseX, mouseY, 10,10);

}

function draw() {
	background(225);
  displayScore();
  fill(color(255,0,0));
  ellipse(mouseX, mouseY, 10,10);

  //updatescore();
}
class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  creataDeck(suits, values) {
    for(let suit of suits) {
      for(let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck.length;
  }

  shuffle() {
    let counter = this.deck.length, temp, i;

    while(counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  deal() {
    let hand = [];
    while(hand.length < 2) {
      hand.push(this.deck.pop());
    }
    return hand;
  }

}

let deck = new Deck(suits, values);
deck.creataDeck(suits, values);
console.log(deck.shuffle());
console.log(deck.deal());

//table
var table = []
table['stock'] = s;
table['wastle'] = w;
table['spades'] = spades;
table['hearts'] = hearts;
table['diamonds'] = diamonds;
table['clubs'] = clubs;
table['tab'] = t;

//initial face up cards
var playedCards = 
'#waste .card,' + 
'#fnd .card,' + 
'#tab .card:last-child';

// cache selectors
var $timer = d.querySelector('#score .timer');
var $timerSpan = d.querySelector('#score .timer span');
var $moveCount = d.querySelector('#move-count');
var $moveCountSpan = d.querySelector('#move-count span');
var $score = d.querySelector('#score .score');
var $scoreSpan = d.querySelector('#score .score span');
var $playPause = d.querySelector('#play-pause');
var $upper = d.querySelector('#upper-row');
var $lower = d.querySelector('#lower-row');
var $stock = d.querySelector('#stock');
var $waste = d.querySelector('#waste');
var $fnd = d.querySelector('#find');
var $tab = d.querySelector('#tab');
var $autoWin = d.querySelector('#auto-win');

// other global variables
var clock = 0;
var time = 0;
var moves = 0;
var score = 0;
var bonus = 0;
var lastEventTime = 0;
var unplayedTabCards = [];

//scoreboard variables
var scoreB = 0;

/*function updateScore() {
	if (rectangR >= canvasW) {
		scoreL++;
	}

	if (rectangL <= 0) {
		scoreR++;
	}
}
*/

function displayScore() {
	fill(color(0,0,0));
	textSize(20);
	text("Score: " + scoreBoard, canvasW/4, 40);
}