function Drop() {

  this.x = random(320,980);
  this.y = random(60,340);
  this.yspeed = 1;

  this.fall = function() {
    this.y = this.y + this.yspeed;

    if (this.y > 370){
      this.y = random (70, 90);
    }
  }

  this.show = function() {
    stroke(100);
    line(this.x, this.y, this.x, this.y+10);
  }

}
