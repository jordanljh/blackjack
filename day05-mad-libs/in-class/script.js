var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var adjList = [];

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input != "create") {
    adjList.push(input);
    return `Adjectives: ${adjList}`;
  }
  if (input == "create") {
    let randomAdj = adjList[getRandomIndex(adjList.length)];
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
  }
};

let gamemode1 = "normal";
let adjList1 = [];

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  if (input == "create") {
    gamemode1 = "print";
  }
  if (gamemode1 == "print") {
    let randomAdj = adjList1[getRandomIndex(adjList1.length)];
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
  }
  if (input != "create") {
    adjList1.push(input);
    return `Adjectives: ${adjList1}`;
  }
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  let words = input;
  let adjList2 = words.split(" ");
  let randomAdj = adjList2[getRandomIndex(adjList2.length)];
  return (
    `Adjectives: ${adjList2}` +
    "<br>" +
    `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`
  );
};

let exList3 = [];
let adverbList3 = [];
let nounList3 = [];
let adjList3 = [];
let gamemode3 = "1";

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  let words = input;
  if (gamemode3 == "1") {
    exList3 = words.split(" ");
    gamemode3 = "2";
    return `Exclamation: ${exList3}` + "<br>" + "Please input adverbs.";
  } else if (gamemode3 == "2") {
    adverbList3 = words.split(" ");
    gamemode3 = "3";
    return `Exclamation: ${adverbList3}` + "<br>" + "Please input nouns.";
  } else if (gamemode3 == "3") {
    nounList3 = words.split(" ");
    gamemode3 = "4";
    return `Exclamation: ${nounList3}` + "<br>" + "Please input adjectives.";
  } else {
    adjList3 = words.split(" ");
  }
  if (gamemode3 == "4") {
    gamemode3 = "1";
    let randomExclamation = exList3[getRandomIndex(exList3.length)];
    let randomAdverb = adverbList3[getRandomIndex(adverbList3.length)];
    let randomNoun = nounList3[getRandomIndex(nounList3.length)];
    let randomAdj = adjList3[getRandomIndex(adjList3.length)];
    return (
      `Exclamation: ${exList3}` +
      "<br>" +
      `Adverb: ${adverbList3}` +
      "<br>" +
      `Noun: ${nounList3}` +
      "<br>" +
      `Adjectives: ${adjList3}` +
      "<br>" +
      `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`
    );
  }
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
