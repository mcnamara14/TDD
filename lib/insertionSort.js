function insertionSort(array) {
  for (let i = 0; i <  array.length; i++) {
  let numToSort = array[i]
  
    for (var j = i - 1; array[j] > numToSort; j--) {
      array[j + 1] = array[j]
    }

     array[j + 1] = numToSort

    }
    
  return array
}

module.exports = insertionSort

