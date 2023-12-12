// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.

const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const faceValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

let deck = [];

function deckBuilder() {
    for (let i = 0; i < suits.length; i++) {
        for( let x = 0; x < faceValue.length; x++) {
            let card = {
                suit: suits[i],
                faceValue: faceValue[x],
                value: x
            }
            deck.push(card)
        }
    }
}

deckBuilder();

function shuffle () {
        for (let i = 0; i < deck.length; i++) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = deck[newIndex]
            deck[newIndex] = deck[i]
            deck[i] = oldValue
        }
    }

shuffle();
console.log(deck);

let deckMidpoint = deck[Math.round((deck.length - 1) / 2)]

let playerDeck = [];
let computerDeck = [];

function splitDeck () {
    playerDeck = deck.slice(0, 26)
    computerDeck = deck.slice(26, 52)
}

splitDeck();
console.log(playerDeck);
console.log(computerDeck);

let playerScore = 0
let computerScore = 0

function playWar (playerScore, computerScore) {
    for (i = 0; i < playerDeck.length; i++ ) {
        if (playerDeck[i].value > computerDeck[i].value) {
            console.log(`Round ` + (i + 1) + ` - Player 1 wins with ${playerDeck[i].faceValue} of ${playerDeck[i].suit}`);
            playerScore = playerScore + 1;
            console.log(`Player Score is `+ playerScore)
            console.log(`Computer Score is ` + computerScore)
        } else if (playerDeck[i].value < computerDeck[i].value) {
            console.log(`Round ` + (i + 1) + ` - Computer wins with ${computerDeck[i].faceValue} of ${computerDeck[i].suit}`);
            computerScore = computerScore + 1;
            console.log(`Player Score is ` + playerScore)
            console.log(`Computer Score is ` + computerScore)
        } else {
            console.log(`Round ` + (i + 1) + ` - It's a tie`);
            console.log(`Player Score is ` + playerScore);
            console.log(`Computer Score is ` + computerScore);
        }
    } if (playerScore > computerScore) {
        console.log(`Player Wins!!`)
    } else if (playerScore < computerScore) {
        console.log(`Computer Wins :(`)
    } else {
        console.log(`Tie, Play again!`)
    }
}

playWar(playerScore, computerScore);