$(document).ready(function() {
  let suitsArray = ["hearts", "diamonds", "spades", "clubs"];
  let ranksArray = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suitsArray.forEach(function(suit) {
    ranksArray.forEach(function(rank) {
      $('ul').append('<li>' + rank + ' of ' + suit + '</li>');
    });
  });
});