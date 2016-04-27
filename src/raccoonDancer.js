var Raccoon = function(top, left, timeBetweenSteps) {
  Animal.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/raccoon.gif" class="dancer animal"></span>');
  this.setPosition(top, left);
};


Raccoon.prototype = Object.create(Animal.prototype);
Raccoon.prototype.constructor = Raccoon;
