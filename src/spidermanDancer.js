var spidermanDancer = function(top, left, timeBetweenSteps) {
  superheroDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/spiderman.gif" class="spiderman"></span>');
  this.setPosition(top, left);
};


spidermanDancer.prototype = Object.create(superheroDancer.prototype);
spidermanDancer.prototype.constructor = spidermanDancer;
