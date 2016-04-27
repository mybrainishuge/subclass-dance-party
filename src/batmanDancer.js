var Batman = function(top, left, timeBetweenSteps) {
  Superhero.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/batman.gif" class="dancer batman superhero">');
  this.setPosition(top, left);
};


Batman.prototype = Object.create(Superhero.prototype);
Batman.prototype.constructor = Batman;
