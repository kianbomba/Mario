function Human(){
  this.x = 50;
  this.y= 750;
  this.lift = 20;
  this.gravity = 1;
  this.velocity = 0;
  this.speed = 1;


  this.jump = function() {
      this.velocity -= this.lift;
  }

  this.show = function() {
    fill(255,0,0);
    rect(this.x, this.y, 50,50);
  //  noStroke();

  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > 750) {
      this.y = 750;
      this.velocity = 0;
    }
  }

   this.mmove = function(a) {
     if( a == RIGHT_ARROW) {
     this.x += this.speed;
   } if( a == LEFT_ARROW) {
     this.x -= this.speed;
  }

  if (this.x <0) {
    this.x = 0 ;
  } if (this.x > 1150){
    this.x = 1150;
  }
}


}
