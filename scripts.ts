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
  if (card1 === undefined || card2 == undefined) {
    console.log(checkWinner());
  }
  const card1Value: number = baseDeck.deckValues.indexOf(card1[0] ?? "2");
  const card2Vaule: number = baseDeck.deckValues.indexOf(card2[0] ?? "2");
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

function playCard(warCards: string[] = []): void {
  const winner = compareCards(player1[0]!, player2[0]!);
  console.log(winner)
  if (winner == 1) {
    const givenCard: string = player2[0]!;
    player1.push(givenCard);
    player1.push(player1[0]!);
    if (warCards.length > 0) {
      for (const card of warCards) {
        player1.push(card);
      }
      player1.push(player1[0]!)
      player1.splice(0, 1)
    };
  }
  if (winner == -1) {
    const givenCard = player1[0]!;
    player2.push(givenCard);
    player2.push(player2[0]!);
    if (warCards.length > 0) {
      for (const card of warCards) {
        player2.push(card);
      }
      player2.push(player1[0]!)
      player2.splice(0, 1)
    }
  }
  if (winner != 0) {
    player1.splice(0, 1);
    player2.splice(0, 1);
  }
  if (winner == 0) {
    const warArray: string[] = [...player1.splice(0, 4), ...player2.splice(0, 4)];
    console.log("warArray:" + warArray, "\n warCards:" + warCards);
    playCard([...warCards, ...warArray]);
  }

}

function checkWinner(): string {
  if (player1.length <= 0) {
    return "Player 1 loses this game! WINNER: PLAYER 2"
  } else {
    return "Player 2 loses this game! WINNER: PLAYER 1"
  }
}


function playRobotGame(): void {
  const shuffledDeck = shuffleNewDeck(makeNewDeck());
  dealInitalCards(shuffledDeck);
  while (player1.length > 0 || player2.length > 0) {
    playCard();
  }
  console.log(checkWinner());

}

playRobotGame();




