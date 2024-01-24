// let level =0;
// let start = false;
// let body = document.querySelector("body");
// let p = document.querySelector("p");
// let btn = ["red", "yellow", "green", "purple"];
// body.addEventListener("keypress", ()=>{
//   if(start==false){
//     console.log("started");
//     start = true;
//     levelUp();
//   }
  
// })

// function btnflash(btn) {
//     btn.classList.add("flash");
//     setTimeout(()=>{
//         btn.classList.remove("flash");
//     },250);
// }
// function levelUp(){
//   level++;
//   p.innerText = `Level ${level}`;
//   let rndmidx = Math.floor(Math.random()*3);
//   let rndmcolor = btn[rndmidx];
//   let rndmbtn = document.querySelector(`.${rndmcolor}`);
//   btnflash(rndmbtn);
// }
// function btnPress(){
//     let btn = this;
//     btnflash(btn);
// }
// let allbtns = document.querySelectorAll(".btn");
// for(btn of allbtns){
//     btn.addEventListener("click",btnPress());
// }


let body = document.querySelector("body");
let p = document.querySelector("p");
let userseq = [];
let gameseq = [];
// let btn = document.querySelector("button");
let start = false;
let level=0;
body.addEventListener("keypress", ()=>{
  if(start==false){
    start=true;
    console.log("hii");
    levelUp();
  }
})

let btns = ["red" , "yellow", "green", "purple"];
function flash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },250);
}
function levelUp(){
  userseq=[];
  level++;
  p.innerText = `Level ${level}`;
  let rndmidx = Math.floor(Math.random()*3);
  let rndmcolor = btns[rndmidx];
  let rndmbtn = document.querySelector(`.${rndmcolor}`);
  gameseq.push(rndmbtn.getAttribute("id"));
  flash(rndmbtn);
}

function check(idx){
  
  if(gameseq[idx]===userseq[idx]){
    if(gameseq.length==userseq.length){
      setTimeout(()=>{
        levelUp();
      },1000)
    }
    
  }
  else{
    p.innerHTML=`Game over! your score was ${level}. <br></br>Press any key to start again`;
    reset();
  }
}

let allbtns = document.querySelectorAll(".btn");
function btnpress(){
  let btn = this;
  flash(btn);
  userseq.push(btn.getAttribute("id"));

  check(userseq.length-1);
}
for(btn of allbtns){
  btn.addEventListener("click", 
    btnpress
  )}

  function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    start=false;
  }
