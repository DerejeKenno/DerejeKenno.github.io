/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

//check whether a charater is vowel or not 
function isVowel(char) {
    if (char.length > 1) {
        return false;
    } else if (char.toUpperCase() === "A" || char.toUpperCase() === "E" || char.toUpperCase() === "I" ||
        char.toUpperCase() === "O" || char.toUpperCase() === "U") {
        return true;
    } else {
        return false;
    }
}

//sum array of numbers
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

//multiply array numbers
function mult(arr) {
    let p = 1;
    for (let i = 0; i < arr.length; i++) {
        p *= arr[i];
    }
    return p;
}
//string reverse
function streverse(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}

//longest word among array of words
function lngstword(words) {
    let l = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > l) {
            l = words[i].length;
        }

    }
    return l;
}
//return long words among array of words
function longwords(words, i) {
    let lngwords = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            lngwords.push(words[j]);
        }
    }
    return lngwords;
}

//test number of words longer than i in the array
function testTwoArrays(arr, i) {
    return longwords(arr, i).length;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of isVowel(a) is true " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of sum([2,4,6]) is 12 " + myFunctionTest(12, sum([2, 4, 6])));
console.log("Expected output of mult([2,4,6]) is 48 " + myFunctionTest(48, mult([2, 4, 6])));
console.assert("dereje" === streverse("ejered"));
console.assert(6 === lngstword(["de", "re", "j", "dereje"]));
console.assert(2 === testTwoArrays(["ab", "cd", "abc", "bcd"], 2));