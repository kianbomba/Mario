function Pipe() {
  this.x = round(random(0, width-50));
  //this.y =
  this.height = round(random(height/2));
  this.y = height - this.height;

  this.show = function () {
    stroke (255,250,250);
    strokeWeight (5);
    noFill();
    rect(this.x , this.y, 70, this.height)
  }

  this.stand = function(human) {
    if (this.x < human.x + 50  && this.x + 70 > human.x) {
      return true;
    } else {return false}
  }

  this.short = function (human) {
    if (human.y + 50  >= this.y) {
      return true;
    } else {return false}
  }
}
