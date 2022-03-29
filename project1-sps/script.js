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
  var myOutputValue =
    `Computer chose ${computer}.` +
    "<br>" +
    `You chose ${input}.` +
    "<br>" +
    "<br>" +
    `You `;

  // check results
  if (input == "scissors") {
    if (computer == "scissors") {
      myOutputValue += "draw!";
    } else if (computer == "paper") {
      myOutputValue += "win!";
    } else {
      myOutputValue += "lose!";
    }
  } else if (input == "paper") {
    if (computer == "paper") {
      myOutputValue += "draw!";
    } else if (computer == "stone") {
      myOutputValue += "win!";
    } else {
      myOutputValue += "lose!";
    }
  } else if (input == "stone") {
    if (computer == "stone") {
      myOutputValue += "draw!";
    } else if (computer == "scissors") {
      myOutputValue += "Win!";
    } else {
      myOutputValue += "lose!";
    }
  } else if (input == "reversed scissors") {
    if (computer == "scissors") {
      myOutputValue += "draw!";
    } else if (computer == "stone") {
      myOutputValue += "Win!";
    } else {
      myOutputValue += "lose!";
    }
  } else if (input == "reversed paper") {
    if (computer == "paper") {
      myOutputValue += "draw!";
    } else if (computer == "scissors") {
      myOutputValue += "Win!";
    } else {
      myOutputValue += "lose!";
    }
  } else if (input == "reversed stone") {
    if (computer == "stone") {
      myOutputValue += "draw!";
    } else if (computer == "paper") {
      myOutputValue += "Win!";
    } else {
      myOutputValue += "lose!";
    }
  } else {
    return `Please choose between scissors, paper and stone.`;
  }
  myOutputValue =
    myOutputValue +
    "<br>" +
    "<br>" +
    `Now you can type scissors, paper or stone to play another round!`;
  return myOutputValue;
};
