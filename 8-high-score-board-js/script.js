"use strict";

/*

*/

const obj = {
  a: 2,
  b: "3",
  "c d": 4, // since the key name doesn't meet the rules for naming identifers - it has spaces, we then have to put it between quotation mark, such keys are only accessed by bracket notation as is shown below, obviously we're not able to access them with dot notation.
};

console.log(obj["c d"]);

// Another more useful and more common use case for bracket notation is when we want to put a variable inside the brackets which obviously doesn't work for dot notation as it'll be undefined beacuse dot notation looks for the key LITERALLY, bracket notation can do literal but can also COMPUTE that's why it's a god send for when we want to access obj keys as variables.

const l = "a";
console.log(obj.l);
console.log(obj.a);
console.log(obj["a"]);
console.log(obj[l]);

obj["new key 2"] = "new value 2";
delete obj.a;
delete obj["c d"]; //deletes the key/value pair.
console.log(obj);

console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("b"));
console.log(obj.hasOwnProperty("new key 2"));

console.log(`---------------------------------------`);

// for in is an example where for in shines, since the 'key' is a variable I can only access with bracket notation.

for (const key in obj) {
  console.log(key, obj[key]);
}

console.log(`---------------------------------------`);

// Values of objects can be whatever data type we want them to be, but keys have to be strings always. in ES6 we could compute keys(property names), the end result is always a string, but now we can put whatever we want between the brackets and it'll be computed into a key as a string.

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: 12,
  [weekdays[4]]: 14,
  [`day ${2 + 4}`]: 15,
};

console.log(openingHours.fri);
console.log(openingHours["day 6"]);

for (const entry of Object.entries(openingHours)) {
  console.log(entry);
}

console.log(openingHours);

console.log(`-------------------- CHALLENGE START -------------------`);

function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

const scoreBoard = createScoreBoard();

addPlayer(scoreBoard, "him", 500);

console.log(scoreBoard);

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

updateScore(scoreBoard, "him", 350);

console.log(scoreBoard);

function applyMondayBonus(scoreBoard) {
  for (const player in scoreBoard) scoreBoard[player] += 100;
  return scoreBoard;
}

console.log(applyMondayBonus(scoreBoard));

function normalize(score) {
  return 2 * score + 10;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));
