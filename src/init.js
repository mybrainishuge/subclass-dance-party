$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });


  $('.addRaccoonButton').on('click', function(event) {
    var raccoonMakerFunctionName = $(this).data('raccoon-maker-function-name');
    var raccoonMakerFunction = window[raccoonMakerFunctionName];

    var animal = new raccoonMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(animal.$node);
  });


  $('.addSpidermanButton').on('click', function(event) {
    var superheroMakerFunctionName = $(this).data('spiderman-maker-function-name');
    var superheroMakerFunction = window[superheroMakerFunctionName];

    var superhero = new superheroMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(superhero.$node);
  });


  $('.addBatmanButton').on('click', function(event) {
    var superheroMakerFunctionName = $(this).data('batman-maker-function-name');
    var superheroMakerFunction = window[superheroMakerFunctionName];

    var superhero = new superheroMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(superhero.$node);
  });

});

