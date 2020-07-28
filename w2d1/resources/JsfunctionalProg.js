"use strict"

function sum(arr) {
    return arr.reduce(function(accum, e) { return accum + e; }, 0);
}

function multiply(arr) {
    return arr.reduce(function(accum, e) { return accum * e; }, 1);
}

function strRev(str) {
    return str.split('').reverse().join('');
}

function fltrLongWords(words, i) {
    return words.filter(w => w.length > i);
}