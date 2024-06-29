"use strict";

function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const numOfFullMonths = Math.floor(numDays / 22);
  const numOfRemainingDays = numDays % 22;

  return Math.ceil(
    dayRate(ratePerHour) * 22 * numOfFullMonths * (1 - discount) +
      numOfRemainingDays * dayRate(ratePerHour)
  );
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
