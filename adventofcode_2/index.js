const fs = require("fs");

const arrayOfInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");

// @see string to number conversion https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/


let line;
let numberOfOccurence;
let letter;
let password;
let numberMin;
let numberMax;
let count;
let result = 0;
for (let i = 0; i < arrayOfInput.length - 1; i++) {
  line = arrayOfInput[i].split(" ");
  numberOfOccurence = line[0].split("-");
  letter = line[1][0];
  password = line[2];
  numberMin = parseInt(numberOfOccurence[0]);
  numberMax = parseInt(numberOfOccurence[1]);
  count = 0;
  for (let j = 0; j < password.length; j++) {
    if (password.charAt(j) === letter) {
      count++;
    }
  }
  if (numberMin <= count && count <= numberMax) {
    result += 1;
  }
  console.log(result);
}




