const fs = require("fs");

const arrayOfInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  .map(x => x.split(""))
;

function renderArray(array) {
  console.log(array.map(x => x.join("")).join("\n"));
}

// after
for (let i = 0; i < arrayOfInput.length; i++) {
  const position = (i * 3) % 31;
  const currentStep = arrayOfInput[i][position];

  if (currentStep === ".") {
    arrayOfInput[i][position] = "0";
  }

  if (currentStep === "#") {
    arrayOfInput[i][position] = "X";
  }
}

renderArray(arrayOfInput);
console.log(countElement(arrayOfInput));

function countElement(array2d) {
  const result = {
    "X": 0,
    "0": 0,
    "#": 0,
    ".": 0,
  };

  array2d
    .forEach(line => line
      .forEach(cell => Object
        .keys(result)
        .forEach(value => {
          if (cell === value) result[value]++;
        })
      )
    )

  return result;
}