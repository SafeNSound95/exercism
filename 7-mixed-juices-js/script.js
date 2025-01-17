"use strict";
let x = 0;

// while (x >= 5) {
//   console.log("hello");
//   x++;
// }

// do while does the loop at least once.
do {
  console.log("hello");
  x++;
} while (x >= 5);

let i = 0;

while (i <= 12) {
  i += 2;

  if (i % 3 === 0) {
    continue;
  }

  console.log("one more time");
}

const num = [0, 1, 2, 3, 4, 5];

switch (num[2]) {
  case 0:
    console.log("0");
    break;

  case 1:
    console.log("1");
    break;

  default:
    console.log("not a num");
}

console.log("---------------------- Challenge Start ----------------------");
const timeToMixJuice = function (name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;

    case "Energizer":
    case "Green Garden":
      return 1.5;

    case "Tropical Island":
      return 3;

    case "All or Nothing":
      return 5;

    default:
      return 2.5;
  }
};

console.log(timeToMixJuice("Green Garden"));

/*
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

function limesToCut(wedgesNeeded, limes) {
  if (limes.length === 0 || wedgesNeeded === 0) return 0;

  const limeToWedges = limes.map((lime) =>
    lime === "small" ? 6 : lime === "medium" ? 8 : 10
  );

  let sumWedges = 0;
  let limesNeeded = 0;

  for (const limeWedge of limeToWedges) {
    sumWedges += limeWedge;
    if (sumWedges >= wedgesNeeded) {
      limesNeeded++;
      break;
    }
    limesNeeded++;
  }

  return limesNeeded;
}

console.log(
  limesToCut(42, [
    "small",
    "large",
    "large",
    "medium",
    "small",
    "large",
    "large",
    "medium",
  ])
);

console.log(limesToCut(4, ["medium", "small"]));

console.log(
  limesToCut(80, [
    "small",
    "large",
    "large",
    "medium",
    "small",
    "large",
    "large",
  ])
);

console.log(limesToCut(0, ["small", "large", "medium"]));
console.log(limesToCut(10, []));

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

function remainingOrders(timeLeft, orders) {
  let totalTime = 0;
  let i = 0;
  while (totalTime < timeLeft) {
    totalTime += timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i) || [];
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);

const orders = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
];

console.log(remainingOrders(7, orders));

// Works when there's only little time left:
console.log(remainingOrders(4, ["All or Nothing", "Green Garden"]));

// Counts all orders as fulfilled when there's enough time:
console.log(
  remainingOrders(20, ["All or Nothing", "Green Garden", "Mystery Juice"])
);
