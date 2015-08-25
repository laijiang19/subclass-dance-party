$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunctionName);

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  var timer;

  $(".generate").on("click", function(event){
    var index;
    var blink = window['BlinkyDancer'];
    var rotate = window['RotatingDancer'];
    var jump = window['JumpingDancer'];
    var Con = [blink, rotate, jump];
    var dancer;
    var cb = function(){
      index = Math.floor(Math.random()*3);
      dancer = new Con[index](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
    };
    timer = setInterval(cb,10);
  });

  $(".lineUp").on("click", function(event){
    var left = 20;
    var top = $('body').height()/2;
    var width = $('body').width();
    var length = window.dancers.length;
    var dancerHeight; 
    var r,g,b;
    clearInterval(timer);
    _.each(window.dancers, function(dancer){
      dancer.lineUp();
      dancerHeight = dancer.$node.css('height');
      console.log(dancerHeight);
      r = Math.floor(Math.random()*256);
      g = Math.floor(Math.random()*256);
      b = 160;
      dancer.$node.animate({
        top: top,
        left: left,
      });
      dancer.$node.css({
        borderTopColor: "rgb("+r+","+g+","+b+")",
        borderLeftColor: "rgb("+r+","+g+","+b+")",
        borderRightColor: "rgb("+r+","+g+","+b+")",
        borderBottomColor: "rgb("+r+","+g+","+b+")"
      });
      left += width/length;
      // if (left > $('body').width() + 20){
      //   top -= 50;
      //   left = 20;
      // }
    });
  });
});

