// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

function wordOccurances(text){
    let wordArray = text.split(" ");
    let count_dict = wordArray.reduce(function (array, word){
        if(word in array) array[word] ++; 
        else array[word] = 1;
        return array;
    },{});
    return count_dict;
}

module.exports = {
    simplify: (text) => {
        if(!text) throw "No text provided";
        if (typeof text !== "string") throw "The text is not a string";
        return text.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/[\t\n\s]/g,' ');
    },
    createMetrics: (text) => {
		if(!text) throw "No text provided";
        if (typeof text !== "string") throw "The text is not a string";   
        text = module.exports.simplify(text);
        let result_metrics = new Object();
        result_metrics.totalLetters = text.match(/[A-Za-z]/g).length;
        result_metrics.totalWords = text.match(/\w+/g).length;
        result_metrics.uniqueWords = Object.keys(wordOccurances(text)).length;
        result_metrics.longWords = text.match(/\w{6,}/g).length;
        result_metrics.averageWordLength = (result_metrics.totalLetters / result_metrics.totalWords).toFixed();
        result_metrics.wordOccurrences = wordOccurances(text);
        return result_metrics;
    }
}