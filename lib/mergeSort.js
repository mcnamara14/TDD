const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }

  let midpoint = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midpoint)
  let rightArray = array.slice(midpoint);
  const left = mergeSort(leftArray);
  const right = mergeSort(rightArray)

  return merge(left, right)
}

const merge = (left, right) => {
  let sorted = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())  
    } else {
      sorted.push(right.shift())
    }
  }

  sorted.push(...left, ...right)

  return sorted
}

module.exports = mergeSort;
