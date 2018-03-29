const {assert} = require('chai');
const quickSort = require('../lib/quickSort.js');
const randomArray = require('../lib/randomArrayGenerator.js');

describe('Quick sort', () => {

  it('Should be a function', () => {
    assert.isFunction(quickSort)
  })

  it('Should return an array', () => {
    let unsortedArray = [ 1, 9, 4, 8, 4, 7 ];
    let sortedArray = quickSort(unsortedArray);

    assert.isArray(sortedArray)
  })

  it('Should return an array with the same length', () => {
    let unsortedArray = [ 1, 9, 4, 8, 6, 10, 3, 8 ];
    let sortedArray = quickSort(unsortedArray);

    assert.equal(sortedArray.length, 8)

  })

  it('Should return a sorted array', () => {
    let unsortedArray = [ 1, 9, 4, 8 ];
    let sortedArray = [ 1, 4, 8, 9 ];
    let result = quickSort(unsortedArray);

    assert.deepEqual(result, sortedArray);
  })

  it('Should sort an array of random letters', () => {
    let unsortedArray = ['e', 'a', 'd', 'f', 'b', 'g', 'c'];
    let sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let result = quickSort(unsortedArray);

    assert.deepEqual(result, sortedArray)
  })

  it('Should be able to sort an array of n number', () => {
    let array = randomArray(400000, 1000);
    let result = quickSort(array);

    assert.deepEqual(result, array.sort(function (a, b) {return a - b}))
  })

})