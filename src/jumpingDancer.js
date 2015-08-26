var JumpingDancer = function(top, left, timeBetweenSteps){
  LineDancer.call(this, top, left, timeBetweenSteps*2);
  this.cTop = top;
  this.cLeft = left;
  this.plusOrMinus = undefined;
};

JumpingDancer.prototype = Object.create(LineDancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.step = function(){
  
  LineDancer.prototype.step.call(this);

  this.plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  this.cTop = this.cTop + this.plusOrMinus*(Math.random()*50);
  this.cLeft = this.cLeft + this.plusOrMinus*(Math.random()*100);
  if (this.cTop < 0){
    this.cTop = 0;
  }
  if (this.cLeft < 0){
    this.cLeft = 0;
  }
  if (this.cTop > $('body').height() - $('.topbar').css('height')){
    this.cTop = $('body').height() - $('.topbar').css('height');
  }
  if (this.cLeft > $('body').width()){
    this.cLeft = $('body').width();
  }
  this.$node.css({
    top:this.cTop,
    left:this.cLeft,
    webkitTransition: "top 1s, left 1s",
    transition: "top 1s, left 1s"
  });
};

