var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps*2);

  this.$node.animate({
    height: Math.random()*70+20
  });
  this.degree = undefined; 
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  this.degree = Math.random() * 180;
  this.$node.css({
    '-webkit-transform': 'rotate(' + this.degree + 'deg)',
    '-moz-transform': 'rotate(' + this.degree + 'deg)',
    '-ms-transform': 'rotate(' + this.degree + 'deg)',
    '-o-transform': 'rotate(' + this.degree + 'deg)',
    'transform': 'rotate(' + this.degree + 'deg)',
  });
};

