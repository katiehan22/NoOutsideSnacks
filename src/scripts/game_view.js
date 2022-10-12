import Game from "./game";

class GameView{
  constructor(ctx, el) {
    this.game = new Game(el);
    this.ctx = ctx;
    this.el = el;
  }

  start(){
    setInterval(this.game.draw.bind(this.game, this.ctx), 100);
    setInterval(this.game.moveObjects.bind(this.game), 100);
    setInterval(this.game.level.checkToppingBounds.bind(this.game.level), 100);
  }
}

export default GameView