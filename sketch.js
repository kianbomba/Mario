var human;
var pipe = [];
function setup() {
  createCanvas(1200,800);
  human = new Human() ;
  pipe.push(new Pipe());
  pipe.push(new Pipe());
  // pipe.push(new Pipe());
  // pipe.push(new Pipe());
}

function keyPressed() {
  if (key == ' ') {
    human.jump();
  //console.log('pressed');
  }

}

/**
 * @description Called from P5 Library or extended from P5 library
 * @inheritdoc
 */
function draw() {
  background(0);
  human.show();
  human.update();



  var firstCondition,
      secondCondition,
      pipeIndex;

  for (var i = 0; i < pipe.length; i++)
  {
    pipe[i].show();
    firstCondition = (pipe[i].x + 70) == human.x;
    secondCondition = (human.x + 50) == pipe[i].x;

    // grab your pipeIndex in here
    // with your business logic or whatever it is
    if ((firstCondition || secondCondition) && pipe[i].short(human) == true )
    {
       pipeIndex = i;
       //human.x = pipe[i].x - 50;
       console.log('true');
       break;
    }

    // if (pipe[i].stand(human) == true){
    //   if (human.y > pipe[i].y - 50){
    //   human.y = pipe[i].y - 50;
    //   human.velocity = 0;
    //   console.log ('stand')
    //   }
    //
    // }




     }

    var singlePipe = pipe[pipeIndex];
    //execute code here

    if(keyIsDown (LEFT_ARROW)) {
      human.mmove(LEFT_ARROW);
    }

    if(keyIsDown (RIGHT_ARROW) ) {
      human.mmove(RIGHT_ARROW);
    }

    // if(keyIsDown (BACKSPACE)  ) {
    //   human.jump();
    // }


}
