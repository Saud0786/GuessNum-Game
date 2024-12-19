let randomNum =parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const UserInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');



const p =document.createElement('p');



let prevGuess=[]
let NumGuess =1;

let playGame =true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number");
  }else if(guess>100){
    alert("Please enter less than 100")
  }else if(guess<1){
    alert("Please enter more than 1")
  }else{
    prevGuess.push(guess);
  if(NumGuess===10){
    
    DisplayGuess(guess);
    DisplayMessage(`Game Over. Random number was ${randomNum}`);
    endGame();
  }else{  
    
    DisplayGuess(guess)
    checkGuess(guess)
  }
  }
}


function checkGuess(guess){
  if(guess === randomNum){
    DisplayMessage("Congratulation you won")
    endGame();
  }else if(guess < randomNum){
    DisplayMessage("Number is too Low")
  }else if(guess > randomNum){
    DisplayMessage("Number is too High");
  }
}

function DisplayGuess(guess){
  UserInput.value=''
  if(NumGuess==10){
      guessSlot.innerHTML+=`${guess}`
  }else{
    guessSlot.innerHTML+=`${guess} , `
  }
  NumGuess++;
  console.log(NumGuess);
  
  remaining.innerHTML = `${11-NumGuess}`
}


function DisplayMessage(message){
  lowOrHi.innerHTML = `<p>${message}</p>`;
}

function endGame(){
   UserInput.value='';
   UserInput.setAttribute('disabled', '');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
   p.style.width='200px'
   p.style.height='50px'
   p.style.display='flex'
   p.style.alignItems='center'
   p.style.justifyContent='center'
   p.style.backgroundColor='green';
   p.style.borderRadius='5px'
   p.style.font='15px';
   p.style.marginLeft='100px';
   p.style.cursor='pointer';
   startOver.appendChild(p);
   playGame=false;
   NewGame();
}

function NewGame(){
  const restartGame = document.querySelector('#newGame')
  restartGame.addEventListener("click",function(e){
    randomNum =parseInt(Math.random()*100 +1);
    NumGuess=1;
    prevGuess =[];
    guessSlot.innerHTML='';
    remaining.innerHTML=`${10-NumGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
  
}



