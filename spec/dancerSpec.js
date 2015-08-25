describe("dancer", function() {

  var dancer;
  var clock;
  
  beforeEach(function() {
    dancer = new Dancer(2, 3, 100);
    clock = sinon.useFakeTimers();
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have functions to set step and position", function(){
    expect(dancer.step).to.be.an.Function;
    expect(dancer.setPosition).to.be.a.function;
  });

  it("should schedule the next step", function(){
    sinon.spy(dancer, "step");
    dancer.step();
    clock.tick(dancer.timeBetweenSteps);
    expect(dancer.step.called).to.be.true;
  });  

  // it("should set position of the dancer",function(){
  //   expect(dancer.$node.css('top')).to.equal('2px');
  //   expect(dancer.$node.css('left')).to.equal('3px');
  // });
});
