// check if is legit inter or not
var checkBet = function (bet) {
  if (
    // check if it is a number, if it is a valid integer, if is within range
    isNaN(bet) == true ||
    Number.isInteger(+bet) == false ||
    !(bet >= 1 && bet <= credit)
  ) {
    return true;
  }
};

// make deck
var makeDeck = function () {
  // initialise empty deck array
  var cardDeck = [];
  // initialise 4 suits
  var suits = ["♠", "♥", "♣", "♦"];

  // loop over suits array
  for (var i = 0; i < suits.length; i += 1) {
    // store current suit in a variable
    var currentSuit = suits[i];

    // loop from 1 to 13 to create all cards for given suit
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardRank = rankCounter;

      // Special cases
      if (cardName == 1) {
        cardName = "A";
      } else if (cardName == 11) {
        cardName = "J";
        cardRank = 10;
      } else if (cardName == 12) {
        cardName = "Q";
        cardRank = 10;
      } else if (cardName == 13) {
        cardName = "K";
        cardRank = 10;
      }

      // create new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: cardRank
      };

      // add new card to deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// shuffle deck
// get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
// shuffle the elements in the deck
var shuffleCards = function (cardDeck) {
  // will loop base on number of cards
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // select random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // select card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // select card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // increase currentIndex
    currentIndex = currentIndex + 1;
  }
  // return shuffled deck
  return cardDeck;
};

// total value
var getTotalValue = function (cards) {
  var value = 0;
  var numberOfAce = 0;
  // check for aces in deck
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].rank == 1) {
      numberOfAce += 1;
    }
  }
  // check for total value of current hand
  for (var j = 0; j < cards.length; j++) {
    value += cards[j].rank;
  }
  // will add 10 to value if it will not cause hand to be over 21 and at least one ace is present
  if (numberOfAce > 0 && value <= 11) {
    value += 10;
  }
  return value;
};

// function to be called to display credit and bet in separate output box at all time
var displayCredit = function () {
  var creditMsg = "Credit:";
  var betMsg = "Bet:";
  return `${creditMsg} <br> ${credit} <br> ${betMsg} <br> ${currentBet}`;
};

// used to display player current hand in separate output box at all time
var returnPlayerHand = function () {
  let playerMsg = `Player Value: ${playerValue} <br> <br>`;
  // will display all cards in hand
  for (var i = 0; i < playerHand.length; i += 1) {
    playerMsg += `${playerHand[i].suit}${playerHand[i].name} `;
  }
  return playerMsg;
};

// used to display dealer current hand in separate output box
var returnDealerHand = function () {
  let dealerMsg = "";
  // hide second card while player is still playing and there is no blackjack
  if (dealerHand.length == 2 && blackjack == "no" && show == "no") {
    dealerMsg = `Dealer Value: ${dealerHand[0].rank} <br> <br> ${dealerHand[0].suit}${dealerHand[0].name} ◻️`;
    return dealerMsg;
  }
  // will display all cards in hand
  dealerMsg = `Dealer Value: ${dealerValue} <br> <br>`;
  for (var j = 0; j < dealerHand.length; j += 1) {
    dealerMsg += `${dealerHand[j].suit}${dealerHand[j].name} `;
  }
  return dealerMsg;
};

// 2 options after current round, either gameover or go next round
var getNextStep = function () {
  if (credit <= 0) {
    // go to gameover
    mode = "gameOver";
    // disable all buttons except restart
    document.querySelector("#bet-button").style.opacity = 0.15;
    document.querySelector("#bet-button").disabled = true;
    document.querySelector("#input-field").style.opacity = 0.15;
    document.querySelector("#input-field").disabled = true;
    document.querySelector("#hit-button").style.opacity = 0.15;
    document.querySelector("#hit-button").disabled = true;
    document.querySelector("#stand-button").style.opacity = 0.15;
    document.querySelector("#stand-button").disabled = true;
    return `<br> <br> Game over. Game will reset. <br> Press Restart to exit.`;
  } else {
    return `<br> <br> Please enter bet for next round.`;
  }
};

