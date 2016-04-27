var refreshIntervals = [];

$(document).ready(function() {
  window.dancers = [];

  var swap = function() {
    $('.dancer').on('click', function(event) {
      var h = $(this).position().top;
      var w = $(this).position().left;

      var shortestDistance = Infinity;
      var distance, closestElement, h2, w2;

      for (var i = 0; i < window.dancers.length; i++) {
        h2 = $(window.dancers[i].$node).position().top;
        w2 = $(window.dancers[i].$node).position().left;
        distance = Math.sqrt(Math.pow(h - h2, 2) + Math.pow(w - w2, 2));

        if (distance > 0 && distance < shortestDistance) {
          shortestDistance = distance;
          closestElement = window.dancers[i].$node;
        }
      }

      h2 = $(closestElement).position().top;
      w2 = $(closestElement).position().left;

      $(closestElement).css({top: h, left: w});
      $(this).css({top: h2, left: w2});
    });
  };

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

    $(animal.$node).hover(function(event) {
      $(this).fadeOut('slow');
    }, function() {
      $(this).fadeIn('slow');
    });

    // $(animal.$node).on('mouseover', function(event) {
    //   $(this).fadeOut('slow');
    //   // $(this).hide();
    //   // $(this).fadeIn('slow');
    // });

    // $(animal.$node).on('mouseout', function(event) {
    //   // $(this).fadeOut('slow');
    //   $(this).fadeIn('slow');
    // });

    swap();
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

    $(superhero.$node).on('click', function(event) {

      var $context = $(this);
      var move = function() {
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        var newx = Math.floor(Math.random() * h);
        var newy = Math.floor(Math.random() * w);

        $($context).stop().animate({top: newx, left: newy}, 100);
      };

      refreshIntervals.push(setInterval(move, 100));
    });

    swap();

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

    swap();

  });


  $('.lineUp').on('click', function(event) {
    var x = $(window).height() * 0.5;
    var y = 100;

    for (var k = 0; k < refreshIntervals.length; k++) {
      clearInterval(refreshIntervals[k]);
    }

    refreshIntervals = [];

    $('.dancers').stop();

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(x, y);
      y += 150;
    }
  });


  $('.disperse').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.setPosition(
        $('body').height() * Math.random(),
        $('body').width() * Math.random()
      );
    });
  });


  // $('.crazy').on('click', function(event) {
  //   window.dancers.forEach(function(dancer) {
  //     var $dancer = dancer.$node;

  //     var move = function() {
  //       var h = $(window).height() - 50;
  //       var w = $(window).width() - 50;
  //       var newx = Math.floor(Math.random() * h);
  //       var newy = Math.floor(Math.random() * w);

  //       $($dancer).stop().animate({top: newx, left: newy}, 100);
  //     };

  //     refreshIntervals.push(setInterval(move, 100));

  //   });
  // });


  $('.enlarge').on('click', function(event) {
    $('.spiderman').attr('src', 'assets/fat-spiderman.gif');
    $('.spiderman').css({'width': 125, 'height': 200});
  });

});

