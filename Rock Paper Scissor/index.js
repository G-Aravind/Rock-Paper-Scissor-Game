const paperBtn = document.getElementById('paper-btn')
const rockBtn = document.getElementById('rock-btn')
const scissorBtn = document.getElementById('scissor-btn')
const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const name1 = document.getElementById('name1')
const name2 = document.getElementById('name2')
const msg = document.getElementById('title')


const movesLeft = document.getElementById('moves')
const moves = document.getAnimations('title')
const result = document.getElementById('res');
const playBtn = document.getElementById('play-btn')

let m =10

moves.innerHTML = m


var s1 = 0
var s2 = 0

const RPS = [
    {src:'images/rock.png',name:'ROCK'},
     {src:'images/Paper.png',name:'PAPER'},
      {src:'images/Scissor.png',name:'SCISSOR'}

]

msg.innerHTML = 'ROCK PAPER SCISSOR'
setTimeout(()=>{
    movesLeft.style.display='block'
   msg.innerHTML = 10
},1000)



    // window.open('/result.html')
    
  
       
        
  
    //   return   window.location.href ='/result.html'
   






rockBtn.addEventListener('click',()=>{
    img1.src= RPS[0].src
    name1.innerHTML = RPS[0].name
     random()
     check()
zeroMovesLeft()


})

paperBtn.addEventListener('click',()=>{
    img1.src= RPS[1].src
name1.innerHTML = RPS[1].name
    random()
     check()
     zeroMovesLeft()

})

scissorBtn.addEventListener('click',()=>{
    img1.src= RPS[2].src
name1.innerHTML = RPS[2].name
    random()
     check()
     zeroMovesLeft()
})

function random(){
    const n = Math.floor(Math.random()*3)
    console.log(n)
    img2.src =  RPS[n].src
    name2.innerHTML = RPS[n].name
    return RPS[n].src

}


function check(){

  if(name1.innerHTML=='ROCK' && name2.innerHTML=='ROCK'){
       score1.innerHTML =s1 ,score2.innerHTML = s2 ,m--,msg.innerHTML=m

   }else if(name1.innerHTML=='PAPER' && name2.innerHTML=='PAPER'){
       score1.innerHTML =s1 ,score2.innerHTML= s2 ,m--,msg.innerHTML=m

   }else if(name1.innerHTML=='SCISSOR' && name2.innerHTML=='SCISSOR'){
      score1.innerHTML =s1 ,score2.innerHTML = s2 ,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='ROCK' && name2.innerHTML=='PAPER'){
     return s2++,score2.innerHTML =s2,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='ROCK' && name2.innerHTML=='SCISSOR'){
       return s1++,score1.innerHTML =s1,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='PAPER' && name2.innerHTML=='ROCK'){
       return s1++,score1.innerHTML =s1,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='PAPER' && name2.innerHTML=='SCISSOR'){
        return s2++,score2.innerHTML =s2,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='SCISSOR' && name2.innerHTML=='ROCK'){
        return s2++,score2.innerHTML = s2 ,m--,msg.innerHTML=m

   }else if (name1.innerHTML=='SCISSOR' && name2.innerHTML=='PAPER'){
       return s1++, score1.innerHTML  = s1,m--,msg.innerHTML=m
   }

}
function zeroMovesLeft(){
    if(m==0){



        if(  s1>s2){
          rockBtn.style.display='none'
           paperBtn.style.display='none'
        scissorBtn.style.display='none'
        playBtn.style.display='block'
          result.innerHTML='YOU WON'
     
    }if( s1==s2){
         rockBtn.style.display='none'
            paperBtn.style.display='none'
        scissorBtn.style.display='none'
          playBtn.style.display='block'
           result.innerHTML='DRAW'
    }if(s2>s1){
        
         rockBtn.style.display='none'
                paperBtn.style.display='none'
        scissorBtn.style.display='none'
          playBtn.style.display='block'
        result.innerHTML='YOU LOST'
        
    }
    }
}



   playBtn.addEventListener('click', ()=>{
  


 
    location.reload()
    
          
  


   })
