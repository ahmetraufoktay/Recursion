#!/usr/bin/env node

function fibs(n) {
  let fibArray = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  console.log(fibArray);
}

function fibsRec(n) {
  return n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

//To test the iterative fibonacci function  uncomment below
/* console.log("Iterative: " + fibs(7)); */

//To test the recursive fibonacci function  uncomment below
/* console.log("Recursive:" + fibsRec(8)); */
