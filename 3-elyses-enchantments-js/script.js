"use strict";
function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

console.log(setItem([1, 2, 4, 1], 2, 6)); //[1,2,6,1]
console.log(setItem([1, 2, 3], 0, 7)); //[7,1,2,3]

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}
const newCard = 8;
console.log(insertItemAtTop([5, 9, 7, 1], newCard));

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}
const position = 2;
console.log(removeItem([3, 2, 6, 4, 8], position));
//[3,2,4,8]

const arr = [1, 2, 3, 4, 5, 6];
//[1,2,3,99,5,6]

// this is the reason why we return the 'MODIFIED' array from every function, so that we can chain function calls. this is known as 'daisy-chaining' AKA the 'builder pattern'.

console.log(
  insertItemAtTop(removeItem(setItem(arr, 3, 99), 1), 100) // [1,3,99,5,6,100]
);

function removeItemFromTop(cards) {
  cards.splice(-1);
  return cards;
}

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(removeItemFromTop(arr2));

console.log(arr);
