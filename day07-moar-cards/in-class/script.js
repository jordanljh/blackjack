// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var deck = makeDeck();
  var shuffleddeck = shuffleCards(deck);
  var card = shuffleddeck.pop();
  return `${card.name} of ${card.suit}`;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var deck = makeDeck();
  var shuffleddeck = shuffleCards(deck);
  var playerCard = shuffleddeck.pop();
  var computerCard = shuffleddeck.pop();
  var message =
    `Player drew a ${playerCard.name} of ${playerCard.suit}, Computer drew a ${computerCard.name} of ${computerCard.suit}.` +
    `<br>`;
  if (playerCard.rank < computerCard.rank) {
    return message + `Player wins.`;
  } else if (playerCard.rank > computerCard.rank) {
    return message + `Computer wins.`;
  } else {
    return message + `It's a tie.`;
  }
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var deck = makeDeck();
  var shuffleddeck = shuffleCards(deck);
  var playerCard = shuffleddeck.pop();
  var computerCard = shuffleddeck.pop();
  var message =
    `Player drew a ${playerCard.name} of ${playerCard.suit}, Computer drew a ${computerCard.name} of ${computerCard.suit}.` +
    `<br>`;
  if (playerCard.rank == 12) {
    playerCard.rank = 0;
  }
  if (computerCard.rank == 12) {
    computerCard.rank = 0;
  }
  if (playerCard.rank < computerCard.rank) {
    return message + `Player wins.`;
  } else if (playerCard.rank > computerCard.rank) {
    return message + `Computer wins.`;
  } else {
    return message + `It's a tie.`;
  }
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  if (!(input >= 1 && input <= 51)) {
    return `Please input between 1 and 51.`;
  }
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var numberOfCards = Math.floor(input);
  var cards = [];
  for (var i = 0; i < numberOfCards; i += 1) {
    var cardDrawn = shuffledDeck.pop();
    cards.push(cardDrawn);
  }
  var message = `Cards Drawn:` + `<br>`;
  for (var i = 0; i < numberOfCards; i++) {
    message = message + `${cards[i].name} of ${cards[i].suit}` + `<br>`;
  }
  var computerCard = shuffledDeck.pop();
  message =
    message +
    `<br>` +
    `Computer drew ${computerCard.name} of ${computerCard.suit}` +
    `<br>` +
    `<br>`;
  var playerCard = cards[0];
  for (var j = 1; j < cards.length; j += 1) {
    if (playerCard.rank < cards[j].rank) {
      playerCard = cards[j];
    }
  }
  if (playerCard.rank > computerCard.rank) {
    return message + `Player wins.`;
  } else if (playerCard.rank < computerCard.rank) {
    return message + `Player loses`;
  } else {
    return message + `It is a tie.`;
  }
};

var generateSuit = function (suit) {
  if (suit == "spades") {
    return "♠️";
  }
  if (suit == "hearts") {
    return "❤️";
  }
  if (suit == "clubs") {
    return "♣️";
  }
  if (suit == "diamonds") {
    return "🔹";
  }
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  if (!(input >= 1 && input <= 51)) {
    return `Please input between 1 and 51.`;
  }
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var numberOfCards = Math.floor(input);
  var cards = [];
  for (var i = 0; i < numberOfCards; i += 1) {
    var cardDrawn = shuffledDeck.pop();
    cards.push(cardDrawn);
  }
  var message = `Cards Drawn:` + `<br>`;
  for (var i = 0; i < numberOfCards; i++) {
    message =
      message +
      `${cards[i].name} of ${cards[i].suit}` +
      generateSuit(cards[i].suit) +
      `<br>`;
  }
  var computerCard = shuffledDeck.pop();
  message =
    message +
    `<br>` +
    `Computer drew ${computerCard.name} of ${computerCard.suit}` +
    generateSuit(computerCard.suit) +
    `<br>` +
    `<br>`;
  var playerCard = cards[0];
  for (var j = 1; j < cards.length; j += 1) {
    if (playerCard.rank < cards[j].rank) {
      playerCard = cards[j];
    }
  }
  if (playerCard.rank > computerCard.rank) {
    return message + `Player wins.`;
  } else if (playerCard.rank < computerCard.rank) {
    return message + `Player loses`;
  } else {
    return message + `It is a tie.`;
  }
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  if (!(input >= 1 && input <= 51)) {
    return `Please input between 1 and 51.`;
  }
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var numberOfCards = Math.floor(input);
  var wildCard = shuffledDeck.pop();
  var message =
    `Wild card is ${wildCard.name} of ${wildCard.suit}` +
    generateSuit(wildCard.suit) +
    `.` +
    `<br>` +
    `<br>`;
  shuffledDeck.push(wildCard);
  shuffledDeck = shuffleCards(shuffledDeck);
  var cards = [];
  for (var i = 0; i < numberOfCards; i += 1) {
    var cardDrawn = shuffledDeck.pop();
    cards.push(cardDrawn);
  }
  message = message + `Cards Drawn:` + `<br>`;
  for (var i = 0; i < numberOfCards; i++) {
    message =
      message +
      `${cards[i].name} of ${cards[i].suit}` +
      generateSuit(cards[i].suit) +
      `<br>`;
  }
  var computerCard = shuffledDeck.pop();
  message =
    message +
    `<br>` +
    `Computer drew ${computerCard.name} of ${computerCard.suit}` +
    generateSuit(computerCard.suit) +
    `<br>` +
    `<br>`;
  var playerCard = cards[0];
  for (var j = 1; j < cards.length; j += 1) {
    if (playerCard.rank < cards[j].rank) {
      playerCard = cards[j];
    }
  }

  for (var j = 0; j < cards.length; j += 1) {
    if (cards[j].name == wildCard.name && cards[j].suit == wildCard.suit) {
      return message + `Player wins with wild card.`;
    }
  }
  if (
    computerCard.name == wildCard.name &&
    computerCard.suit == wildCard.suit
  ) {
    return message + `Computer wins with wild card.`;
  }
  if (playerCard.rank > computerCard.rank) {
    return message + `Player wins.`;
  } else if (playerCard.rank < computerCard.rank) {
    return message + `Player loses`;
  } else {
    return message + `It is a tie.`;
  }
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var points = 100;

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  if (points == 0) {
    points = 100;
    return "Game over. Game will reset." + `<br>` + `Points: ${points}`;
  }
  if (input < 1 || input > points) {
    return `Please input within 1 to ${points}.`;
  }
  var bet = Number(input);
  var deck = makeDeck();
  var shuffleddeck = shuffleCards(deck);
  var playerCard = shuffleddeck.pop();
  var computerCard = shuffleddeck.pop();
  var message =
    `Player drew a ${playerCard.name} of ${playerCard.suit}, Computer drew a ${computerCard.name} of ${computerCard.suit}.` +
    `<br>`;
  if (playerCard.rank < computerCard.rank) {
    points = points + bet;
    return message + `Player wins.` + `<br>` + `Points: ${points}`;
  } else if (playerCard.rank > computerCard.rank) {
    points = points - bet;
    return message + `Computer wins.` + `<br>` + `Points: ${points}`;
  } else {
    return message + `It's a tie.` + `<br>` + `Points: ${points}`;
  }
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
