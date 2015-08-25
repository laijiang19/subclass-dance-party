describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 10000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should inherit from Dance class", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    expect(blinkyDancer.setPosition).to.be.a.function;
  });

  it("should have the constructor type BlinkyDancer", function(){
    expect(blinkyDancer.constructor).to.equal(BlinkyDancer);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      
      expect(blinkyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); 
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
