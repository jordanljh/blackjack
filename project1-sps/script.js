var roll3Number = function () {
  // generate decimal 0 <= x < 3
  var randomDecimal = Math.random() * 3;

  // generate integer 0 <= x <= 2
  var randomInteger = Math.floor(randomDecimal);

  var chosenNumber = randomInteger + 1;
  return chosenNumber;
};

var main = function (input) {
  var key = roll3Number();
  var computer;

  // computer choice
  if (key == 1) {
    computer = "scissors";
  } else if (key == 2) {
    computer = "paper";
  } else {
    computer = "stone";
  }
  var myOutputValue = `Player: ${input}, Computer: ${computer}, Result: `;

  // check results
  if (input == "scissors") {
    if (computer == "scissors") {
      myOutputValue += "Draw.";
    } else if (computer == "paper") {
      myOutputValue += "Win.";
    } else {
      myOutputValue += "Lose.";
    }
  } else if (input == "paper") {
    if (computer == "paper") {
      myOutputValue += "Draw.";
    } else if (computer == "stone") {
      myOutputValue += "Win.";
    } else {
      myOutputValue += "Lose.";
    }
  } else if (input == "stone") {
    if (computer == "stone") {
      myOutputValue += "Draw.";
    } else if (computer == "scissors") {
      myOutputValue += "Win.";
    } else {
      myOutputValue += "Lose.";
    }
  } else {
    return `Please choose between scissors, paper and stone.`;
  }
  return myOutputValue;
};
