"use strict";

// Calculate temperature amplitude using two arrays.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-5, 10, 8, -10, 5, 'test', 15, 25, 33];

function calcTempAmplitude(tempArray1, tempArray2) {
  let tempArray = tempArray1.concat(tempArray2);

  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    if (typeof tempArray[i] !== 'number') {
      continue;
    }
    if (tempArray[i] > max) {
      max = tempArray[i];
    }
    if (tempArray[i] < min) {
      min = tempArray[i];
    }
  }
  return `Temperature amplitude: ${max - min}`;
}

let temp = document.getElementById("temperature");
temp.innerHTML = calcTempAmplitude(temperatures, temperatures2);
console.log(calcTempAmplitude(temperatures, temperatures2));

