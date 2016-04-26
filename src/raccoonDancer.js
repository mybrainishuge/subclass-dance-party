var raccoonDancer = function(top, left, timeBetweenSteps) {
  animalDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/raccoon.gif" class="dancer animal"></span>');
  this.setPosition(top, left);
};


raccoonDancer.prototype = Object.create(animalDancer.prototype);
raccoonDancer.prototype.constructor = raccoonDancer;
