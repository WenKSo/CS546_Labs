//Name: Wenkang Su
//I pledge my honor that I have abided by the Stevens Honor Sytem.

const questionOne = function questionOne(arr) {
    var myNumArraySquared = arr.map((x) => {
        return x * x;
    });
    
    var sumOfSquared = myNumArraySquared.reduce((currentTotal, newValue) => {
        return currentTotal + newValue;
    },0);
    
    return sumOfSquared; 
}

const questionTwo = function questionTwo(num) { 
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    var textArray = text.split("");
    var resultNum = textArray.filter((x) => {
        return x == 'a'|| x == 'A'|| x == 'o'||x == 'O'||x == 'e'||
            x == 'E'||x == 'u'||x == 'U'||x == 'i'||x == 'I';
    });
    return resultNum.length;
}

const questionFour = function questionFour(num) {
    if(num < 0){
        return NaN;
    }
    if(num == 0){
        return 1;
    }
    return num * questionFour(num - 1);
}

module.exports = {
    firstName: "Wenkang", 
    lastName: "Su", 
    studentId: "10409507",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};

//const arro = [1,2,3,4];
//console.log(questionOne(arro));
//console.log(questionTwo(11));
//console.log(questionThree("helloUke"));
//console.log(questionFour(5));