// to setup after betting is complete and check for any blackjack straightaway
var setup = function (input) {
  // current mode: placebet
  // will assume bet is not valid at the start
  betValidity = "nogood";
  playerHand = [];
  dealerHand = [];
  currentBet = 0;
  playerValue = "";
  dealerValue = "";
  // will keep prompting player to input bet until legit bet is placed
  if (mode == "placeBet") {
    // check bet is legit
    if (checkBet(input) == true) {
      return `Please input an integer from 1 to ${credit}.`;
    }
    // bet is valid to proceed
    betValidity = "good";
    // current bet will become valid input
    currentBet = +input;
    // empty deck, player previous hand and dealer previous hand
    shuffledDeck = [];
    // assume no blackjack before check
    blackjack = "no";
    // would not show until result is ready
    show = "no";
    //makde deck and shuffle deck
    shuffledDeck = shuffleCards(makeDeck());
    // player draw card 1
    playerHand.push(shuffledDeck.pop());
    // player draw card 2
    playerHand.push(shuffledDeck.pop());
    // dealer draw card 1
    dealerHand.push(shuffledDeck.pop());
    // dealer draw card 2
    dealerHand.push(shuffledDeck.pop());
    // get total value for player
    playerValue = getTotalValue(playerHand);
    // get total value for dealer
    dealerValue = getTotalValue(dealerHand);
    // check for any blackjack
    if (playerValue == 21 || dealerValue == 21) {
      // will disable hit and stand buttons while enabling bet button and input as will be proceeding to next round betting already
      document.querySelector("#bet-button").style.opacity = 1;
      document.querySelector("#bet-button").disabled = false;
      document.querySelector("#input-field").style.opacity = 1;
      document.querySelector("#input-field").disabled = false;
      document.querySelector("#hit-button").style.opacity = 0.15;
      document.querySelector("#hit-button").disabled = true;
      document.querySelector("#stand-button").style.opacity = 0.15;
      document.querySelector("#stand-button").disabled = true;
      // there is blackjack
      blackjack = "yes";
      // player blackjack, dealer no blackjack
      if (playerValue > dealerValue) {
        // blackjack win payout 1,5 times to player, add if win
        credit += Math.ceil(currentBet * 1.5);
        return (
          `You got a BLACKJACK. <br> You win ${Math.ceil(
            currentBet * 1.5
          )} credits.` + getNextStep()
        );
      }
      // player no blackjack, dealer blackjack
      else if (playerValue < dealerValue) {
        // deduct if lose
        credit -= currentBet;
        return (
          `Dealer got a BLACKJACK. <br> You lose ${currentBet} credits.` +
          getNextStep()
        );
      }
      // both blackjack, tie nothing change
      else if (playerValue == dealerValue) {
        return (
          `You and dealer both got BLACKJACK. <br> It is a tie.` + getNextStep()
        );
      }
    }
    // change mode to hitstand if no blackjack
    mode = "hitStand";
    // ask player to hit or stand
    return `You have a ${playerValue}. Would you hit or stand?`;
  }
};

