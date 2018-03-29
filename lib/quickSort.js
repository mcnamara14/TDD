const quickSort = array => {
  if (array.length <= 1) {
    return array
  }

  let low = []
  let high = []
  let pivot = array[array.length - 1]

  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] <= pivot) {
      low.push(array[j])
    } else {
      high.push(array[j])
    }
  }

  const lowArray = quickSort(low)
  const highArray = quickSort(high)
  let finalArray =  lowArray.concat(pivot, highArray)

  return finalArray
}

module.exports = quickSort;
