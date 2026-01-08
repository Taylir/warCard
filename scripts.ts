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
    console.log(selectedIndex)
    shuffledDeck.push(deckCopy[selectedIndex]!);
    deckCopy.splice(selectedIndex, 1);
  }
  return shuffledDeck;
}

const shuffledDeck = shuffleNewDeck(makeNewDeck());

console.log(shuffledDeck, shuffledDeck.length);











