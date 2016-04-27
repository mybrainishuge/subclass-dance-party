var Animal = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};


Animal.prototype = Object.create(Dancer.prototype);
Animal.prototype.constructor = Animal;
