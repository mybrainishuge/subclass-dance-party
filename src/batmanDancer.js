var batmanDancer = function(top, left, timeBetweenSteps) {
  superheroDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/batman.gif" class="dancer batman">');
  this.setPosition(top, left);
};


batmanDancer.prototype = Object.create(superheroDancer.prototype);
batmanDancer.prototype.constructor = batmanDancer;
