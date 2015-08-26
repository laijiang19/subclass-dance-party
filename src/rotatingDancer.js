var RotatingDancer = function(top, left, timeBetweenSteps){
  LineDancer.call(this, top, left, timeBetweenSteps*2);

  this.$node.animate({
    height: Math.random()*70+50
  });
  this.degree = undefined; 
};

RotatingDancer.prototype = Object.create(LineDancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.step = function(){

  LineDancer.prototype.step.call(this);
  this.degree = Math.random() * 180;
  this.$node.css({
    '-webkit-transform': 'rotate(' + this.degree + 'deg)',
    '-moz-transform': 'rotate(' + this.degree + 'deg)',
    '-ms-transform': 'rotate(' + this.degree + 'deg)',
    '-o-transform': 'rotate(' + this.degree + 'deg)',
    'transform': 'rotate(' + this.degree + 'deg)',
  });
};

