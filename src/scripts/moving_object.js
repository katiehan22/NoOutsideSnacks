class MovingObject {
  constructor(pos, vel, img) {
    this.pos = pos;
    this.vel = vel;
    this.img = img;
    // this.game = object.game;
  }

  draw(ctx) {  
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 75, 75);
  }

  move() {
    this.pos = [this.pos[0] + this.vel, this.pos[1]];
  }
}

export default MovingObject