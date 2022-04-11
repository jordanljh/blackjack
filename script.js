var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var roll3Number = function () {
  // generate decimal 0 <= x < 3
  var randomDecimal = Math.random() * 3;

  // generate integer 0 <= x <= 2
  var randomInteger = Math.floor(randomDecimal);

  var chosenNumber = randomInteger + 1;
  return chosenNumber;
};

let userName = "";
let gameState = "start";
let totalGames = 0;
let totalWin = 0;
let totalLose = 0;
let totalDraw = 0;
let currentMode = 0;

var main = function (input) {
  let message;

  // ask for name
  if (gameState == "start") {
    gameState = "username";
    message = "Hi! Welcome to Scissors-Paper-Stone. Please key in your name.";
    return message;
  }

  // ask for mode
  if (gameState == "username") {
    userName = input;
    gameState = "mode";
    message =
      `Nice to meet you, ${userName}. Please select which mode (1, 2, 3 or 4) will you be playing.` +
      "<br>" +
      "<br>" +
      "1: Manual Normal mode" +
      "<br>" +
      "2: Manual Reverse mode" +
      "<br>" +
      "3: AI Normal mode" +
      "<br>" +
      "4: AI Reverse mode";
    return message;
  }

  // state mode and start playing
  if (gameState == "mode") {
    if (input == 1) {
      gameState = "play1";
      currentMode = "Manual Normal Mode";
      message =
        `Nice to meet you, ${userName}. You are playing manual normal mode.` +
        "<br>" +
        `Please choose between scissors, paper and stone.`;
      return message;
    } else if (input == 2) {
      gameState = "play2";
      currentMode = "Manual Reverse Mode";
      message =
        `Nice to meet you, ${userName}. You are playing manual reverse mode.` +
        "<br>" +
        `Please choose between scissors, paper and stone.`;
      return message;
    } else if (input == 3) {
      gameState = "playAI1";
      currentMode = "AI Normal Mode";
      message =
        `Nice to meet you, ${userName}. You are playing AI normal mode.` +
        "<br>" +
        `Computer will help to play on your behalf.`;
      return message;
    } else if (input == 4) {
      gameState = "playAI2";
      currentMode = "AI Reverse Mode";
      message =
        `Nice to meet you, ${userName}. You are playing AI reverse mode.` +
        "<br>" +
        `Computer will help to play on your behalf.`;
      return message;
    } else {
      return `Hi ${userName}, please select 1 for manual normal mode, 2 for manual reverse mode, 3 for AI normal mode or 4 for AI reverse mode`;
    }
  }

  let key = roll3Number();
  let keyAI = roll3Number();
  let computerRoll;
  let choice;

  if (gameState == "playAI1" || gameState == "playAI2") {
    if (keyAI == 1) {
      choice = "scissors";
    } else if (keyAI == 2) {
      choice = "paper";
    } else {
      choice = "stone";
    }
  } else {
    choice = input;
  }

  // computer choice
  if (key == 1) {
    computerRoll = "scissors";
  } else if (key == 2) {
    computerRoll = "paper";
  } else {
    computerRoll = "stone";
  }
  message =
    `Computer chose ${computerRoll}.` +
    "<br>" +
    `You chose ${choice}.` +
    "<br>" +
    "<br>" +
    `You `;

  if (gameState == "play1" || gameState == "play2") {
    if (!(input == "scissors" || input == "stone" || input == "paper")) {
      return `Please choose between scissors, paper and stone.`;
    }
  }

  // check results
  if (gameState == "play1" || gameState == "playAI1") {
    if (choice == "scissors") {
      if (computerRoll == "scissors") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "paper") {
        message += "win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    } else if (choice == "paper") {
      if (computerRoll == "paper") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "stone") {
        message += "win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    } else {
      if (computerRoll == "stone") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "scissors") {
        message += "Win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    }
  }

  if (gameState == "play2" || gameState == "playAI2") {
    if (choice == "scissors") {
      if (computerRoll == "scissors") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "stone") {
        message += "Win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    } else if (choice == "paper") {
      if (computerRoll == "paper") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "scissors") {
        message += "Win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    } else {
      if (computerRoll == "stone") {
        message += "draw!";
        totalDraw++;
      } else if (computerRoll == "paper") {
        message += "Win!";
        totalWin++;
      } else {
        message += "lose!";
        totalLose++;
      }
    }
  }

  totalGames++;
  let winPercent = (totalWin * 100) / (totalLose + totalWin);
  if (totalLose + totalWin == 0) {
    winPercent = 0;
  }
  winPercent = winPercent.toFixed(2);
  message =
    message +
    "<br>" +
    "<br>" +
    `Now you can type scissors, paper or stone to play another round.` +
    "<br>" +
    "<br>" +
    `Total games played: ${totalGames}` +
    "<br>" +
    `Total games won: ${totalWin}` +
    "<br>" +
    `Total games lost: ${totalLose}` +
    "<br>" +
    `Total games drew: ${totalDraw}` +
    "<br>" +
    `Winning percentage: ${winPercent}%` +
    "<br>" +
    "<br>" +
    `Current mode: ${currentMode}`;
  return message;
};
