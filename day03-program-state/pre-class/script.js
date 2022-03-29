// global scope
var globalVariable = 0;
const y = 0;

// also global scope
var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var x = 0;
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  x++;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  myOutputValue += ` x is ${x}, y is ${y}`;
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// display last roll
var lastRoll = 0;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();
  // print what is rolled on previous and current round
  if (lastRoll == 0) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. `;
  } else {
    myOutputValue = `Your last roll was ${lastRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. `;
  }

  // store current roll for next round previous roll
  lastRoll = randomDiceNumber;

  // check win or lose
  if (input <= 6 && input >= 1) {
    if (input == randomDiceNumber) {
      myOutputValue += "You win.";
    } else {
      myOutputValue += "You lose.";
    }
  } else {
    lastRoll = 0;
    return "Please choose between 1 to 6 only.";
  }
  return myOutputValue;
};

// win-loss percentage version
var total = 0;
var win = 0;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();

  // count total number of games and wins
  if (input <= 6 && input >= 1) {
    if (input == randomDiceNumber) {
      total++;
      win++;
    } else {
      total++;
    }
  } else {
    return "Please choose between 1 to 6 only.";
  }

  // win percentage
  var winPercent = (win / total) * 100;
  winPercent = winPercent.toFixed(1);
  myOutputValue = `You win ${winPercent}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. `;

  // result
  if (input == randomDiceNumber) {
    myOutputValue += "You win.";
  } else {
    myOutputValue += "You lose.";
  }

  // output win and total
  myOutputValue = myOutputValue + "<br>" + `Win: ${win}, Total: ${total}.`;
  return myOutputValue;
};

// most rolled number
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();

  // check for valid input
  if (input <= 6 && input >= 1) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. `;
  } else {
    return "Please choose between 1 to 6 only.";
  }

  // count number of times each number appear
  if (randomDiceNumber == "1") {
    count1++;
  } else if (randomDiceNumber == "2") {
    count2++;
  } else if (randomDiceNumber == "3") {
    count3++;
  } else if (randomDiceNumber == "4") {
    count4++;
  } else if (randomDiceNumber == "5") {
    count5++;
  } else {
    count6++;
  }

  // result
  if (input == randomDiceNumber) {
    myOutputValue += "You win." + "<br>";
  } else {
    myOutputValue += "You lose." + "<br>";
  }
  myOutputValue =
    myOutputValue +
    `No.1: ${count1}, No.2: ${count2}, No.3: ${count3}, No.4: ${count4}, No.5: ${count5}, No.6: ${count6}.`;
  // get hishest roll count
  var mostRolled = count1;
  if (count2 >= mostRolled) {
    mostRolled = count2;
  }
  if (count3 >= mostRolled) {
    mostRolled = count3;
  }
  if (count4 >= mostRolled) {
    mostRolled = count4;
  }
  if (count5 >= mostRolled) {
    mostRolled = count5;
  }
  if (count6 >= mostRolled) {
    mostRolled = count6;
  }

  // output highest roll count number
  if (count1 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "1 is the number you roll the most.";
  }
  if (count2 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "2 is the number you roll the most.";
  }
  if (count3 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "3 is the number you roll the most.";
  }
  if (count4 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "4 is the number you roll the most.";
  }
  if (count5 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "5 is the number you roll the most.";
  }
  if (count6 == mostRolled) {
    myOutputValue =
      myOutputValue + "<br>" + "6 is the number you roll the most.";
  }

  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();

  // calculate points
  if (input <= 6 && input >= 1) {
    if (input == randomDiceNumber) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 2 points.`;
    } else if (input == randomDiceNumber - 1 || input == randomDiceNumber + 1) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 1 point.`;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose.`;
    }
  } else {
    return "Please choose between 1 to 6 only.";
  }
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();

  // calculate points
  if (input <= 6 && input >= 1) {
    if (input == randomDiceNumber) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 5 points.`;
    } else if (input == randomDiceNumber - 1 || input == randomDiceNumber + 1) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 4 points.`;
    } else if (input == randomDiceNumber - 2 || input == randomDiceNumber + 2) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 3 points.`;
    } else if (input == randomDiceNumber - 3 || input == randomDiceNumber + 3) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 2 points.`;
    } else if (input == randomDiceNumber - 4 || input == randomDiceNumber + 4) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win 1 point.`;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose.`;
    }
  } else {
    return "Please choose between 1 to 6 only.";
  }
  return myOutputValue;
};

// we set the initial state of mode (green/blue)
var mode = "green";

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  // depending on the input, we will toggle mode states between green/blue
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

// we set the initial state of mode (green/blue/red)
var mode2 = "green";

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  // depending on the input, we will toggle mode states between green/blue/red
  if (input == "greenmode") {
    mode2 = "green";
  } else if (input == "bluemode") {
    mode2 = "blue";
  } else if (input == "redmode") {
    mode2 = "red";
  }

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode2 == "green") {
    var myOutputValue =
      "A fool sees not the same tree that a wise man sees. -William Blake";
  } else if (mode2 == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (mode2 == "red") {
    myOutputValue = "Game over...";
  } else {
    return `Please choose between greenmode, bluemode or redmode.`;
  }

  return myOutputValue;
};
