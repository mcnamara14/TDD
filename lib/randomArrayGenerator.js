let unsortedArray = (arrayLength, maxNum) => {
  return Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxNum + 1));
}

module.exports = unsortedArray;