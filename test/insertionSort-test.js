const {assert} = require('chai');
const insertionSort = require('../lib/insertionSort.js');
const randomArray = require('../lib/randomArrayGenerator.js');

describe('Insertion sort', () => {

  it('Should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('Should return an array', () => {
    let unsortedArray = [ 1, 9, 4, 8, 4, 7 ];
    let sortedArray = insertionSort(unsortedArray);

    assert.isArray(sortedArray)
  })

  it('Should return an array with the same length', () => {
    let unsortedArray = [ 1, 9, 4, 8, 6, 10, 3, 8 ];
    let sortedArray = insertionSort(unsortedArray);

    assert.equal(sortedArray.length, 8)

  })

  it('Should return a sorted array', () => {
    let unsortedArray = [ 1, 9, 4, 8 ];
    let sortedArray = [ 1, 4, 8, 9 ];
    let result = insertionSort(unsortedArray);

    assert.deepEqual(result, sortedArray);
  })

  it('Should sort an array of random letters', () => {
    let unsortedArray = ['e', 'a', 'd', 'f', 'b', 'g', 'c'];
    let sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let result = insertionSort(unsortedArray);

    assert.deepEqual(result, sortedArray)
  })

  it('Should be able to sort an array of n number', () => {
    let array = randomArray(25000, 100);
    let result = insertionSort(array);

    assert.deepEqual(result, array.sort(function (a, b) {return a - b}))
  })

})