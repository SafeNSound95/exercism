"use strict";
const needsLicense = (kind) => {
  if (typeof kind !== "string") return -1;

  const kindStr = kind.trim().toLowerCase();

  return kindStr === "car" || kindStr === "truck";
};

const vehiclesWithLicenses = ["car", "truck"];
const needsLicense2 = (kind) => {
  if (typeof kind !== "string") return -1;
  return vehiclesWithLicenses.includes(kind.trim().toLowerCase());
};

console.log(needsLicense("Car"));
console.log(needsLicense("car"));
console.log(needsLicense("cAr"));
console.log(needsLicense("cAR"));
console.log(needsLicense("CAR"));
console.log(needsLicense(" Car "));

console.log(`/**********************************************************/`);

console.log(needsLicense("Truck"));
console.log(needsLicense("truck"));
console.log(needsLicense("tRuCk"));
console.log(needsLicense("tRuCk "));

console.log(`/**********************************************************/`);

console.log(needsLicense("bike"));
console.log(needsLicense("scooter"));

console.log(`/**********************************************************/`);

console.log(needsLicense(3));
console.log(needsLicense(["him"]));
console.log(needsLicense({ a: 1 }));

console.log(`/**********************************************************/`);

console.log(needsLicense2("car"));
console.log(needsLicense2("truck"));
console.log(needsLicense2(" truck"));
console.log(needsLicense2(" cAr "));
console.log(needsLicense2(3));
console.log(needsLicense2([3]));
console.log(needsLicense2({ val: "truck" }));

const chooseVehicle = function (vehicle1, vehicle2) {
  if (typeof vehicle1 !== "string" || typeof vehicle2 !== "string") return -1;

  const vehicle1Str = vehicle1.trim().toLowerCase();
  const vehicle2Str = vehicle2.trim().toLowerCase();

  const templateStr = `, is clearly the better choice.`;
  return vehicle1Str < vehicle2Str
    ? `${vehicle1Str}${templateStr}`
    : `${vehicle2Str}${templateStr}`;
};

const chooseVehicle2 = function (vehicle1, vehicle2) {
  return `${[vehicle1, vehicle2].sort()[0]} is clearly the better choice`;
};

// chooseVehicle;
console.log(chooseVehicle("Bugatti Veyron", "Ford Pinto"));
console.log(chooseVehicle2("Bugatti Veyron", "Ford Pinto"));

console.log(chooseVehicle("Chery EQ", "Kia Niro Elektro"));
console.log(chooseVehicle2("Chery EQ", "Kia Niro Elektro"));

console.log(chooseVehicle("Ford Pinto", "Bugatti Veyron"));
console.log(chooseVehicle2("Ford Pinto", "Bugatti Veyron"));

function calculateResellPrice(originalPrice, age) {
  if (typeof originalPrice !== "number" || typeof age !== "number") return -1;
  if (age < 3) return originalPrice * 0.8;
  else if (age > 10) return originalPrice * 0.5;

  //else if (age >= 3 && age <= 10) return originalPrice * 0.7;
  return originalPrice * 0.7; //Why does this work? because if the first CND didn't return neither did the second one, and we're left with one final CND then there's nothing else that can happen, the logic makes sense here, so we can just return without doing another if else......................CONCLUSION: KEEP IN MIND TO JUST RETURN THE FINAL THING WITHOUT CHECKING FOR A CND, IT'S CLEANER AND LOGICALLY MAKES SENSE.

  /*
  this article talks about this technique: 
  https://medium.com/@rachelchervin/if-else-vs-if-return-using-implicit-returns-in-javascript-and-react-bbac63656e1b
  */
}

function calculateResellPrice2(originalPrice, age) {
  const discount = age < 3 ? 0.2 : age > 10 ? 0.5 : 0.3;
  return originalPrice * (1 - discount);
}

calculateResellPrice(1000, 1);
calculateResellPrice(1000, 5);
calculateResellPrice(1000, 15);

console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 15));
console.log(calculateResellPrice("1000", 15));
console.log(calculateResellPrice(1000, " 15"));
console.log(calculateResellPrice([1], 15));
console.log(calculateResellPrice(40000, 2.5));
console.log(calculateResellPrice(40000, 12));
