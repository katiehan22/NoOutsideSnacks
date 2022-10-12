!function(){"use strict";!function(){var e=class{constructor(e,s,t){this.pos=e,this.vel=s,this.img=t}draw(e){e.drawImage(this.img,this.pos[0],this.pos[1],75,75)}move(){this.pos=[this.pos[0]+this.vel,this.pos[1]]}};const s={slushee:"assets/images/cupempty.png",hotdog:"assets/images/hotdog.png",popcorn:"assets/images/popcornplain.png",pretzel:"assets/images/pretzelplain.png",slusheeCorrect:"assets/images/cupfilled.png",hotdogCorrect:"assets/images/hotdogmustard.png",popcornCorrect:"assets/images/popcornbutter.png",pretzelCorrect:"assets/images/pretzelsalt.png",slusheeIncorrect:"assets/images/cupincorrect.png",hotdogIncorrect:"assets/images/hotdogincorrect.png",popcornIncorrect:"assets/images/popcornincorrect.png",pretzelIncorrect:"assets/images/pretzelincorrect.png"};var t=class extends e{constructor(e,t){const i=new Image;i.src=s[t],super([0,450],e,i),this.name=t,this.topping=null}move(){this.pos=[this.pos[0]+this.vel,this.pos[1]]}draw(e){e.drawImage(this.img,this.pos[0],this.pos[1],75,75)}swapImage(e){"correct"===e?("slushee"===this.name?this.img.src="assets/images/cupfilled.png":"hotdog"===this.name?this.img.src="assets/images/hotdogmustard.png":"popcorn"===this.name?this.img.src="assets/images/popcornbutter.png":this.img.src="assets/images/pretzelsalt.png",this.topping=this.name):("slushee"===this.name?this.img.src="assets/images/cupincorrect.png":"hotdog"===this.name?this.img.src="assets/images/hotdogincorrect.png":"popcorn"===this.name?this.img.src="assets/images/popcornincorrect.png":this.img.src="assets/images/pretzelincorrect.png",this.topping="incorrect")}static get FOODITEMS(){return s}};const i={1:[1,2,2e3,10,1],2:[2,20,2e3,20,15]};var l=class{constructor(e){this.levelNum=e,this.totalFoodItems=i[this.levelNum][1],this.allFoodItems=[],this.numItems=0,this.intervalId=void 0,this.fillFoodItems(),this.allToppings=[],this.score=0,this.correctSound=new Audio("assets/audio/correct.wav"),this.incorrectSound=new Audio("assets/audio/incorrect.mp3"),this.backgroundMusic=new Audio("assets/audio/ukulele.mp3"),this.backgroundMusic.play()}fillFoodItems(){this.intervalId=setInterval(this.createFoodItem.bind(this),i[this.levelNum][2])}createFoodItem(){let e=Object.keys(t.FOODITEMS)[Math.floor(4*Math.random())],s=new t(i[this.levelNum][3],e);this.allFoodItems.push(s),this.numItems+=1,this.numItems===this.totalFoodItems&&clearInterval(this.intervalId)}checkToppingBounds(){this.allToppings.length>0&&this.allToppings[0].outOfBounds()&&(this.allToppings=this.allToppings.slice(1))}getBelowFoodItem(e){let s=null;for(let t=0;t<this.allFoodItems.length;t++){let i=this.allFoodItems[t];i.pos[0]>=e.pos[0]-125&&i.pos[0]<=e.pos[0]-10&&(s=i)}return null!=s&&null===s.topping&&this.addTopping(s,e),s}addTopping(e,s){!0===this.checkCorrectMatch(e,s)?(e.swapImage("correct"),this.correctSound.play(),this.score+=1):(e.swapImage("incorrect"),this.incorrectSound.play())}checkCorrectMatch(e,s){return"hotdog"===e.name&&"hotdog-img"===s.name||"popcorn"===e.name&&"popcorn-img"===s.name||"slushee"===e.name&&"slushee-img"===s.name||"pretzel"===e.name&&"pretzel-img"===s.name}static get LEVELVARIABLES(){return i}};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("game-canvas").getContext("2d"),s=document.getElementById("start-button"),t=document.querySelector(".title-screen"),i=document.querySelector(".canvas-div"),o=document.getElementById("game-canvas");s.addEventListener("click",(function(){t.style.display="none",i.style.display="block",o.style.display="block",new class{constructor(e,s){this.ctx=e,this.el=s,this.background=new Image,this.background.src="assets/images/concessions4.png",this.createMutePause(),this.createDispensers(),this.paused=!1,this.scoreImg=new Image,this.scoreImg.src="assets/images/starscore.png",this.levelsScreen=document.querySelector(".levels-screen"),console.log(this.levelsScreen.style),this.endScreen=document.querySelector(".end-screen"),this.levelNum=1,this.level=new l(this.levelNum),this.handleClick=this.handleClick.bind(this),this.bindEvents()}start(){this.step()}step(){setInterval(this.draw.bind(this,this.ctx),100),setInterval(this.moveObjects.bind(this),100),setInterval(this.level.checkToppingBounds.bind(this.level),100),setInterval(this.isOver.bind(this),100)}isOver(){this.level.allFoodItems.length===l.LEVELVARIABLES[this.level.levelNum][1]&&this.level.allFoodItems[this.level.allFoodItems.length-1].pos[0]>=800&&this.levelResult()}levelResult(){this.level.score>=l.LEVELVARIABLES[this.level.levelNum][4]?this.showLevelsScreen():this.showEndScreen()}showLevelsScreen(){let e=document.querySelector(".level-summary"),s=document.querySelector(".level-req");e.innerHTML=`You fulfilled ${this.level.score} out of ${l.LEVELVARIABLES[this.level.levelNum][1]} orders!`,s.innerHTML=`In Level ${this.levelNum+1}, you need to fulfill ${l.LEVELVARIABLES[this.levelNum+1][4]} out of ${l.LEVELVARIABLES[this.levelNum+1][1]} orders.`,this.levelsScreen.style.display="block"}showEndScreen(){this.endScreen.style.display="block"}createMutePause(){const e=document.createElement("ul");e.classList.add("game-buttons"),this.el.appendChild(e);let s=document.createElement("li");s.classList.add("mute");let t=document.createElement("img");t.src="assets/images/buttonmute.png",t.id="mute-img",s.appendChild(t);let i=document.createElement("li");i.classList.add("pause");let l=document.createElement("img");l.src="assets/images/buttonpause.png",l.id="pause-img",i.appendChild(l),e.appendChild(s),e.appendChild(i)}createDispensers(){const e=document.createElement("ul");e.classList.add("dispenser-machines"),this.el.appendChild(e);let s=document.createElement("li");s.classList.add("slushee");let t=document.createElement("img");t.src="assets/images/dispenserslushee.png",t.id="slushee-img",s.appendChild(t);let i=document.createElement("li");i.classList.add("hotdog");let l=document.createElement("img");l.src="assets/images/dispensermustard.png",l.id="hotdog-img",i.appendChild(l);let o=document.createElement("li");o.classList.add("popcorn");let n=document.createElement("img");n.src="assets/images/dispenserbutter.png",n.id="popcorn-img",o.appendChild(n);let a=document.createElement("li");a.classList.add("pretzel");let c=document.createElement("img");c.src="assets/images/dispensersalt.png",c.id="pretzel-img",a.appendChild(c),e.appendChild(s),e.appendChild(i),e.appendChild(o),e.appendChild(a)}draw(e){e.clearRect(0,0,800,600),e.drawImage(this.background,0,0);for(let s=0;s<this.level.allFoodItems.length;s++)this.level.allFoodItems[s].draw(e);for(let s=0;s<this.level.allToppings.length;s++)this.level.allToppings[s].draw(e);e.drawImage(this.scoreImg,560,0,175,175),e.textAlign="center",e.lineWidth=.5,e.fillStyle="black",e.font="15px Alkalami",e.fillText("Score",646,80),e.font="30px Alkalami",e.fillText(`${this.level.score}`,647,110)}moveObjects(){for(let e=0;e<this.level.allFoodItems.length;e++)this.level.allFoodItems[e].move();for(let e=0;e<this.level.allToppings.length;e++)this.level.allToppings[e].move()}bindEvents(){document.querySelector(".dispenser-machines").addEventListener("click",this.handleClick),document.querySelector("#mute-img").addEventListener("click",this.handleMute),document.querySelector("#pause-img").addEventListener("click",this.togglePause)}handleClick(e){let s=e.target;if("IMG"===s.nodeName){let e=new class{constructor(e){this.name=e,"slushee-img"===e?(this.color="#FE2F92",this.pos=[143,350]):"hotdog-img"===e?(this.color="yellow",this.pos=[308,350]):"popcorn-img"===e?(this.color="#F6B977",this.pos=[474,350]):(this.color="white",this.pos=[639,350])}draw(e){e.fillStyle=this.color,e.fillRect(this.pos[0],this.pos[1],15,40)}move(){this.pos=[this.pos[0],this.pos[1]+20]}outOfBounds(){return this.pos[1]>=475}}(s.id);this.level.allToppings.push(e),this.level.getBelowFoodItem(e)}}handleMute(e){this.backgroundMusic.muted?(this.backgroundMusic.muted=!1,this.correctSound.muted=!1,this.incorrectSound.muted=!1):(this.backgroundMusic.muted=!0,this.correctSound.muted=!0,this.incorrectSound.muted=!0)}togglePause(e){!1===this.paused||void 0===this.paused?this.paused=!0:this.paused=!1}}(e,i).start()}))}))}()}();
//# sourceMappingURL=main.js.map