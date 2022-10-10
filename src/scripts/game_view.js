import Game from "./game";

class GameView{
  constructor(ctx, el) {
    this.game = new Game(el);
    this.ctx = ctx;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  start(){
    setInterval(this.game.draw.bind(this.game, this.ctx), 20);
    setInterval(this.game.moveObjects.bind(this.game), 100);
  }

  bindEvents() {
    let ul = document.querySelector(".dispenser-machines")
    ul.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    let selectedImg = e.target;
    console.log(selectedImg);
    if (selectedImg.id === "slushee-img") {
        console.log("slushee")
        // this.ctx.beginPath();
        // this.ctx.fillStyle = "green";
        // this.ctx.fillRect(100, 100, 50, 50);
    }
  }
}

export default GameView