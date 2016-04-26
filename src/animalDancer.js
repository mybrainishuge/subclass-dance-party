var animalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};


animalDancer.prototype = Object.create(makeDancer.prototype);
animalDancer.prototype.constructor = animalDancer;
