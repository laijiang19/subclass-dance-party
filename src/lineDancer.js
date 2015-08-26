// Creates and returns a new dancer object that can step
var LineDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();

  this.setPosition(top, left);
};

LineDancer.prototype = Object.create(Dancer.prototype);

LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

LineDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var dim = Math.random() * 100 + 100;
  var styleSettings = {
    height: dim,
    width: 3,
    // "border-width": Math.random() * 3,
    top: top,
    left: left,
  };
  this.$node.animate(styleSettings);
};

Dancer.prototype.lineUp = function(){
  clearTimeout(this.timer);
};