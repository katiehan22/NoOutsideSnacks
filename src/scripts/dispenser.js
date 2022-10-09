// test draw dispenser
// ctx.drawImage(this.disp, 50, 200);

const DISPENSERS = {
  slushee: "assets/images/dispenserslushee.png", 
  hotdog: "assets/images/dispensermustard.png",
  popcorn: "assets/images/dispenserbutter.png",
  pretzel: "assets/images/dispensersalt.png"
}

class Dispenser {
  constructor(pos, name) {
    this.pos = pos;
    this.name = name;
    const img = new Image();
    img.src = DISPENSERS[name];
    this.img = img;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 125, 200);
  }

  static get DISPENSERS() {
    return DISPENSERS;
  }
}