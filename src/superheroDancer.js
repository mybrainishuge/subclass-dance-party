var Superhero = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};


Superhero.prototype = Object.create(Dancer.prototype);
Superhero.prototype.constructor = Superhero;
