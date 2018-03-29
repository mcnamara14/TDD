let unsortedArray = (arrayLength = 1, maxNum = 0) => {
  array = [];
  for(let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.floor(Math.random() * maxNum + 1);
    array.push(randomNumber);
  } 
  return array;
}

module.exports = unsortedArray;

