class MovingObject {
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    // this.game = object.game;
  }

  draw(ctx) {  // need to change to img
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);
  }

  move() {
    this.pos = [this.pos[0] + this.vel, this.pos[1]];
  }
}

export default MovingObject