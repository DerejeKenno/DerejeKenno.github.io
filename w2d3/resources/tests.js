/* global describe */
/* global it */
/* global assert */

// this test tests the filter function 
describe('filter', () => {
    it('takes a word argument and removes that word from the string', () => {
        const test = 'This house is not nice!';
        assert.equal(test.filter('not'), 'This house is nice!');
    });
});
//This test tests the bubbleSort 
describe('bubbleSort', () => {
    it('takes an array of numbers and apply bubble sort', () => {
        const actual = [5, 4, 1, 3, -2, 0].bubbleSort();
        const expected = [-2, 0, 1, 3, 4, 5];
        for (let i = 0; i < actual.length; i++) {
            assert.equal(actual[i], expected[i]);
        }
    });
});