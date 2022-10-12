!function(){"use strict";!function(){var e=class{constructor(e,t,s){this.pos=e,this.vel=t,this.img=s}draw(e){e.drawImage(this.img,this.pos[0],this.pos[1],75,75)}move(){this.pos=[this.pos[0]+this.vel,this.pos[1]]}};const t={slushee:"assets/images/cupempty.png",hotdog:"assets/images/hotdog.png",popcorn:"assets/images/popcornplain.png",pretzel:"assets/images/pretzelplain.png",slusheeCorrect:"assets/images/cupfilled.png",hotdogCorrect:"assets/images/hotdogmustard.png",popcornCorrect:"assets/images/popcornbutter.png",pretzelCorrect:"assets/images/pretzelsalt.png",slusheeIncorrect:"assets/images/cupincorrect.png",hotdogIncorrect:"assets/images/hotdogincorrect.png",popcornIncorrect:"assets/images/popcornincorrect.png",pretzelIncorrect:"assets/images/pretzelincorrect.png"};var s=class extends e{constructor(e,s,i){const l=new Image;l.src=t[i],super(e,s,l),this.name=i,this.topping=null}move(){this.pos=[this.pos[0]+this.vel,this.pos[1]]}draw(e){e.drawImage(this.img,this.pos[0],this.pos[1],75,75)}swapImage(e){"correct"===e?("slushee"===this.name?this.img.src="assets/images/cupfilled.png":"hotdog"===this.name?this.img.src="assets/images/hotdogmustard.png":"popcorn"===this.name?this.img.src="assets/images/popcornbutter.png":this.img.src="assets/images/pretzelsalt.png",this.topping=this.name):("slushee"===this.name?this.img.src="assets/images/cupincorrect.png":"hotdog"===this.name?this.img.src="assets/images/hotdogincorrect.png":"popcorn"===this.name?this.img.src="assets/images/popcornincorrect.png":this.img.src="assets/images/pretzelincorrect.png",this.topping="incorrect")}static get FOODITEMS(){return t}};const i={1:[1,2,2e3,10,1],2:[2,2,2e3,16,1],3:[1,10,4e3,10,5],4:[1,10,4e3,14,5],5:[1,2,2e3,10,1]};var l=class{constructor(e){this.levelNum=e,this.totalFoodItems=i[this.levelNum][1],this.allFoodItems=[],this.numItems=0,this.intervalId=void 0,this.fillFoodItems(),this.allToppings=[],this.score=0,this.correctSound=new Audio("assets/audio/correct.wav"),this.incorrectSound=new Audio("assets/audio/incorrect.mp3")}fillFoodItems(){this.intervalId=setInterval(this.createFoodItem.bind(this),i[this.levelNum][2])}createFoodItem(){let e=Object.keys(s.FOODITEMS),t=Math.floor(4*Math.random()),l=e[t];if(1===this.levelNum||2===this.levelNum){let e=new s([0,450],i[this.levelNum][3],l);this.allFoodItems.push(e),this.numItems+=1}else if(3===this.levelNum||4===this.levelNum){let n=new s([0,450],i[this.levelNum][3],l);this.allFoodItems.push(n),t=Math.floor(4*Math.random()),l=e[t];let o=new s([-90,450],i[this.levelNum][3],l);this.allFoodItems.push(o),this.numItems+=2}this.numItems===this.totalFoodItems&&clearInterval(this.intervalId)}checkToppingBounds(){this.allToppings.length>0&&this.allToppings[0].outOfBounds()&&(this.allToppings=this.allToppings.slice(1))}getBelowFoodItem(e){let t=null;for(let s=0;s<this.allFoodItems.length;s++){let i=this.allFoodItems[s];i.pos[0]>=e.pos[0]-125&&i.pos[0]<=e.pos[0]-10&&(t=i)}return null!=t&&null===t.topping&&this.addTopping(t,e),t}addTopping(e,t){!0===this.checkCorrectMatch(e,t)?(e.swapImage("correct"),this.correctSound.play(),this.score+=1):(e.swapImage("incorrect"),this.incorrectSound.play())}checkCorrectMatch(e,t){return"hotdog"===e.name&&"hotdog-img"===t.name||"popcorn"===e.name&&"popcorn-img"===t.name||"slushee"===e.name&&"slushee-img"===t.name||"pretzel"===e.name&&"pretzel-img"===t.name}static get LEVELVARIABLES(){return i}};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("game-canvas").getContext("2d"),t=document.getElementById("start-button"),s=document.querySelector(".title-screen"),i=document.querySelector(".canvas-div"),n=document.getElementById("game-canvas");t.addEventListener("click",(function(){s.style.display="none",i.style.display="block",n.style.display="block",new class{constructor(e,t){this.ctx=e,this.el=t,this.background=new Image,this.background.src="assets/images/concessions4.png",this.backgroundMusic=new Audio("assets/audio/ukulele.mp3"),this.backgroundMusic.play(),this.createMutePause(),this.createDispensers(),this.paused=!1,this.scoreImg=new Image,this.scoreImg.src="assets/images/starscore.png",this.levelsScreen=document.querySelector(".levels-screen"),this.endScreen=document.querySelector(".end-screen"),this.levelNum=4,this.level=new l(this.levelNum),this.intervalIdToppingBounds=void 0,this.handleClick=this.handleClick.bind(this),this.startNextLevel=this.startNextLevel.bind(this),this.restartGame=this.restartGame.bind(this),this.bindEvents()}start(){this.step()}step(){setInterval(this.draw.bind(this,this.ctx),100),setInterval(this.moveObjects.bind(this),100),this.intervalIdToppingBounds=setInterval(this.level.checkToppingBounds.bind(this.level),100),setInterval(this.isOver.bind(this),100)}isOver(){this.level.allFoodItems.length===l.LEVELVARIABLES[this.level.levelNum][1]&&this.level.allFoodItems[this.level.allFoodItems.length-1].pos[0]>=800&&this.levelResult()}levelResult(){this.level.score>=l.LEVELVARIABLES[this.level.levelNum][4]?this.showLevelsScreen():this.showEndScreen()}showLevelsScreen(){let e=document.querySelector(".level-summary"),t=document.querySelector(".level-req");e.innerHTML=`You fulfilled ${this.level.score} out of ${l.LEVELVARIABLES[this.level.levelNum][1]} orders!`,t.innerHTML=`In Level ${this.levelNum+1}, you need to fulfill ${l.LEVELVARIABLES[this.levelNum+1][4]} out of ${l.LEVELVARIABLES[this.levelNum+1][1]} orders.`,this.levelsScreen.style.display="block"}showEndScreen(){this.endScreen.style.display="block"}createMutePause(){const e=document.createElement("ul");e.classList.add("game-buttons"),this.el.appendChild(e);let t=document.createElement("li");t.classList.add("mute");let s=document.createElement("img");s.src="assets/images/buttonmute.png",s.id="mute-img",t.appendChild(s);let i=document.createElement("li");i.classList.add("pause");let l=document.createElement("img");l.src="assets/images/buttonpause.png",l.id="pause-img",i.appendChild(l),e.appendChild(t),e.appendChild(i)}createDispensers(){const e=document.createElement("ul");e.classList.add("dispenser-machines"),this.el.appendChild(e);let t=document.createElement("li");t.classList.add("slushee");let s=document.createElement("img");s.src="assets/images/dispenserslushee.png",s.id="slushee-img",t.appendChild(s);let i=document.createElement("li");i.classList.add("hotdog");let l=document.createElement("img");l.src="assets/images/dispensermustard.png",l.id="hotdog-img",i.appendChild(l);let n=document.createElement("li");n.classList.add("popcorn");let o=document.createElement("img");o.src="assets/images/dispenserbutter.png",o.id="popcorn-img",n.appendChild(o);let a=document.createElement("li");a.classList.add("pretzel");let r=document.createElement("img");r.src="assets/images/dispensersalt.png",r.id="pretzel-img",a.appendChild(r),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(a)}draw(e){e.clearRect(0,0,800,600),e.drawImage(this.background,0,0);for(let t=0;t<this.level.allFoodItems.length;t++)this.level.allFoodItems[t].draw(e);for(let t=0;t<this.level.allToppings.length;t++)this.level.allToppings[t].draw(e);e.drawImage(this.scoreImg,560,0,175,175),e.textAlign="center",e.lineWidth=.5,e.fillStyle="black",e.font="15px Alkalami",e.fillText("Score",646,80),e.font="30px Alkalami",e.fillText(`${this.level.score}`,647,110)}moveObjects(){for(let e=0;e<this.level.allFoodItems.length;e++)this.level.allFoodItems[e].move();for(let e=0;e<this.level.allToppings.length;e++)this.level.allToppings[e].move()}bindEvents(){document.querySelector(".dispenser-machines").addEventListener("click",this.handleClick),document.querySelector("#mute-img").addEventListener("click",this.handleMute),document.querySelector("#pause-img").addEventListener("click",this.togglePause),document.querySelector("#next-level-button").addEventListener("click",this.startNextLevel),document.querySelector("#restart-button").addEventListener("click",this.restartGame)}handleClick(e){let t=e.target;if("IMG"===t.nodeName){let e=new class{constructor(e){this.name=e,"slushee-img"===e?(this.color="#FE2F92",this.pos=[143,350]):"hotdog-img"===e?(this.color="yellow",this.pos=[308,350]):"popcorn-img"===e?(this.color="#F6B977",this.pos=[474,350]):(this.color="white",this.pos=[639,350])}draw(e){e.fillStyle=this.color,e.fillRect(this.pos[0],this.pos[1],15,40)}move(){this.pos=[this.pos[0],this.pos[1]+20]}outOfBounds(){return this.pos[1]>=475}}(t.id);this.level.allToppings.push(e),this.level.getBelowFoodItem(e)}}handleMute(e){this.backgroundMusic.muted?(this.backgroundMusic.muted=!1,this.correctSound.muted=!1,this.incorrectSound.muted=!1):(this.backgroundMusic.muted=!0,this.correctSound.muted=!0,this.incorrectSound.muted=!0)}togglePause(e){!1===this.paused||void 0===this.paused?this.paused=!0:this.paused=!1}startNextLevel(e){this.levelsScreen.style.display="none",this.levelNum+=1,this.level=new l(this.levelNum),clearInterval(this.intervalIdToppingBounds),this.intervalIdToppingBounds=setInterval(this.level.checkToppingBounds.bind(this.level),100)}restartGame(e){this.endScreen.style.display="none",this.levelNum=1,this.level=new l(this.levelNum),clearInterval(this.intervalIdToppingBounds),this.intervalIdToppingBounds=setInterval(this.level.checkToppingBounds.bind(this.level),100)}}(e,i).start()}))}))}()}();
//# sourceMappingURL=main.js.map