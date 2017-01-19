var vowels = ['a', 'e', 'i', 'o', 'u'];
var wordSlice = [];

var pigLatin = function(wordToArr, word, wordSlice) {
  if ((word.length === 1) || (vowels.indexOf(word[0]) > -1)) {
    //console.log(word);
    //console.log(wordToArr);
    return true;
  } else if (vowels.indexOf(word[1]) > -1) {
    for (var j=0; j< wordToArr.length; j++) {
      var firstLetter = wordToArr[j].slice(0,1);
    }
    var wordRemainder = word.slice(1);
    var result = wordRemainder + firstLetter + "ay";
    console.log(result);
    return true;
  } else if (vowels.indexOf(word[2]) > -1) {
     for (var k=0; k< wordToArr.length; k++) {
       var firstLetter = wordToArr[k].slice(0,2);
     }
     var wordRemainder = word.slice(2);
     var result = wordRemainder + firstLetter + "ay";
     console.log(result);
     return true;
  } else {
    return false;
  }
}






$(function() {
  $('form#pig-latin').submit(function(e) {
    var word = $('input#word').val();
    var wordToArr = word.split(" ");
    var wordLower = word.toLowerCase();
    for (var i=0; i < wordToArr.length; i++) {
      wordToArr[i] += 'ay';
    }
    var result = pigLatin(wordToArr, word, wordSlice);
    $('#result').text(result);
    e.preventDefault();
  });
});
