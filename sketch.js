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

function draw() {
  background(0);
  human.show();
  human.update();


  for (var i = 0; i < pipe.length; i++) {
    pipe[i].show();


    if ((pipe[i].x + 70 == human.x || human.x + 50 == pipe[i].x) && pipe[i].short(human) == true ) {
         //human.x = pipe[i].x - 50;
         console.log('true')
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
