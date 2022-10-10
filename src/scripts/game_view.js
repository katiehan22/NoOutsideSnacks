import Game from "./game";

class GameView{
  constructor(ctx, el) {
    this.game = new Game(el);
    this.ctx = ctx;
    this.el = el;
    this.backgroundMusic = new Audio("assets/audio/ukulele.mp3");
  }

  start(){
    this.backgroundMusic.play();
    setInterval(this.game.draw.bind(this.game, this.ctx), 20);
    setInterval(this.game.moveObjects.bind(this.game), 100);
    setInterval(this.game.checkToppingBounds.bind(this.game), 100);
  }
}

export default GameView