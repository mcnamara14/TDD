const quickSort = array => {
  if (array.length <= 1) {
    return array
  }

  let pivot = array[array.length - 1]
  let low = []
  let high = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      low.push(array[i])
    } else {
      high.push(array[i])
    }
  }

  const lowArray = quickSort(low)
  const highArray = quickSort(high)
  let finalArray =  lowArray.concat(pivot, highArray)

  return finalArray
}

module.exports = quickSort;
