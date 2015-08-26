var BlinkyDancer = function(top, left, timeBetweenSteps){
  LineDancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(LineDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  LineDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
