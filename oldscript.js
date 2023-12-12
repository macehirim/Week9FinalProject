// function playWar (playerScore, computerScore) {
//     while (playerScore || computerScore != 52) {
//         if (deck[0].value > deck[2].value) {
//             console.log(`Player 1 wins with a ${deck[0].faceValue} of ${deck[0].suit}`);
//             playerScore = playerScore + 1;
//             computerScore = computerScore - 1;
//             console.log(playerScore);
//             console.log(computerScore);
//             break;
//         } else if (deck[2].value > deck[0].value) {
//             console.log(`Computer wins with a ${deck[2].faceValue} of ${deck[2].suit}`);
//             computerScore = computerScore + 1;
//             playerScore = playerScore - 1;
//             console.log(playerScore);
//             console.log(computerScore);
//             break;
//         } else {
//             console.log(`It's a tie`);
//             console.log(playerScore);
//             console.log(computerScore);
//             break;
//         }
//     }
// }



// let playerScore = 26;
// let computerScore = 26;

// function playWar (playerCards, computerCards) {
//     alert (`Start Game`);
//     while (playerScore < 52 || computerScore < 52) {
//         deckBuilder();
//         shuffle();
//         if (deck[0].value > deck[2].value) {
//             console.log(`Player 1 wins with a ${deck[0].faceValue} of ${deck[0].suit}`);
//             let playerScore = playerCards + 1;
//             let computerScore = computerCards - 1;
//             console.log(playerScore);
//             console.log(computerScore);
//         } else if (deck[2].value > deck[0].value) {
//             console.log(`Computer wins with a ${deck[2].faceValue} of ${deck[2].suit}`);
//             computerCards = computerCards + 1;
//             playerCards = playerCards - 1;
//             console.log(playerCards);
//             console.log(computerCards);
//         } else {
//             console.log(`It's a tie`);
//             console.log(playerCards);
//             console.log(computerCards);
//         }
//     }     if (playerScore = 52) {
//         console.log(`Player 1 Wins!`);
//     } else if (computerScore = 52) {
//         console.log(`Computer Wins`);
//     } return playerScore, computerScore
// }
    
// playWar(playerScore, computerScore);














    //     shuffle () {
    //         for (let i = this.cards.length - 1; i > 0; i--) {
    //             const newIndex = Math.floor(Math.random() * (i + 1))
    //             const oldValue = this.cards[newIndex]
    //             this.cards[newIndex] = this.cards[i]
    //             this.cards[i] = oldValue
    //         }
    //     }
    
// let card = {
//     suit: 'Hearts',
//     faceValue: '6',
//     value: 4,
// }
// console.log(card)
// console.log(card.suit)
// console.log(card.faceValue)
// console.log(card.value)

// class Deck {
//     constructor(cards = newDeck()) {
//         this.cards = cards
//     }
//     shuffle () {
//         for (let i = this.cards.length - 1; i > 0; i--) {
//             const newIndex = Math.floor(Math.random() * (i + 1))
//             const oldValue = this.cards[newIndex]
//             this.cards[newIndex] = this.cards[i]
//             this.cards[i] = oldValue
//         }
//     }
// }

// class Card {
//     constructor(suit, value) {
//         this.suit = suit
//         this.value = value
//     }
// }

// function newDeck() {
//     return suits.flatMap(suit => {
//         return values.map(value => {
//             return new Card(suit, value)
//         })
//     })
// }

// // startGame() {
// //     const deck = new Deck()
// //     deck.shuffle()

// //     const deckMidpoint = Math.ceil(deck.this.cards.length / 2)
// //     playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
// //     computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

// //     console.log(playerDeck)
// //     console.log(computerDeck)
// // }