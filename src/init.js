
var interact = function(array, callback){
  _.each(array, function(item){
    callback(item);
  });
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

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);

    // aX = parseFloat(dancer.$node.css('top'));
    // aY = parseFloat(dancer.$node.css('left'));

    // var bag = [];

    // $('.proximity').removeClass('proximity');

    // bag = _.filter(window.dancers, function(item){
    //   bX = parseFloat(item.$node.css('top'));
    //   bY = parseFloat(item.$node.css('left'));
    //   return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2)) <= 5;
    // });

    // window.dancers.push(dancer);

    // r = Math.floor(Math.random()*256);
    // g = Math.floor(Math.random()*256);
    // b = Math.floor(Math.random()*256);

    // $('.proximity').css({
    //   borderTopColor: "rgb("+r+","+g+","+b+")",
    //   borderLeftColor: "rgb("+r+","+g+","+b+")",
    //   borderRightColor: "rgb("+r+","+g+","+b+")",
    //   borderBottomColor: "rgb("+r+","+g+","+b+")"        
    // });

    // interact(bag, function(item){
    //   item.$node.addClass('proximity');
    // });

    $('body').append(dancer.$node);
  });
  
  var timer;

  //function to generate a series of dance objects for easier visual effect
  $(".forest").on("click", function(event){

    //cleans window.dancers array each function click event
    //window.dancers = [];

    //setup init for calling random constructor methods
    var index;
    var blink = window['BlinkyDancer'];
    var rotate = window['RotatingDancer'];
    var jump = window['JumpingDancer'];
    var Con = [blink, rotate, rotate, jump];
    var dancer, dHeight, dWidth;
    var aX, aY, bX, bY, bag;
    var r, g, b;
    

    // callback function being invoked by setInterval()
    var cb = function(){
      index = Math.floor(Math.random()*4);
      dancer = new Con[index](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      aX = parseFloat(dancer.$node.css('top'));
      aY = parseFloat(dancer.$node.css('left'));

      // $('.proximity').removeClass('proximity');

      bag = _.filter(window.dancers, function(item){
        bX = parseFloat(item.$node.css('top'));
        bY = parseFloat(item.$node.css('left'));
        return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2)) <= 5;
      });

      window.dancers.push(dancer);

      r = Math.floor(Math.random()*256);
      g = Math.floor(Math.random()*256);
      b = Math.floor(Math.random()*256);

      $('.proximity').css({
        borderTopColor: "rgb("+r+","+g+","+b+")",
        borderLeftColor: "rgb("+r+","+g+","+b+")",
        borderRightColor: "rgb("+r+","+g+","+b+")",
        borderBottomColor: "rgb("+r+","+g+","+b+")"        
      });

      interact(bag, function(item){
        item.$node.addClass('proximity');
      });

      $('body').append(dancer.$node);
    };

    //set a timer so it calls each time rather than all at once
    var timesRun = 0;
    timer = setInterval(function(){
      timesRun += 1;
      if(timesRun === 400){
        clearInterval(timer);
      }
      cb();
    }, 50);
  });

  //function to generate a series of dance objects for easier visual effect
  $(".icicle").on("click", function(event){

    //cleans window.dancers array each function click event
    // window.dancers = [];

    //setup init for calling random constructor methods
    var index;
    var blink = window['BlinkyDancer'];
    var jump = window['JumpingDancer'];
    var Con = [blink, jump];
    var dancer, dHeight, dWidth;
    var aX, aY, bX, bY, bag;
    var r, g, b;
    

    // callback function being invoked by setInterval()
    var cb = function(){
      index = Math.floor(Math.random()*2);
      dancer = new Con[index](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      aX = parseFloat(dancer.$node.css('top'));
      aY = parseFloat(dancer.$node.css('left'));

      // setTimeout(function(){
      //   $('.proximity').removeClass('proximity');}, 50);

      bag = _.filter(window.dancers, function(item){
        bX = parseFloat(item.$node.css('top'));
        bY = parseFloat(item.$node.css('left'));
        return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2)) <= 5;
      });

      window.dancers.push(dancer);

      r = Math.floor(Math.random()*256);
      g = Math.floor(Math.random()*256);
      b = Math.floor(Math.random()*256);

      $('.proximity').css({
        borderTopColor: "rgb("+r+","+g+","+b+")",
        borderLeftColor: "rgb("+r+","+g+","+b+")",
        borderRightColor: "rgb("+r+","+g+","+b+")",
        borderBottomColor: "rgb("+r+","+g+","+b+")"        
      });

      interact(bag, function(item){
        item.$node.addClass('proximity');
      });

      $('body').append(dancer.$node);
    };

    //set a timer so it calls each time rather than all at once
    var timesRun = 0;
    timer = setInterval(function(){
      timesRun += 1;
      if(timesRun === 250){
        clearInterval(timer);
      }
      cb();
    }, 50);
  });

  //
  $(".doge").on("click", function(event){

    //cleans window.dancers array each function click event
    // window.dancers = [];

    //setup init for calling random constructor methods
    var index;
    var blink = window['BlinkyDancer'];
    var rotate = window['RotatingDancer'];
    var jump = window['JumpingDancer'];
    var Con = [blink, rotate, jump];
    var dancer, timer;
    
    // callback function being invoked by setInterval()
    var cb = function(){
      index = Math.floor(Math.random()*3);
      dancer = new DogeDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      setTimeout(function(){
        $('.dogeDancer').hide('slow').delay(500).queue(function(){
          $('.dogeDancer').remove();
        });
      }, 600);
      window.dancers.push(dancer);
    };

    var timesRun = 0;
    timer = setInterval(function(){
      timesRun += 1;
      if(timesRun === 100){
        clearInterval(timer);
      }
      cb();
    }, 200);
  });

  //line up on click
  $(".lineUp").on("click", function(event){
    
    var left = 20;
    var top = $('body').height()/2 - 50;
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
        webkitTransition: "top 1s, left 1s",
        transition: "top 1s, left 1s",
        width: 0
      });

      dancer.$node.css({
        borderTopColor: "rgb("+r+","+g+","+b+")",
        borderLeftColor: "rgb("+r+","+g+","+b+")",
        borderRightColor: "rgb("+r+","+g+","+b+")",
        borderBottomColor: "rgb("+r+","+g+","+b+")"
      });
      left += width/length;
    });
  });

  $("body").on("mouseenter", ".dancer",function(event){
    var cTop = parseFloat($(this).css('top'));
    var cLeft = parseFloat($(this).css('left'));
    $(this).animate({
      top: $('body').height()/2 - 150
    });    
  });

  $("body").on("mouseleave", ".dancer",function(event){
    var cTop = parseFloat($(this).css('top'));
    var cLeft = parseFloat($(this).css('left'));
    $(this).animate({
      top: $('body').height()/2 - 50
    });    
  });  
});



