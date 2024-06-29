"use strict";
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
const birdsPerDay2 = [9, 0, 8, 4, 5, 1, 3];

const totalBirdCount = (birdsPerDay) => birdsPerDay.reduce((a, b) => a + b, 0);

console.log(totalBirdCount(birdsPerDay));
console.log(totalBirdCount(birdsPerDay2));

const birdsInWeek = (birdsPerDay, n) =>
  birdsPerDay.slice((n - 1) * 7, n * 7).reduce((a, b) => a + b, 0);

console.log(birdsInWeek(birdsPerDay, 3));
console.log(birdsInWeek([3, 0, 3, 3, 2, 1, 0], 1));
console.log(
  birdsInWeek(
    [4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3],
    2
  )
);

// This solution returns a new array and doesn't modify the og.

const birds1 = [1, 2, 3, 4];
const fixBirdCountLog = (birdsPerDay) =>
  birdsPerDay.map((curr, i) => (i % 2 === 0 ? ++curr : curr));
console.log(fixBirdCountLog(birds1));
console.log(birds1);

//This solution returns the same array modified.

const fixBirdCountLog2 = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
};
const birds2 = [1, 2, 3, 4];
console.log(fixBirdCountLog2(birds2));
console.log(birds2); //array has been modified as a sideffect to the for loop in the fixBirCountLog function

console.log(fixBirdCountLog2([4, 2]));
console.log(
  fixBirdCountLog2([2, 8, 4, 1, 3, 5, 0, 4, 1, 6, 0, 3, 0, 1, 5, 4, 1, 1, 2, 6])
);
