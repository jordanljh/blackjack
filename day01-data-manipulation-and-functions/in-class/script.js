var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var temperatureInF = input;

  // convert temperature to C from F
  var temperatureInC = ((temperatureInF - 32) * 5) / 9;
  var myOutputValue = `${input}F is ${temperatureInC}C.`;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // variables
  var mileagePerLitre = 9;
  var fuelCostPerLitre = 2.2;
  var lengthInKm = input;
  var lengthInMile = lengthInKm * 0.6214;

  //total fuel cost
  var fuelCost = (lengthInMile / mileagePerLitre) * fuelCostPerLitre;
  fuelCost = fuelCost.toFixed(2);
  var myOutputValue = `Total fuel cost to travel ${lengthInKm}km is ${fuelCost}.`;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  // variables
  var mileagePerLitre = 9;
  var fuelCostPerLitreCar = 2.2;
  var fuelCostPerLitreTrain = 2;
  var lengthInKm = input;
  var lengthInMile = lengthInKm * 0.6214;

  //total fuel cost of car and train
  var fuelCostCar = (lengthInMile / mileagePerLitre) * fuelCostPerLitreCar;
  var fuelCostTrain = (lengthInMile / mileagePerLitre) * fuelCostPerLitreTrain;

  // difference between cost
  var difference = fuelCostCar - fuelCostTrain;
  difference = difference.toFixed(2);
  var myOutputValue = `The fuel cost savings in taking train over car is ${difference}.`;
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.

  // variables
  var drinksPerGuest = 2;
  var iceCubesPerDrink = 4;
  var weightOfIceCubeGram = 1.5;
  var weightOfIceCubePound = weightOfIceCubeGram * 0.002205;
  var weightOfIcePoundsPerHour = 5;
  var numberOfGuests = input;

  // duration to run ice machine
  var durationToRun =
    (numberOfGuests *
      drinksPerGuest *
      iceCubesPerDrink *
      weightOfIceCubePound) /
    weightOfIcePoundsPerHour;
  durationToRun = durationToRun.toFixed(2);
  var myOutputValue = `Duration to run ice machine for ${numberOfGuests} is ${durationToRun}h.`;
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.

  // variables
  var numberOfCustomers = input;
  var pintsPerCustomer = 2;
  var pintsPerHalfKeg = 124;
  var quarterOfYear = 365 / 4;

  // number of half kegs required per quarter
  var totalHalfKeg =
    (quarterOfYear * numberOfCustomers * pintsPerCustomer) / pintsPerHalfKeg;
  totalHalfKeg = Math.ceil(totalHalfKeg);
  var myOutputValue = `Number of half-barrel keg needed per quarter is ${totalHalfKeg}.`;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.

  //attributes
  var dataUsed = input;
  var costPerPlan = 19.99;

  // number of 50GB plan needed for data
  var numberOfPlan = Math.ceil(dataUsed / 50);
  var totalPlanCost = numberOfPlan * costPerPlan;
  var costPerGB = totalPlanCost / dataUsed;
  costPerGB = costPerGB.toFixed(2);
  var myOutputValue = `${dataUsed}GB will cost ${costPerGB}/GB.`;
  return myOutputValue;
};
