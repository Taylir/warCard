const baseDeck = {
  deckValues: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  deckSuits: ["H", "S", "C", "D"],
}

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
const shuffledDeck = shuffleNewDeck(makeNewDeck());

function compareCards(card1: string, card2: string): number {
  const card1Value: number = baseDeck.deckValues.indexOf(card1[0]!);
  const card2Vaule: number = baseDeck.deckValues.indexOf(card2[0]!);
  console.log(card1Value, card2Vaule)
  if (card1Value > card2Vaule) {
    return 1;
  } else if (card1Value < card2Vaule) {
    return -1;
  } else {
    return 0;
  }
}

console.log(compareCards("3H", "KH"));












