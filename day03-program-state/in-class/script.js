var roll3Number = function () {
  let num = Math.random() * 3;
  num = Math.ceil(num);
  return num;
};

var correctCount = 0;
var gameState = 1;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  let word1 = "banana";
  let word2 = "orange";
  let word3 = "apple";
  let secretWord;
  if (!(input == word1 || input == word2 || input == word3)) {
    return "Please choose between apple, banana or apple only.";
  }

  // computer choose word
  let numRoll = roll3Number();
  if (numRoll == "1") {
    secretWord = word1;
  } else if (numRoll == "2") {
    secretWord = word2;
  } else {
    secretWord = word3;
  }
  if (secretWord == input) {
    correctCount++;
  }

  // display guess and secret word
  let message = `You have guessed ${input}. Secret word is ${secretWord}. You have gotten ${correctCount}/2 correct. `;

  // win if have 2 correct guesses
  if (correctCount == 2) {
    correctCount = 0;
    gameState = 1;
    return message + "You win!. Game will reset.";
  }

  // display according to gamestate
  if (gameState == 1) {
    gameState++;
    return message + "2 tries left.";
  } else if (gameState == 2) {
    gameState++;
    return message + "1 tries left.";
  } else {
    correctCount = 0;
    gameState = 1;
    return message + "Game over. Game will reset.";
  }
};

let correctCount1 = 0;

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  let word1 = "banana";
  let word2 = "orange";
  let word3 = "apple";
  let secretWord;
  if (!(input == word1 || input == word2 || input == word3)) {
    return "Please choose between apple, banana or apple only.";
  }

  // computer choose word
  let numRoll = roll3Number();
  if (numRoll == "1") {
    secretWord = word1;
  } else if (numRoll == "2") {
    secretWord = word2;
  } else {
    secretWord = word3;
  }
  if (secretWord == input) {
    correctCount1++;
  }

  // display guess and secret word
  let message = `You have guessed ${input}. Secret word is ${secretWord}. You have gotten ${correctCount1}/2 correct. `;

  // wrong guess
  if (secretWord != input) {
    correctCount1 = 0;
    return message + "You lose. Game will reset.";
  }

  // if have 1 correct streak
  if (correctCount1 == 1) {
    return message + "Guess the next one correctly too to win.";
  }

  // win if have 2 correct streak
  if (correctCount1 == 2) {
    correctCount1 = 0;
    return message + "You win!. Game will reset.";
  }
};

var roll2to4 = function () {
  let num = Math.random() * 3;
  num = Math.ceil(num) + 1;
  return num;
};

let correctCount2 = 0;
let streakRequired = roll2to4();

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  let word1 = "banana";
  let word2 = "orange";
  let word3 = "apple";
  let secretWord;
  if (!(input == word1 || input == word2 || input == word3)) {
    return "Please choose between apple, banana or apple only.";
  }

  // computer choose word
  let numRoll = roll3Number();
  if (numRoll == "1") {
    secretWord = word1;
  } else if (numRoll == "2") {
    secretWord = word2;
  } else {
    secretWord = word3;
  }

  // display streak, guess and secret word
  let message = `Streak required: ${streakRequired}. You have guessed ${input}. Secret word is ${secretWord}. `;

  // correct guess and streak
  if (secretWord == input) {
    correctCount2++;
  }
  // wronng guess and reset
  if (secretWord != input) {
    correctCount2 = 0;
  }

  // update message with how many correct so far
  message =
    message + `You have gotten ${correctCount2}/${streakRequired} correct.`;

  // win game
  if (correctCount2 == streakRequired) {
    correctCount2 = 0;
    streakRequired = roll2to4();
    return message + " You win. Game will reset.";
  } else {
    return message;
  }
};

var rollDice = function () {
  let num = Math.random() * 6;
  num = Math.ceil(num);
  return num;
};

let withinNumber = roll3Number();

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  let numRoll = rollDice();
  if (
    !(
      input == "1" ||
      input == "2" ||
      input == "3" ||
      input == "4" ||
      input == "5" ||
      input == "6"
    )
  ) {
    return "Please input 1 to 6 only.";
  }
  let message = `Within number: ${withinNumber}. You have guessed a ${input}. Computer rolled a ${numRoll}.`;

  // check if within range
  if (input >= numRoll - withinNumber && input <= numRoll + withinNumber) {
    withinNumber = roll3Number();
    return message + "You win.";
  }
  return message + "You lose.";
};