var result = function () {
  // current mode: result
  if (mode == "result") {
    // dealer will keep hitting until >= 17 (loop)
    dealerValue = getTotalValue(dealerHand);
    while (dealerValue < 17) {
      dealerHand.push(shuffledDeck.pop());
      // check new dealer value
      dealerValue = getTotalValue(dealerHand);
    }
    // change mode to place next bet for next round
    mode = "placeBet";
    // result - win/lose/tie and update credit
    var message = `You got a ${playerValue}. Dealer got a ${dealerValue}. <br>`;
    if (playerValue <= 21) {
      if (dealerValue <= 21 && playerValue > dealerValue) {
        credit += currentBet;
        return message + `You win ${currentBet} credits.` + getNextStep();
      } else if (dealerValue <= 21 && playerValue < dealerValue) {
        credit -= currentBet;
        return message + `You lose ${currentBet} credits.` + getNextStep();
      } else if (dealerValue <= 21 && playerValue == dealerValue) {
        return message + `It is a tie.` + getNextStep();
      } else if (dealerValue > 21) {
        credit += currentBet;
        return message + `You win ${currentBet} credits.` + getNextStep();
      }
    } else {
      if (dealerValue <= 21) {
        credit -= currentBet;
        return message + `You lose ${currentBet} credits.` + getNextStep();
      } else if (dealerValue > 21) {
        return message + `It is a tie.` + getNextStep();
      }
    }
  }
};

let mode = "placeBet";
let credit = 100;
let currentBet = 0;
let shuffledDeck = [];
let playerHand = [];
let dealerHand = [];
let playerValue = "";
let dealerValue = "";
let blackjack = "no";
let show = "no";
let betValidity = "nogood";

var betButton = document.querySelector("#bet-button");
var inputField = document.querySelector("#input-field");
// allow enter to work in addition to pressing bet button
inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    betButton.click();
  }
});
// will proceed when bet is clicked
betButton.addEventListener("click", function () {
  // get input into variable
  var input = document.querySelector("#input-field");
  // run setup to check for valid bet, blackjack or move to hitstand
  var result = setup(input.value);
  // Display result in output element
  var output = document.querySelector("#instructions");
  output.innerHTML = result;

  // Reset input value
  input.value = "";

  // display credit and current bet
  var output1 = document.querySelector("#credit");
  output1.innerHTML = displayCredit();

  // show player hand
  var output2 = document.querySelector("#playerhand");
  output2.innerHTML = returnPlayerHand();

  // show dealer hand
  var output3 = document.querySelector("#dealerhand");
  output3.innerHTML = returnDealerHand();

  // will disable input and bet button as player proceed to hit/stand, will enabkle hit and stand to do so
  if (betValidity == "good" && blackjack == "no") {
    document.querySelector("#bet-button").style.opacity = 0.15;
    document.querySelector("#bet-button").disabled = true;
    document.querySelector("#input-field").style.opacity = 0.15;
    document.querySelector("#input-field").disabled = true;
    document.querySelector("#hit-button").style.opacity = 1;
    document.querySelector("#hit-button").disabled = false;
    document.querySelector("#stand-button").style.opacity = 1;
    document.querySelector("#stand-button").disabled = false;
  }
});

// when hit button is hit
var hitButton = document.querySelector("#hit-button");
hitButton.addEventListener("click", function () {
  var output = document.querySelector("#instructions");

  if (mode == "hitStand") {
    // hit next card and add to hand
    playerHand.push(shuffledDeck.pop());
    // show total value for player
    playerValue = getTotalValue(playerHand);
    // check if value is more than 21
    if (playerValue > 21) {
      // will show dealer hidden card
      show = "yes";
      // proceed to result
      mode = "result";
      // will move to result and required to place bet for next round, enabling bet and input, disabling hit and stand
      document.querySelector("#bet-button").style.opacity = 1;
      document.querySelector("#bet-button").disabled = false;
      document.querySelector("#input-field").style.opacity = 1;
      document.querySelector("#input-field").disabled = false;
      document.querySelector("#hit-button").style.opacity = 0.15;
      document.querySelector("#hit-button").disabled = true;
      document.querySelector("#stand-button").style.opacity = 0.15;
      document.querySelector("#stand-button").disabled = true;
      // display result since player is already over 21
      output.innerHTML = result();
    } else {
      // continue if player value <21
      output.innerHTML = `You have a ${playerValue}. Would you hit or stand?`;
    }
  }

  // display credit and current bet
  var output1 = document.querySelector("#credit");
  output1.innerHTML = displayCredit();

  // display plauyer hand
  var output2 = document.querySelector("#playerhand");
  output2.innerHTML = returnPlayerHand();

  // display dealer hand
  var output3 = document.querySelector("#dealerhand");
  output3.innerHTML = returnDealerHand();
});

