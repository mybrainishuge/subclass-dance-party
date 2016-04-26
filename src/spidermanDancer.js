var spidermanDancer = function(top, left, timeBetweenSteps) {
  superheroDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/spiderman.gif" class="spiderman"></span>');
  this.setPosition(top, left);
};


spidermanDancer.prototype = Object.create(superheroDancer.prototype);
spidermanDancer.prototype.constructor = spidermanDancer;

// makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
//   makeDancer.prototype.step.call(this, timeBetweenSteps);
//   var h = $(window).height() - 50;
//   var w = $(window).width() - 50;
//   var newx = Math.floor(Math.random() * h);
//   var newy = Math.floor(Math.random() * w);

//   $('.spiderman').animate({top: newx, left: newy}, 3000);
// };