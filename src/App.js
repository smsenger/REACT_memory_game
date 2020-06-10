import React, { Component } from 'react';
// import React from 'react';
import MemoryCard from './components/MemoryCard.js'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';  //no dot or slash = node module folder
// import { Container, Row, Col } from 'react-bootstrap';

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({ isFlipped: false, symbol: symbols[i % 8] })
  }
  shuffle(deck);
  console.log(deck)
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      won: false
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0]
      let card2Index = newPickedCards[1]
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {
          { this.unflipCards(card1Index, card2Index) }
        }, 1000
        )
      }
      newPickedCards = [];
    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards })
    this.gameOver(newDeck)
  }

  unflipCards(card1Index, card2Index) {
    let card1 = { ...this.state.deck[card1Index] }
    let card2 = { ...this.state.deck[card2Index] }
    card1.isFlipped = false;
    card2.isFlipped = false;
    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      } else if (card2Index === index) {
        return card2;
      } return card;
    });

    this.setState({ deck: newDeck });
  };

  gameOver = (deck) => {
    if (deck.filter((card) => {
      return !card.isFlipped
    }).length === 0) {
      this.setState({ won: true })
      console.log("you won!")
    } 
  };

  handleClick = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: [],
      won: false
    });
  };

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />
    });
    return (
      <div className="App">
        <div className="App-header">
          <h1>Memory Game</h1>
          <h2>Match Cards to Win</h2>
        </div>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
        <div>
          { this.state.won && <button onClick={ this.handleClick }>Play Again!!!!</button>}
        </div>
      </div>
    );
  }
}

export default App;
