$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  });


  $('.addRaccoonButton').on('click', function(event) {
    var raccoonMakerFunctionName = $(this).data('raccoon-maker-function-name');
    var raccoonMakerFunction = window[raccoonMakerFunctionName];

    var animal = new raccoonMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(animal.$node);
    window.dancers.push(animal);
  });


  $('.addSpidermanButton').on('click', function(event) {
    var superheroMakerFunctionName = $(this).data('spiderman-maker-function-name');
    var superheroMakerFunction = window[superheroMakerFunctionName];

    var superhero = new superheroMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(superhero.$node);

    window.dancers.push(superhero);

    $('.spiderman').on('click', function(event) {
      var context = this;
      var move = function() {  
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        var newx = Math.floor(Math.random() * h);
        var newy = Math.floor(Math.random() * w);

        $(context).animate({top: newx, left: newy}, 3000);

      };
      var refresh = setInterval(move, 1);

      $(this).on('click', function(event) {
        clearInterval(refresh);
      });
    });
  });

  $('.addBatmanButton').on('click', function(event) {
    var superheroMakerFunctionName = $(this).data('batman-maker-function-name');
    var superheroMakerFunction = window[superheroMakerFunctionName];

    var superhero = new superheroMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(superhero.$node);

    window.dancers.push(superhero);
  });


  $('.moveLeft').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).animate({left: 10, display: 'inline'}, 3000);
    }
  });



  //swap positions of two elements
  //if two elements come within 2-5px of each other do this
  //need to get position values of each element -- alert($(this).css('top')); alert($(this).css('left'));
    //will need to subtract top values from each other and square them
    //will need to subtract left values from each other and square them
      //add together; square root = distance
        //if distance is <= (2-5), do this
  $('.dancer').on('click', function(event){
    var h = $(this).css('top');
    var w = $(this).css('left');
    var neighbors = {};
    for (var i = 0; i < window.dancers.length; i++) {
      var h2 = $(window.dancers[i].$node).css('top');
      var w2 = $(window.dancers[i].$node).css('left');

      var distance = Math.sqrt((h - h2) ^ 2 + (w - w2) ^ 2);
      neighbors[window.dancers[i]] = distance;
    }
    var smallest;
    for (var item in neighbors) {
      
      var previous = previous || neighbors[window.dancers[0]];

      if (neighbors[item] < previous) {
        smallest = item;
        previous = neighbors[item];
      }
    }

    

  });

});

