var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var pi = 3.14,
    radius = 4;
  var area = pi * radius * radius;
  var name = "Chicken";
  var myOutputValue = "wow hello " + input;
  //return convertKmToMiles(input);
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "Hello " + input + ", you look great today!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distKm = input;
  var distMi = 0.62 * distKm;
  var myOutputValue =
    "Hi! " + distKm + " kilometers is equal to " + distMi + " miles.";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  // calculate distance
  var distance = 200 * 2;

  // Remaining Time
  var remainingTime = 2 - input;

  // speed of 2
  var speed = distance / remainingTime;
  var myOutputValue = "Train 2 will need to travel at " + speed + "kph.";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  // angle move by hour hand in one hour, minute hand in one hour
  var angleH = 360 / 12;
  var angleM = 360;

  // convert input from minute to second, sedcond in an hour
  var secondsInAnHour = 60 * 60;
  var timeInSeconds = input * 60;

  //position of hour hand, minute hand
  var angleOfHourHand = (timeInSeconds / secondsInAnHour + 1) * angleH;
  var angleOfMinuteHand = ((timeInSeconds % 3600) / 3600) * angleM;

  //angle after moving
  var newAngle = Math.abs(angleOfMinuteHand - angleOfHourHand);

  var myOutputValue = "The angle is " + newAngle + "!";
  return myOutputValue;
};
