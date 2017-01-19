var pigLatin = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if ((word.length === 1) && (vowels.indexOf(word[0]) > -1)) {
    word += 'ay';
    return true;
  } else if ((vowels.indexOf(word[0]) > -1)) {
    var wordToArr = word.split(" ");
    for (var i=0; i < wordToArr.length; i++) {
      wordToArr[i] += 'ay';
    }
    console.log(wordToArr);
    return true;
  } else {
    return false;
  }
}






$(function() {
  $('form#pig-latin').submit(function(e) {
    var word = $('input#word').val();
    var wordLower = word.toLowerCase();
    var result = pigLatin(wordLower);
    $('#result').text(result);
    e.preventDefault();
  });
});
