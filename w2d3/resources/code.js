/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-extend-native */
/* eslint-disable linebreak-style */

//string filter
String.prototype.filter = function filter(str) {
    const s = `${str} `;
    if (this.indexOf(str) < 0) {
        return this;
    }

    return this.replace(s, '');
};

//Bubble sort
Array.prototype.bubbleSort = function bubbleSort() {
    let elmSwaped;
    let len = this.length - 1;
    const sortedArr = this;
    do {
        elmSwaped = false;
        for (let i = 0; i < len; i++) {
            if (sortedArr[i] > sortedArr[i + 1]) {
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[i + 1];
                sortedArr[i + 1] = temp;
                elmSwaped = true;
            }
        }
        len--;
    } while (elmSwaped);
    return sortedArr;
};

//creat teacher object
const Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function() {
    return `${this.name}, ${this.age} years old. `;
};
const Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = new Teacher();
teacher.initialize('Adam', 45);
teacher.teach('Inheritance');
console.log(teacher.describe());