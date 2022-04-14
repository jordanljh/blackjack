// Roll dice
let rolldice = function () {
  let num = Math.ceil(Math.random() * 6);
  return num;
};

// global variables
let gamemode = "p1";
let number1 = 0;
let number2 = 0;
let total1 = 0;
let total2 = 0;

var main = function (input) {
  let message = "";
  // when restart button is click, input for output box will become restart
  if (input == "restart") {
    gamemode = "p1";
    number1 = 0;
    number2 = 0;
    total1 = 0;
    total2 = 0;
    return "Welcome to Beat That! Player 1, roll your dice!";
  }
  // when restart button is click, input for score box will become resetscore
  if (input == "resetscore") {
    message = "Leaderboard" + "<br>" + "Player 1: 0" + "<br>" + "Player 2: 0";
    return message;
  }
  // score box will display current score
  if (input == "score") {
    message = "Leaderboard" + "<br>";
    if (total1 > total2) {
      message =
        message + `Player 1: ${total1}` + "<br>" + `Player 2: ${total2}`;
    } else {
      message =
        message + `Player 2: ${total2}` + "<br>" + `Player 1: ${total1}`;
    }
    return message;
  }
  // roll dice
  let die1 = rolldice();
  let die2 = rolldice();
  let number = 0;
  // calculate biggest number
  if (die1 > die2) {
    number = die1 * 10 + die2;
  } else {
    number = die2 * 10 + die1;
  }
  // switch between player 1 and 2
  if (gamemode == "p1") {
    // add to player 1 total
    total1 += number;
    // current player 1 roll
    number1 = number;
    // change to player 2
    gamemode = "p2";
    return (
      `Player 1, you rolled a ${die1} and a ${die2}.` +
      "<br>" +
      `Biggest number possible: ${number1}` +
      "<br>" +
      "Player 2, roll your dice!"
    );
  } else {
    // add to player 2 total
    total2 += number;
    // current player 2 roll
    number2 = number;
    // change to player 1
    gamemode = "p1";
    message =
      `Player 2, you rolled a ${die1} and a ${die2}.` +
      "<br>" +
      `Biggest number possible: ${number2}` +
      "<br>" +
      "<br>" +
      `Player 1 is ${number1}, Player 2 is ${number2}. `;
    // result of current round
    if (number1 > number2) {
      message += "Player 1 wins!";
    } else {
      message += "Player 2 wins!";
    }
  }
  message = message + "<br>" + "<br>" + "Player 1, roll your dice!";
  return message;
};
