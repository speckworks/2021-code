// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
let a = n.toString()


if(a.charAt(0) == "-"){
a = a.substring(1);
a = a.split('').reverse().join('');
a = "-".concat(a);
a = parseInt(a, 10);
return a
//console.log(a);
} else {

a = a.split('').reverse().join('');
a = parseInt(a, 10);
console.log(a);
return a;
}
}
module.exports = reverseInt;
