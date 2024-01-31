"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

const coin = new Dice(2);

console.log("diceA:", diceA.toString());
console.log("diceB: " + diceB);

diceA.roll();
diceB.roll();

console.log("diceA:", diceA.toString());
console.log("diceB: " + diceB);

if (diceA.dots === diceB.dots) {
  console.log("same dots");
} else if (diceA.dots > diceB.dots) {
  console.log("diceA wins");
} else {
  console.log("diceB wins");
}
