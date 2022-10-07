import Game from "./game";

class GameView{
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start(){
    setInterval(this.game.draw.bind(this.game, this.ctx), 20);
    setInterval(this.game.moveObjects.bind(this.game), 100);
  }
}

export default GameView