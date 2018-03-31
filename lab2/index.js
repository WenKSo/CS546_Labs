//Name: Wenkang Su
//CWID: 10409507
//I pledge my honor that I have abided by the Stevens Honor System.

const geometry = require("./geometry");
const utilities = require("./utilities");

//TEST Geo
console.log(geometry.volumeOfRectangularPrism(2,2,2));
console.log(geometry.volumeOfRectangularPrism(2,2));
console.log(geometry.volumeOfRectangularPrism(2,2,null));
console.log(geometry.volumeOfRectangularPrism(2,"Hello",2));
console.log(geometry.volumeOfRectangularPrism(10,-2,-2));

console.log(geometry.surfaceAreaOfRectangularPrism(2,2,2));
console.log(geometry.surfaceAreaOfRectangularPrism(2,2));
console.log(geometry.surfaceAreaOfRectangularPrism(2,2,0));
console.log(geometry.surfaceAreaOfRectangularPrism("Hello",2,2));
console.log(geometry.surfaceAreaOfRectangularPrism(-10,2,2));

console.log(geometry.volumeOfSphere());
console.log(geometry.volumeOfSphere("Hello"));
console.log(geometry.volumeOfSphere(false));
console.log(geometry.volumeOfSphere(-10));
console.log(geometry.volumeOfSphere(0));

console.log(geometry.surfaceAreaOfSphere());
console.log(geometry.surfaceAreaOfSphere("Hello"));
console.log(geometry.surfaceAreaOfSphere(false));
console.log(geometry.surfaceAreaOfSphere(-10));
console.log(geometry.surfaceAreaOfSphere(0));

//Test Uti
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
console.log(utilities.deepEquality(first, second)); // false
console.log(utilities.deepEquality(first,third));
console.log(utilities.deepEquality(second,third));// true
const obj1 = {a: 1};
const obj2 = {b: 1};
const obj3 = {a: 100}
console.log(utilities.deepEquality(obj1, obj2));//false
console.log(utilities.deepEquality(obj1, obj3));//false

const testArr = ["a", "a", "b", "a", "b", "c","F","a"];
console.log(utilities.uniqueElements(testArr));
console.log(utilities.uniqueElements());
console.log(utilities.uniqueElements([]));
console.log(utilities.uniqueElements("Hello"));
console.log(utilities.uniqueElements([null]));

const test1 = "Hello, the pie is in the oven";
const test2 = "";
const test3 = [];
const test4 = null;
const charMap1 = utilities.countOfEachCharacterInString(test1);
console.log(charMap1);
const charMap2 = utilities.countOfEachCharacterInString(test2);
console.log(charMap2);
const charMap3 = utilities.countOfEachCharacterInString(test3);
console.log(charMap3);
const charMap4 = utilities.countOfEachCharacterInString(test4);
console.log(charMap4);
const charMap5 = utilities.countOfEachCharacterInString();
console.log(charMap5);
