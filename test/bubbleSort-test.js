const {assert} = require('chai');
require('locus');
const bubbleSort = require('../lib/bubbleSort.js');

describe('Bubble sort', () => {

  it('Should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('Should return an array', () => {
    let unsortedArray = [1, 9, 4, 8, 4, 7];
    let sortedArray = bubbleSort(unsortedArray);

    assert.isArray(sortedArray)
  })

  it('Should return an array with the same length', () => {
    let unsortedArray = [1, 9, 4, 8, 6, 10, 3, 8];
    let sortedArray = bubbleSort(unsortedArray);

    assert.equal(sortedArray.length, 8)

  })

  it('Should return a sorted array', () => {
    let unsortedArray = [1, 9, 4, 8];
    let sortedArray = [ 1, 4, 8, 9 ];
    
    assert.notEqual(unsortedArray, sortedArray);
    bubbleSort(unsortedArray);
    assert.deepEqual(unsortedArray, sortedArray);
  })

  it('Should sort an array of random letters', () => {
    let unsortedArray = ['e', 'a', 'd', 'f', 'b', 'g', 'c'];
    let sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    bubbleSort(unsortedArray);
    assert.deepEqual(unsortedArray, sortedArray)
  })

})