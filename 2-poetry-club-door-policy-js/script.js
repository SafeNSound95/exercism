"use strict";
const str = "him";
console.log(str.slice(1));

function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const str2 = "WeJi";
const x = frontDoorPassword("shire");
const y = frontDoorPassword("Shire");
const z = frontDoorPassword("ShIRe");
console.log(frontDoorPassword(str2));

console.log(x);
console.log(y);
console.log(z);
console.log(str2);

function backDoorResponse(line) {
  return line.trim().slice(-1);
}

const str3 = "Lulry";
const str4 = "Lulrx  ";

console.log(backDoorResponse(str3));
console.log(backDoorResponse(str4));