let withinNumber1 = roll3Number();

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  let numRoll1 = rollDice();
  let numRoll2 = rollDice();
  if (
    !(
      input == "1" ||
      input == "2" ||
      input == "3" ||
      input == "4" ||
      input == "5" ||
      input == "6"
    )
  ) {
    return "Please input 1 to 6 only.";
  }

  // check if within range of either dice
  let message = `Within number: ${withinNumber1}. You have guessed a ${input}. Computer rolled a ${numRoll1} and a ${numRoll2}.`;
  if (
    (input >= numRoll1 - withinNumber && input <= numRoll1 + withinNumber) ||
    (input >= numRoll2 - withinNumber && input <= numRoll2 + withinNumber)
  ) {
    withinNumber1 = roll3Number();
    return message + "You win.";
  }
  return message + "You lose.";
};

var roll10000Number = function () {
  let num = Math.random() * 10000;
  num = Math.floor(num);
  return num;
};

let withinNumber2 = roll3Number();
let winCount = 0;
let gameState1 = 0;

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  // only activate every 2 win at game state 1
  if (gameState1 == 1) {
    // reset game state
    gameState1 = 0;

    // play 4D
    let numRoll = roll10000Number();
    let msg = `Player's guess:${input}. Computer roll: ${numRoll}. `;
    if (input == numRoll) {
      return msg + "You win. Returning to dice game.";
    }
    return msg + "You lose. Returning to dice game.";
  }
  let numRoll1 = rollDice();
  let numRoll2 = rollDice();
  if (
    !(
      input == "1" ||
      input == "2" ||
      input == "3" ||
      input == "4" ||
      input == "5" ||
      input == "6"
    )
  ) {
    return "Please input 1 to 6 only.";
  }
  let message = `Within number: ${withinNumber1}. You have guessed a ${input}. Computer rolled a ${numRoll1} and a ${numRoll2}. `;
  if (
    (input >= numRoll1 - withinNumber && input <= numRoll1 + withinNumber) ||
    (input >= numRoll2 - withinNumber && input <= numRoll2 + withinNumber)
  ) {
    withinNumber1 = roll3Number();
    winCount++;
    message = message + `You win. Win count = ${winCount}.`;
  } else {
    message = message + `You lose. Win count = ${winCount}.`;
  }

  // check for 2 wins to enter bonus stage
  if (winCount % 2 == 0 && winCount > 1) {
    gameState1 = 1;
    winCount = 0;
    message =
      message +
      " Bonus round! Please input a 4-digit number and see if it matches the computer roll.";
  }
  return message;
};

let correctCount3 = 0;
let gameState2 = 0;
let previousRoll = 0;

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  let word1 = "banana";
  let word2 = "orange";
  let word3 = "apple";
  let secretWord;
  if (!(input == word1 || input == word2 || input == word3)) {
    return "Please choose between apple, banana or apple only.";
  }

  // computer choose word
  let numRoll = roll3Number();

  // when 1 streak is active, would not repeat previous number
  if (gameState2 == 1) {
    gameState2 = 0;
    while (numRoll == previousRoll) {
      roll3Number();
    }
  }

  // check number with word
  if (numRoll == "1") {
    secretWord = word1;
  } else if (numRoll == "2") {
    secretWord = word2;
  } else {
    secretWord = word3;
  }
  if (secretWord == input) {
    correctCount3++;
  }

  previousRoll = numRoll;
  // display guess and secret word
  let message = `You have guessed ${input}. Secret word is ${secretWord}. You have gotten ${correctCount3}/2 correct. `;

  // wrong guess
  if (secretWord != input) {
    correctCount3 = 0;
    return message + "You lose. Game will reset.";
  }

  // if have 1 correct streak, will also activate game state 1
  if (correctCount3 == 1) {
    gameState2 = 1;
    return message + "Guess the next one correctly too to win.";
  }

  // win if have 2 correct streak
  if (correctCount3 == 2) {
    correctCount3 = 0;
    return message + "You win!. Game will reset.";
  }
};
