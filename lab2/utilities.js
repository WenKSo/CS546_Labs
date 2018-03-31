//Name: Wenkang Su
//CWID: 10409507
//I pledge my honor that I have abided by the Stevens Honor System.

module.exports = {
    description: "This is a utilities tool for CS-546 Lab2",
	deepEquality: (obj1, obj2) => {
    if (obj1 === undefined || obj2 === undefined){
        throw "Missing Input";
    }
    if (typeof obj1 !== 'object'){
        throw "obj1 is not an object";
    }
    if (typeof obj2 !== 'object'){
        throw "obj2 is not an object";
    }
    if (obj1 === obj2) {
        return true;
    }
    var oneKeyArray = Object.keys(obj1);
    var twoKeyArray = Object.keys(obj2);
    if (oneKeyArray.length != twoKeyArray.length){
        return false;
    }
    for (var i = 0; i < oneKeyArray.length; i++) { 
        if(oneKeyArray[i] !== twoKeyArray[i] || 
            obj1[oneKeyArray[i]] !== obj2[twoKeyArray[i]]) {
            return false;
        }
    }
    return true;
},

	uniqueElements: (arr) => {
    if(arr === undefined){
        throw "Missing input array.";
    } 
    if(!Array.isArray(arr)){
        throw "Input is not an array.";
    }
    arr.sort();
    const arrlen = arr.length;
    if (arrlen == 0){
        return 0;
    }
    var counter = 1;
    for(var i = 0; i < arrlen - 1; i++){
        if(arr[i] !== arr[i + 1]){
        counter ++;
        }
    }
    return counter;
},

	countOfEachCharacterInString: (str) => {
    if(str === undefined){
        throw "Missing input string.";
    }
    if(typeof str !== 'string'){
        throw "The input should be a string.";
    }
    var keyArray = str.split("");
    keyArray.sort();
    var dict = {};
    for (var i = 0; i < keyArray.length; i++){
        if (!dict[keyArray[i]]){
            dict[keyArray[i]] = 0;    
        }
        dict[keyArray[i]]++;
    }
    return dict;
}
}