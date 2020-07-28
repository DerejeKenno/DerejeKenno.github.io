/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* global describe */
/* global it */
/* global assert */
/* global sum */
/* global multiply */
/* global strRev */
/* global fltrLongWords */

describe("sum", function() {
    it("sums up an array", function() {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
});

describe("multiply", function() {
    it("multiplies values in an array", function() {
        assert.equal(multiply([1, 2, 3, 4]), 24);
    });
});

describe("strRev", function() {
    it("reverses a given string passed as parameter", function() {
        assert.equal(strRev("hellomyworld"), "dlrowymolleh");
    });
});

describe("fltrLongWords", function() {
    it("filters  words longer than passed parameter", function() {
        assert.equal(2, fltrLongWords(["ab", "abc", "c", "dere"], 2).length);
    });
});