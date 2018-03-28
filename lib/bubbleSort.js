const unsortedArray = require('../lib/randomArrayGenerator.js');

function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i; j++){
      if(array[j - 1] > array[j]){
        [array[j - 1], array[j]] = [array[j], array[j - 1]]
      }
    }
  }
  return array
}

module.exports = bubbleSort;
