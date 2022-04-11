var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var message = "";
  for (var i = 0; i < input; i += 1) {
    message += "😊";
  }
  return message;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var message = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      message += "😂";
    }
    message += "<br>";
  }
  return message;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var message = "";

  for (var i = 1; i <= input; i += 1) {
    for (var j = 0; j < i; j += 1) {
      message += "😁";
    }
    message += "<br>";
  }

  return message;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var message = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      if (i == 0 || j == 0 || i == input - 1 || j == input - 1) {
        message += "😂";
      } else {
        message += "❤️";
      }
    }
    message += "<br>";
  }
  return message;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  if (input % 2 != 1) {
    return "Please key in a odd number.";
  }
  var key = Math.ceil(input / 2) - 1;
  var message = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      if (i == 0 || j == 0 || i == input - 1 || j == input - 1) {
        message += "😂";
      } else if (i == key && j == key) {
        message += "😁";
      } else {
        message += "❤️";
      }
    }
    message += "<br>";
  }
  return message;
};

var rollDice = function () {
  let num = Math.random() * 6;
  num = Math.ceil(num);
  return num;
};

var gameMode = "mode1";
var noOfDice = 0;

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.

  if (gameMode == "mode1") {
    noOfDice = input;
    gameMode = "mode2";
    return "Please enter your guess";
  }
  if (
    !(
      input == 1 ||
      input == 2 ||
      input == 3 ||
      input == 4 ||
      input == 5 ||
      input == 6
    )
  ) {
    return "Please input 1 to 6 only.";
  }
  var userGuess = input;
  var message =
    `Number of dice: ${noOfDice}. Guess: ${userGuess}.` + "<br>" + "Computer: ";

  var win = false;
  for (var i = 0; i < noOfDice; i += 1) {
    var computer = rollDice();
    message += `${computer}`;
    if (!(i == noOfDice - 1)) {
      message += ", ";
    }
    if (computer == userGuess) {
      win = true;
    }
  }
  message += "<br>";
  gameMode = "mode1";
  if (win == true) {
    return (message += "You Win.");
  } else {
    return (message += "You lose.");
  }
};

var gameMode1 = "mode1";
var noOfDice1 = 0;
var winCount = 0;

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  if (gameMode1 == "mode1") {
    noOfDice1 = input;
    gameMode1 = "mode2";
    return "Please enter your guess.";
  }
  if (
    !(
      input == 1 ||
      input == 2 ||
      input == 3 ||
      input == 4 ||
      input == 5 ||
      input == 6
    )
  ) {
    return "Please input 1 to 6 only.";
  }
  var userGuess = input;
  var message = `Number of dice: ${noOfDice1}. Guess: ${userGuess}.` + "<br>";

  // check if any of the dice win
  for (var i = 1; i <= 4; i += 1) {
    message += `Round ${i}: `;
    var win = false;
    for (var j = 0; j < noOfDice1; j += 1) {
      var computer = rollDice();
      message += `${computer}`;
      if (!(j == noOfDice1 - 1)) {
        message += ", ";
      }
      if (computer == userGuess) {
        win = true;
      }
    }
    // 1 win = win
    if (win == true) {
      message += ". You Win.";
      winCount++;
    } else {
      message += ". You lose.";
    }
    message += "<br>";
  }
  // display result
  return message + `Win count: ${winCount}/4`;
};

var gameMode2 = "mode1";
var noOfDice2 = 0;
var winCountP1 = 0;
var winCountP2 = 0;

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  if (gameMode2 == "mode1") {
    noOfDice2 = input;
    gameMode2 = "mode2";
    return "Player 1 please input your guess.";
  }
  if (
    !(
      input == 1 ||
      input == 2 ||
      input == 3 ||
      input == 4 ||
      input == 5 ||
      input == 6
    )
  ) {
    return "Please input 1 to 6 only.";
  }
  var userGuess = input;
  var message = "";
  message = `Number of dice: ${noOfDice2}. Guess: ${userGuess}.` + "<br>";
  // 4 rounds
  for (var i = 1; i <= 4; i += 1) {
    message += `Round ${i}: `;
    var win = false;
    // check if any of the dice win
    for (var j = 0; j < noOfDice2; j += 1) {
      var computer = rollDice();
      message += `${computer}`;
      if (!(j == noOfDice2 - 1)) {
        message += ", ";
      }
      if (computer == userGuess) {
        win = true;
      }
    }
    // 1 win = win
    if (win == true) {
      message += ". You Win.";
      if (gameMode2 == "mode2") {
        winCountP1++;
      } else {
        winCountP2++;
      }
    } else {
      message += ". You lose.";
    }
    message += "<br>";
  }
  // change mode to next player
  if (gameMode2 == "mode2") {
    gameMode2 = "mode3";
  } else {
    gameMode2 = "mode2";
  }
  // show result and next player to roll
  if (gameMode2 == "mode2") {
    return (
      message +
      `Player 1: ${winCountP1}` +
      "<br>" +
      `Player 2: ${winCountP2}` +
      "<br>" +
      "Player 1 please input your guess."
    );
  } else {
    return (
      message +
      `Player 1: ${winCountP1}` +
      "<br>" +
      `Player 2: ${winCountP2}` +
      "<br>" +
      "Player 2 please input your guess."
    );
  }
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
