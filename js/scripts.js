var pigLatin = function(word) {
  return false;
}






$(function() {
  $('form#pig-latin').submit(function(e) {
    var word = parseInt($('input#word').val());
    var result = pigLatin(word);
    $('#result').text(result);
    e.preventDefault();
  });
});
