var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  // normal loop
  let counter = 0;
  let message = "";
  while (counter < 6) {
    message += "hello ";
    counter++;
  }

  message += "<br>";

  // start counter with 2
  let counter1 = 2;
  while (counter1 < 6) {
    message += "hello ";
    counter1++;
  }

  message += "<br>";

  // counter jumps by 2
  let counter2 = 0;
  while (counter2 < 6) {
    message += "hello ";
    counter2 += 2;
  }

  message += "<br>";

  // counter <= instead of <
  let counter3 = 0;
  while (counter3 <= 6) {
    message += "hello ";
    counter3++;
  }
  return message;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.

  // 3 outer loop, 3 inner loop
  let message = "1: Expected 9" + "<br>";
  let counterOut1 = 0;
  let counterIn1 = 0;
  while (counterOut1 < 3) {
    while (counterIn1 < 3) {
      message += "hello ";
      counterIn1++;
    }
    counterOut1++;
    counterIn1 = 0;
  }

  message += "<br>";
  message += "<br>";
  message += "2: Expected 3x3";
  message += "<br>";

  // new line for outer loop
  let counterOut2 = 0;
  let counterIn2 = 0;
  while (counterOut2 < 3) {
    while (counterIn2 < 3) {
      message += "hello ";
      counterIn2++;
    }
    message += "<br>";
    counterOut2++;
    counterIn2 = 0;
  }

  message += "<br>";
  message += "<br>";
  message += "3: Expectd 2x2";
  message += "<br>";

  // loop counters start with 1
  let counterOut3 = 1;
  let counterIn3 = 1;
  while (counterOut3 < 3) {
    while (counterIn3 < 3) {
      message += "hello ";
      counterIn3++;
    }
    message += "<br>";
    counterOut3++;
    counterIn3 = 1;
  }

  message += "<br>";
  message += "<br>";
  message += "4: Expected 2x2";
  message += "<br>";

  // loop counters jump by 2
  let counterOut4 = 0;
  let counterIn4 = 0;
  while (counterOut4 < 3) {
    while (counterIn4 < 3) {
      message += "hello ";
      counterIn4 += 2;
    }
    message += "<br>";
    counterOut4 += 2;
    counterIn4 = 0;
  }

  message += "<br>";
  message += "<br>";
  message += "5: Expected 4x4";
  message += "<br>";

  // loop counters <= rather than <
  let counterOut5 = 0;
  let counterIn5 = 0;
  while (counterOut5 <= 3) {
    while (counterIn5 <= 3) {
      message += "hello ";
      counterIn5++;
    }
    message += "<br>";
    counterOut5++;
    counterIn5 = 0;
  }

  message += "<br>";
  message += "<br>";
  message += `6: Expected ${input}x${input} (Size determined by input)`;
  message += "<br>";

  // size determined by input
  let counterOut6 = 0;
  let counterIn6 = 0;
  while (counterOut6 < input) {
    while (counterIn6 < input) {
      message += "hello ";
      counterIn6++;
    }
    message += "<br>";
    counterOut6++;
    counterIn6 = 0;
  }

  message += "<br>";
  message += "<br>";
  message += "7: Expected 3x6";
  message += "<br>";

  // inner loop run double of outer loop
  let counterOut7 = 0;
  let counterIn7 = 0;
  while (counterOut7 < 3) {
    while (counterIn7 < 6) {
      message += "hello ";
      counterIn7++;
    }
    message += "<br>";
    counterOut7++;
    counterIn7 = 0;
  }

  return message;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  let counter = 1;
  while (counter < 10) {
    counter++;
    while (counter > 0) {
      counter--;
    }
  }
};
