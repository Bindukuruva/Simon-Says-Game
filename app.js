let gameseq=[];
let userseq=[];
let score=[0];

let started=false;
let level=0;
let btns=['red','green','yellow','purple'];
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
   if(started==false){
      console.log('game is started');
      started=true;
      levelUp();
      updatescore();
   }
})
function flash(btnflash){
   btnflash.classList.add('flash');
   setTimeout(()=>{
      btnflash.classList.remove('flash');
   },250);
}

function levelUp(){
   userseq=[];
   level++;
  h2.innerText=`Level ${level}`;
  let randomIdx=Math.floor(Math.random()*3);
  console.log(randomIdx);
  let randcol=btns[randomIdx];
  console.log(randcol);
  gameseq.push(randcol);
  console.log(gameseq);
  let btnflash=document.querySelector(`.${randcol}`);
  flash(btnflash);
}
function userFlash(btn){
 btn.classList.add('userFlash');
 setTimeout(
   ()=>{
      btn.classList.remove('userFlash');
   },250)
}
function checkAns(idx){
   if(gameseq[idx]===userseq[idx]){
       if(gameseq.length==userseq.length){
         setTimeout(levelUp,1000)
         
       }
      }
       else{
         h2.innerHTML=`Game over. Your score was <b>${level}</b> <br>Try again by pressing any key`;
         document.querySelector('body').style.backgroundColor='red';
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
         },500

         )
         score.push(level);
         console.log(score);
         reset();
       }
}
function btnpress(){
   console.log(this);
   let btn=this;
   
  userFlash(btn);
  let userColor= btn.getAttribute('id');
  console.log(userColor);
  userseq.push(userColor);
  checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
   btn.addEventListener('click',btnpress);
}
function reset(){
   started=false;
   gameseq=[];
   userseq=[];
   level=0;
}
function updatescore(){
let h4=document.querySelector('h4');
h4.innerText=Math.max(...score);
console.log(h4);
}