import Game from "./game";

class GameView{
  constructor(ctx, el) {
    this.game = new Game(el);
    this.ctx = ctx;
    this.el = el;
  }

  start(){
    setInterval(this.game.draw.bind(this.game, this.ctx), 20);
    setInterval(this.game.moveObjects.bind(this.game), 100);
  }
}

export default GameView