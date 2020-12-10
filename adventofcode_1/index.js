const fs = require("fs");

const arrayOfInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  // @see string to number conversion https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
  .map((v) => Number(v));

function sum(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }

  throw new Error("no result");
}

console.log(sum(arrayOfInput));
