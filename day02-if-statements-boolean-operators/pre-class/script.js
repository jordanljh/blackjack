var orangeJuiceMain = function (guest, glass) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // attributes given
  var orangesPerGlass = 4;
  var glassesPerGuest = glass;
  var numberOfGuests = guest;

  // total oranges needed
  var totalOranges = numberOfGuests * glassesPerGuest * orangesPerGlass;

  // output message
  var myOutputValue = `${numberOfGuests} guests will require ${totalOranges} oranges if each drink ${glassesPerGuest} glasses.`;
  return myOutputValue;
};

var paintMain = function (price, rooms, coats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  // attributes given
  var areaPerLitre = 300;
  var numberOfPaintCoatings = coats;
  var numberOfRoom = rooms;
  var roomLength = 3;
  var roomWidth = 3;
  var paintCostPerLitre = price;

  // total area needed
  var totalArea = roomLength * roomWidth * numberOfRoom;

  // cost of paint
  var totalCost =
    ((totalArea * numberOfPaintCoatings) / areaPerLitre) * paintCostPerLitre;

  var myOutputValue = `Total cost to paint the ${numberOfRoom}-room house with ${numberOfPaintCoatings} paint coatings will cost $${totalCost}.`;
  return myOutputValue;
};

var rollDice = function () {
  // generate decimal 0 <= x < 6
  var randomDecimal = Math.random() * 6;

  // generate integer 0 <= x <=5
  var randomInteger = Math.floor(randomDecimal);

  // return dice number
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // roll a dice number
  var diceNumber = rollDice();
  var myOutputValue = `You rolled a ${diceNumber}!`;
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "Try harder next time.";

  if (input == "hahaha" || input == "hehehe") {
    // if enter either secret phrase
    myOutputValue = "OMG!!! You know the secret prase!!!";
  } else if (input == "hohoho") {
    // if close to secret phrase
    myOutputValue = "You are so close! " + myOutputValue;
  } else {
    // otherphrases
    myOutputValue = "You have totally no clue. " + myOutputValue;
  }
  return myOutputValue;
};

// rigged dice
var rollDice = function (rigged = false) {
  if (rigged) {
    return 6;
  }
  // generate decimal 0 <= x < 6
  var randomDecimal = Math.random() * 6;

  // generate integer 0 <= x <=5
  var randomInteger = Math.floor(randomDecimal);

  // return dice number
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.

  // generate 2 dice roll
  var diceRoll1 = rollDice((rigged = true));
  var diceRoll2 = rollDice((rigged = true));

  // input from user
  var userInput = input;
  var myOutputValue = `Computer rolled a ${diceRoll1} and a ${diceRoll2}. You chosed a ${userInput}.`;

  // compare with user input, need 2 to be the same
  if (userInput > 6) {
    return `Please input 1 to 6 only.`;
  } else if (diceRoll1 == 1 && diceRoll2 == 1) {
    myOutputValue = myOutputValue += "You lose.";
    return myOutputValue;
  } else if (diceRoll1 == userInput && diceRoll2 == userInput) {
    myOutputValue = myOutputValue += "You win.";
    return myOutputValue;
  } else {
    myOutputValue = myOutputValue += "You lose.";
    return myOutputValue;
  }
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.

  // generate dice roll
  var diceRoll = rollDice();
  // user input
  var userInput = input;
  var myOutputValue = `Computer rolled a ${diceRoll}. You chosed a ${userInput}.`;

  // compare with user input
  if (userInput > 3) {
    myOutputValue = "Please only input 1, 2 or 3.";
  } else if (diceRoll == userInput * 2) {
    myOutputValue = myOutputValue += "You win.";
  } else {
    myOutputValue = myOutputValue += "You lose.";
  }
  return myOutputValue;
};
