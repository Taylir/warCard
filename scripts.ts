const baseDeck = {
  deckValues: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  deckSuits: ["H", "S", "C", "D"],
}

const player1: string[] = [];
const player2: string[] = [];

function makeNewDeck(): string[] {
  const newDeck: string[] = [];
  for (const num of baseDeck.deckValues) {
    for (const suit of baseDeck.deckSuits) {
      newDeck.push(`${num}${suit}`)
    }
  }
  return newDeck;
}


function shuffleNewDeck(deck: string[]): string[] {
  let deckCopy: string[] = deck;
  const shuffledDeck: string[] = [];

  for (let i = 0; i < 52; i++) {
    const selectedIndex: number = Math.floor(Math.random() * deckCopy.length);
    shuffledDeck.push(deckCopy[selectedIndex]!);
    deckCopy.splice(selectedIndex, 1);
  }
  return shuffledDeck;
}

function compareCards(card1: string, card2: string): number {
  const card1Value: number = baseDeck.deckValues.indexOf(card1[0]!);
  const card2Vaule: number = baseDeck.deckValues.indexOf(card2[0]!);
  if (card1Value > card2Vaule) {
    return 1;
  } else if (card1Value < card2Vaule) {
    return -1;
  } else {
    return 0;
  }
}

function dealInitalCards(deck: string[]): void {
  for (let i = 0; i < deck.length; i++) {
    if (i % 2 == 0) {
      player1.push(deck[i]!);
    } else {
      player2.push(deck[i]!);
    }
  }
}

const shuffledDeck = shuffleNewDeck(makeNewDeck());
dealInitalCards(shuffledDeck);



