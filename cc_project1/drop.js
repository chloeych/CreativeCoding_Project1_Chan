function Drop() {

  this.x = random(320,980);
  this.y = random(60,355);
  this.yspeed = 1;

  this.fall = function() {
    this.y = this.y + this.yspeed;

    if (this.y > 370){
      this.y = random (65, 70);
    }
  }

  this.show = function() {
    stroke(100);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y+10);
  }

  this.color = function(){
    stroke(255);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y+10);
  }

}
