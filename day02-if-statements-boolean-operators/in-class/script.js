var rollDice = function () {
  // generate decimal 0 <= x < 6
  var randomDecimal = Math.random() * 6;

  // generate integer 0 <= x <=5
  var randomInteger = Math.floor(randomDecimal);

  // return dice number
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var dice1 = rollDice();
  var dice2 = rollDice();
  var myOutputValue;
  if (input > 6) {
    myOutputValue = `Please input from 1 to 6 only.`;
  } else if (dice1 == input || dice2 == input || dice1 + dice2 == 11) {
    myOutputValue = `Dice 1: ${dice1}, Dice 2: ${dice2}, Input: ${input}. Result: Win.`;
  } else {
    myOutputValue = `Dice 1: ${dice1}, Dice 2: ${dice2}, Input: ${input}. Result: Lose.`;
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue;
  if (input == "Chicken rice" || input == "Nasi lemak") {
    myOutputValue = `${input} is a RICE dish.`;
  } else if (input == "Hokkien Mee" || input == "Laksa") {
    myOutputValue = `${input} is a NOODLE dish.`;
  } else if (input == "Roti prata" || input == "Bak kut teh") {
    myOutputValue = `${input} is an OTHER dish.`;
  } else {
    myOutputValue = `Please choose between Chicken rice, Roti prata, Nasi lemak, Hokkien mee, Bak kut teh or Laksa.`;
  }
  return myOutputValue;
};

var roll9Number = function () {
  // generate decimal 0 <= x < 9
  var randomDecimal = Math.random() * 10;

  // generate integer 0 <= x <=9
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var digit1 = roll9Number();
  var digit2 = roll9Number();
  var digit3 = roll9Number();
  var digit4 = roll9Number();
  var myOutputValue;
  if (
    digit1 == input ||
    digit2 == input ||
    digit3 == input ||
    digit4 == input
  ) {
    myOutputValue = `Digit 1: ${digit1}. Digit 2: ${digit2}. Digit 3: ${digit3}. Digit 4: ${digit4}. Input: ${input}. Result: WIN.`;
  } else {
    myOutputValue = `Digit 1: ${digit1}. Digit 2: ${digit2}. Digit 3: ${digit3}. Digit 4: ${digit4}. Input: ${input}. Result: LOSE.`;
  }
  return myOutputValue;
};

var roll6Number = function () {
  // generate decimal 0 <= x < 6
  var randomDecimal = Math.random() * 6;

  // generate integer 0 <= x <=5
  var randomInteger = Math.floor(randomDecimal);

  // return number
  var numberChosen = randomInteger + 1;
  return numberChosen;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var dishNumber = roll6Number();
  var dish;
  var myOutputValue;

  // match number to dish
  if (dishNumber == 1) {
    dish = "Chicken rice";
  } else if (dishNumber == 2) {
    dish = "Roti prata";
  } else if (dishNumber == 3) {
    dish = "Nasi Lemak";
  } else if (dishNumber == 4) {
    dish = "Hokkien Mee";
  } else if (dishNumber == 5) {
    dish = "Bak kut teh";
  } else {
    dish = "Laksa";
  }
  // check for free or not
  if (
    input == "Chicken rice" ||
    input == "Roti prata" ||
    input == "Nasi lemak" ||
    input == "Hokkien mee" ||
    input == "Bak kut teh" ||
    input == "Laksa"
  ) {
    if (dish == input) {
      myOutputValue = `Selected dish: ${input}, Cooked dish: ${dish}, FREE MEAL!`;
    } else {
      myOutputValue = `Selected dish: ${input}, Cooked dish: ${dish}, Please enjoy your meal and settle your bill at the counter.`;
    }
  } else {
    myOutputValue = `Please choose between Chicken rice, Roti prata, Nasi lemak, Hokkien mee, Bak kut teh or Laksa.`;
  }
  return myOutputValue;
};

var roll10000Number = function () {
  // generate decimal 0 <= x < 10000
  var randomDecimal = Math.random() * 10000;

  // generate integer 0 <= x <=9999
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.

  var myOutputValue;
  // generate 4D
  var chosenNumber = roll10000Number();
  if (input >= 0 && input <= 9999) {
    if (input >= chosenNumber - 1000 && input <= chosenNumber + 1000) {
      myOutputValue = `Winning number: ${chosenNumber}, Player number: ${input}, Result: WIN.`;
    } else {
      myOutputValue = `Winning number: ${chosenNumber}, Player number: ${input}, Result: LOSE.`;
    }
  } else {
    myOutputValue = `Please select number from 0000 to 9999.`;
  }
  return myOutputValue;
};

var roll4Number = function () {
  // generate decimal 0 <= x < 4
  var randomDecimal = Math.random() * 4;

  // generate integer 0 <= x <=3
  var randomInteger = Math.floor(randomDecimal);

  // return number
  var numberChosen = randomInteger + 1;
  return numberChosen;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue;
  var dishNumber1, dishNumber2, dish1, dish2;
  if (input == "Rice") {
    dishNumber1 = roll4Number();
    if (dishNumber1 == 1) {
      dish1 = "Chicken rice";
    } else if (dishNumber1 == 2) {
      dish1 = "Nasi lemak";
    } else if (dishNumber1 == 3) {
      dish1 = "Bak kut teh";
    } else {
      dish1 = "Roti prata";
    }
    dishNumber2 = roll4Number();
    while (dishNumber2 == dishNumber1) {
      dishNumber2 = roll4Number();
    }
    if (dishNumber2 == 1) {
      dish2 = "Chicken rice";
    } else if (dishNumber2 == 2) {
      dish2 = "Nasi lemak";
    } else if (dishNumber2 == 3) {
      dish2 = "Bak kut teh";
    } else {
      dish2 = "Roti prata";
    }
    myOutputValue = `Dish 1 is ${dish1}, Dish 2 is ${dish2}.`;
  } else if (input == "Noodle") {
    dishNumber1 = roll4Number();
    if (dishNumber1 == 1) {
      dish1 = "Hokkien mee";
    } else if (dishNumber1 == 2) {
      dish1 = "Laksa";
    } else if (dishNumber1 == 3) {
      dish1 = "Beef hor fun";
    } else {
      dish1 = "Roti prata";
    }
    dishNumber2 = roll4Number();
    while (dishNumber2 == dishNumber1) {
      dishNumber2 = roll4Number();
    }
    if (dishNumber2 == 1) {
      dish2 = "Hokkien mee";
    } else if (dishNumber2 == 2) {
      dish2 = "Laksa";
    } else if (dishNumber2 == 3) {
      dish2 = "Beef hor fun";
    } else {
      dish2 = "Roti prata";
    }
    myOutputValue = `Dish 1 is ${dish1}, Dish 2 is ${dish2}.`;
  } else {
    return `Please choose between Rice and Noodle.`;
  }
  if (
    dish1 == "Chicken rice" ||
    dish1 == "Nasi lemak" ||
    dish1 == "Hokkien mee" ||
    dish1 == "Laksa" ||
    dish2 == "Chicken rice" ||
    dish2 == "Nasi lemak" ||
    dish2 == "Hokkien mee" ||
    dish2 == "Laksa"
  ) {
    myOutputValue += ` Sambal is included.`;
  }
  return myOutputValue;
};
