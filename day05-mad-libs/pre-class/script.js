// Store guesses in a global array that persists across Submits.
var guesses = [];

var rollDice = function () {
  let num = Math.random() * 6;
  num = Math.ceil(num);
  return num;
};

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};

let names = [];

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  let found = false;
  for (let index = 0; index < names.length; index += 1) {
    let currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  if (!found) {
    names.push(input);
  }

  let message = "Names: " + names;
  return message;
};
