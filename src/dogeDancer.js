var DogeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps*2);

  this.image = "img/rsz_doge.png";
  // this.$node = $('<span><img class="dogeDancer" src="' + this.image + '"></img></span>');

  // var styleSettings = {
  //   // // height: dim,
  //   // // width: 0,
  //   // // "border-width": Math.random() * 3,
  //   top: top,
  //   left: left
  //   width: 50,
  //   background: "url(" + this.image + ")"

  // };

  this.$node.css("border", "none");
  this.$node.css("height", "64px");
  this.$node.css("width", "64px");
  this.$node.css("border-radius", "0px");
  this.$node.css("background", "url(" + this.image + ")");
  this.$node.css("display", "inline-block");
  this.$node.css("clear", "both");
  this.$node.addClass('dogeDancer');
};

DogeDancer.prototype = Object.create(Dancer.prototype);
DogeDancer.prototype.constructor = DogeDancer;
DogeDancer.prototype.step = function(){

  // Dancer.prototype.step.call(this);
  // this.degree = Math.random() * 180;
  // this.$node.css({
  //   '-webkit-transform': 'rotate(' + this.degree + 'deg)',
  //   '-moz-transform': 'rotate(' + this.degree + 'deg)',
  //   '-ms-transform': 'rotate(' + this.degree + 'deg)',
  //   '-o-transform': 'rotate(' + this.degree + 'deg)',
  //   'transform': 'rotate(' + this.degree + 'deg)',
  // });
};

