const {assert} = require('chai');
require('locus');
const bubbleSort = require('../lib/bubbleSort.js');
const unsortedArray = require('../lib/randomArrayGenerator.js');

describe('Bubble sort', () => {

  it('Should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('Should return an array', () => {
    let unsortedArray = [ 1, 9, 4, 8, 4, 7 ];
    let sortedArray = bubbleSort(unsortedArray);

    assert.isArray(sortedArray)
  })

  it('Should return an array with the same length', () => {
    let unsortedArray = [ 1, 9, 4, 8, 6, 10, 3, 8 ];
    let result = bubbleSort(unsortedArray);


    assert.equal(result.length, 8)

  })

  it('Should return a sorted array', () => {
    let unsortedArray = [ 1, 9, 4, 8 ];
    let sortedArray = [ 1, 4, 8, 9 ];
    let result = bubbleSort(unsortedArray);

    assert.deepEqual(result, sortedArray);
  })

  it('Should sort an array of random letters', () => {
    let unsortedArray = ['e', 'a', 'd', 'f', 'b', 'g', 'c'];
    let sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let result = bubbleSort(unsortedArray);

    assert.deepEqual(result, sortedArray)
  })

  it('Should be able to sort an array of n number', () => {
    let array = unsortedArray(12000, 4);
    let result = bubbleSort(array);

    assert.deepEqual(result, array.sort(function (a, b) {  return a - b;  }))
  })

})