const mario = document.querySelector('.mario');
const Pipe = document.querySelector('.pipe');

const jump = ()=> {
mario.classList.add('jump');

setTimeout(()=> { 
mario.classList.remove('jump')

},500);

}
const loop = setInterval(() => {
 
    const Position = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px,')
       
console.log(marioPosition)

if (pipePosition <  120  && pipePosition >0 && marioPosition < 80)  {
     

    mario.style.animation = "none";
    mario.style.left=`${marioPosition}px`;

    mario.src='./images/game-over.png';

    pipe.style.animation = "none";
    pipe.style.left= `${pipePosition}px`;



    }

    
},10);

document.addEventListener('keydown',jump);