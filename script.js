//To everyone else - hey! I'm working on building the cards. 
/*
To-Do List
Build Webpage - Morris & Karon /Done
Build Cards - Zac &
Add motion to the cards - Volunteer Here
Keep the cards from escaping the square - Volunteer Here
Finish ScoreBoard - Volunteer Here
*/

var canvasW = 800, canvasH = 800;
let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var rect_ypos = 200, rect_xpos = 100, rectW = 40, rectH = 60;

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
s = table['stock'];
w = table['wastle'];
t = table['tab'];

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

//scoreboard variables
var scoreB = 0;

function setup() {
	createCanvas(1000, 1000);
  rect(rect_ypos, rect_xpos, rectW, rectH);

}

function draw() {
	background(225);
  document.write(Date());
  displayScore();
  fill(color(255, 255, 255));
  rect(mouseX, mouseY, rectW, rectH);
  //updatescore();
}



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
	text("Score: " + scoreB, canvasW/4, 40);
}