// when stand button is clicked
var standButton = document.querySelector("#stand-button");
standButton.addEventListener("click", function () {
  var output = document.querySelector("#instructions");
  // proceed to result
  mode = "result";
  // show dealer hidden second card
  show = "yes";
  // display result
  output.innerHTML = result();
  // will move to result and required to place bet for next round, enabling bet and input, disabling hit and stand
  if (mode != "gameOver") {
    document.querySelector("#bet-button").style.opacity = 1;
    document.querySelector("#bet-button").disabled = false;
    document.querySelector("#input-field").style.opacity = 1;
    document.querySelector("#input-field").disabled = false;
    document.querySelector("#hit-button").style.opacity = 0.15;
    document.querySelector("#hit-button").disabled = true;
    document.querySelector("#stand-button").style.opacity = 0.15;
    document.querySelector("#stand-button").disabled = true;
  }

  // display credit and current bet
  var output1 = document.querySelector("#credit");
  output1.innerHTML = displayCredit();

  // display player hand
  var output2 = document.querySelector("#playerhand");
  output2.innerHTML = returnPlayerHand();

  // display dealer hand
  var output3 = document.querySelector("#dealerhand");
  output3.innerHTML = returnDealerHand();
});

// when restart button is clicked, game is resetted
var restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", function () {
  //go back to placing bet
  mode = "placeBet";
  // restore credit
  credit = 100;
  currentBet = 0;
  playerValue = "";
  dealerValue = "";
  // empty dealer and player hand
  playerHand = [];
  dealerHand = [];
  blackjack = "no";
  show = "no";
  betValidity = "nogood";
  // placing bet for next round, enabling bet and input, disabling hit and stand
  document.querySelector("#bet-button").style.opacity = 1;
  document.querySelector("#bet-button").disabled = false;
  document.querySelector("#input-field").style.opacity = 1;
  document.querySelector("#input-field").disabled = false;
  document.querySelector("#hit-button").style.opacity = 0.15;
  document.querySelector("#hit-button").disabled = true;
  document.querySelector("#stand-button").style.opacity = 0.15;
  document.querySelector("#stand-button").disabled = true;

  // reset instructions output
  var output = document.querySelector("#instructions");
  output.innerHTML = `Hello there. Nice to meet you. <br> 100 credits has been credited to you. <br> Have fun and may luck be in your favour. <br> <br> Please enter your first bet.`;

  // display credit and current bet
  var output1 = document.querySelector("#credit");
  output1.innerHTML = displayCredit();

  // display player hand
  var output2 = document.querySelector("#playerhand");
  output2.innerHTML = returnPlayerHand();

  // display dealer hand
  var output3 = document.querySelector("#dealerhand");
  output3.innerHTML = returnDealerHand();
});

// backup code (ver 1)
// var main = function (input) {
//   if (mode == "gameOver" || input == "rs") {
//     mode = "placeBet";
//     credit = 100;
//     currentBet = 0;
//     playerValue = "";
//     dealerValue = "";
//     playerHand = [];
//     dealerHand = [];
//     blackjack = "no";
//     show = "no";
//     return (
//       `Hello there. Nice to meet you.` +
//       `<br>` +
//       `100 credits has been credited into your account.` +
//       `<br>` +
//       `Have fun and may luck be in your favour.` +
//       `<br>` +
//       `<br>` +
//       `Please enter your first bet.`
//     );
//   }

