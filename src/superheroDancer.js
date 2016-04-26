var superheroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};


superheroDancer.prototype = Object.create(makeDancer.prototype);
superheroDancer.prototype.constructor = superheroDancer;
