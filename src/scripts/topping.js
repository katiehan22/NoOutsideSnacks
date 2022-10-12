class Topping {
  constructor(name) {
    this.name = name;
    // if (name === "slushee-img") {
    //   this.color = "#FE2F92";
    //   this.pos = [143, 350];
    // } else if (name === "hotdog-img") {
    //   this.color = "yellow";
    //   this.pos = [308, 350];
    // } else if (name === "popcorn-img") {
    //   this.color = "#F6B977";
    //   this.pos = [474, 350];
    // } else {  // salt
    //   this.color = "white";
    //   this.pos = [639, 350];
    // }
    if (name === "slushee-img") {
      this.color = "#FE2F92";
      this.pos = [173, 350];
    } else if (name === "hotdog-img") {
      this.color = "yellow";
      this.pos = [338, 350];
    } else if (name === "popcorn-img") {
      this.color = "#F6B977";
      this.pos = [504, 350];
    } else {  // salt
      this.color = "white";
      this.pos = [668, 350];
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 15, 40);
  }

  move() {
    this.pos = [this.pos[0], this.pos[1] + 20];
  }

  outOfBounds() {
    if (this.pos[1] >= 475) {
      return true;
    } else {
      return false;
    }
  }

}

export default Topping