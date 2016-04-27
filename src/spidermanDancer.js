var Spiderman = function(top, left, timeBetweenSteps) {
  Superhero.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/spiderman.gif" class="dancer spiderman superhero">');
  this.setPosition(top, left);
};


Spiderman.prototype = Object.create(Superhero.prototype);
Spiderman.prototype.constructor = Spiderman;
