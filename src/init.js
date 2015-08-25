
var interact = function(array){
  var arr = array;
  var count = 1;
  var aX, aY, bX, bY, line, distance;
  while (count < array.length){
    aX = parseFloat(arr[count-1].$node.css('top'));
    aY = parseFloat(arr[count-1].$node.css('left'));
    bX = parseFloat(arr[count].$node.css('top'));
    bY = parseFloat(arr[count].$node.css('left'));
    distance = Math.sqrt(Math.pow(aX-bX, 2) + Math.pow(aY-bY, 2));
    console.log(distance);
    if (distance < 120){
      
    }
    count++; 
  }
};

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
    sortDancer();
    $('body').append(dancer.$node);
  });
  
  var timer;

  //function to generate a series of dance objects for easier visual effect
  $(".generate").on("click", function(event){

    //cleans window.dancers array each function click event
    window.dancers = [];

    //setup init for calling random constructor methods
    var index;
    var blink = window['BlinkyDancer'];
    var rotate = window['RotatingDancer'];
    var jump = window['JumpingDancer'];
    var Con = [blink, rotate, jump];
    var dancer, dHeight, dWidth;

    var cb = function(){
      index = Math.floor(Math.random()*3);
      dancer = new Con[index](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      window.dancers = window.dancers.sort(function(a,b){
        var aX = a.$node.css('top');
        var bX = b.$node.css('top');
        var aY = a.$node.css('left');
        var bY = a.$node.css('left');
        return Math.pow(aX,2) + Math.pow(aY,2) - Math.pow(bX,2) + Math.pow(bY,2);
      });
      interact(window.dancers);
      $('body').append(dancer.$node);
    };

    //set a timer so it calls each time rather than all at once
    timer = setInterval(cb,150);
  });

  //line up on click
  $(".lineUp").on("click", function(event){
    
    var left = 20;
    var top = $('body').height()/2;
    var width = $('body').width();
    var length = window.dancers.length;
    var dancerHeight; 
    var r,g,b;

    //clear the setInterval event called by generate()
    clearInterval(timer);

    _.each(window.dancers, function(dancer){

      //call Dancer class method lineUp() which stops the setTimeout call
      dancer.lineUp();

      //set random colors and change color when lining up; in addition they will all fit on the same line 
      dancerHeight = dancer.$node.css('height');
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