//   // current mode: placebet
//   if (mode == "placeBet") {
//     // check bet is legit
//     if (checkBet(input) == true) {
//       return `Please input an integer from 1 to ${credit}.`;
//     }
//     // change mode to drawhand
//     currentBet = +input;
//     // make and shuffle deck
//     shuffledDeck = [];
//     playerHand = [];
//     dealerHand = [];
//     blackjack = "no";
//     show = "no";
//     shuffledDeck = shuffleCards(makeDeck());
//     // player draw card 1
//     playerHand.push(shuffledDeck.pop());
//     // player draw card 2
//     playerHand.push(shuffledDeck.pop());
//     // dealer draw card 1
//     dealerHand.push(shuffledDeck.pop());
//     // dealer draw card 2
//     dealerHand.push(shuffledDeck.pop());
//     // get total value for player
//     playerValue = getTotalValue(playerHand);
//     // get total value for dealer
//     dealerValue = getTotalValue(dealerHand);
//     // check for player/dealer blackjack
//     if (playerValue == 21 || dealerValue == 21) {
//       blackjack = "yes";
//       // player blackjack, dealer no blackjack
//       if (playerValue > dealerValue) {
//         credit += Math.ceil(currentBet * 1.5);
//         return (
//           `You got a BLACKJACK.` +
//           `<br>` +
//           `You win ${Math.ceil(currentBet * 1.5)} credits.` +
//           getNextStep()
//         );
//       }
//       // player no blackjack, dealer blackjack
//       else if (playerValue < dealerValue) {
//         credit -= currentBet;
//         return (
//           `Dealer got a BLACKJACK.` +
//           `<br>` +
//           `You lose ${currentBet} credits.` +
//           getNextStep()
//         );
//       }
//       // both blackjack
//       else if (playerValue == dealerValue) {
//         return (
//           `You and dealer both got BLACKJACK.` +
//           `<br>` +
//           `It is a tie.` +
//           getNextStep()
//         );
//       }
//     }
//     // change mode to hit if no blackjack
//     mode = "hitStand";
//     return `You have a ${playerValue}. Would you hit or stand?`;
//   }

//   // current mode: hit
//   if (mode == "hitStand") {
//     if (input == "s") {
//       mode = "result";
//       show = "yes";
//     }
//     if (input == "h") {
//       // hit next card
//       playerHand.push(shuffledDeck.pop());
//       // show total value for player
//       playerValue = getTotalValue(playerHand);
//       if (playerValue > 21) {
//         show = "yes";
//         mode = "result";
//       } else {
//         return `You have a ${playerValue}. Would you hit or stand?`;
//       }
//     }
//   }

//   // current mode: result
//   if (mode == "result") {
//     // hit if < 17 (loop)
//     dealerValue = getTotalValue(dealerHand);
//     while (dealerValue < 17) {
//       dealerHand.push(shuffledDeck.pop());
//       dealerValue = getTotalValue(dealerHand);
//     }
//     // change mode to place next bet
//     mode = "placeBet";
//     // result - win/lose/tie and update credit
//     var message =
//       `You got a ${playerValue}. Dealer got a ${dealerValue}.` + `<br>`;
//     if (playerValue <= 21) {
//       if (dealerValue <= 21 && playerValue > dealerValue) {
//         credit += currentBet;
//         return message + `You win ${currentBet} credits.` + getNextStep();
//       } else if (dealerValue <= 21 && playerValue < dealerValue) {
//         credit -= currentBet;
//         return message + `You lose ${currentBet} credits.` + getNextStep();
//       } else if (dealerValue <= 21 && playerValue == dealerValue) {
//         return message + `It is a tie.` + getNextStep();
//       } else if (dealerValue > 21) {
//         credit += currentBet;
//         return message + `You win ${currentBet} credits.` + getNextStep();
//       }
//     } else {
//       if (dealerValue <= 21) {
//         credit -= currentBet;
//         return message + `You lose ${currentBet} credits.` + getNextStep();
//       } else if (dealerValue > 21) {
//         return message + `It is a tie.` + getNextStep();
//       }
//     }
//   }
// };
