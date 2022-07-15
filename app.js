/* DOM ELEMENTS */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const content = document.querySelector('.content');
const match = document.querySelector('.match');

const play  = document.getElementById('play');
const playImg = document.getElementById('play-img');

const bot = document.getElementById('bot');
const botImg = document.getElementById('bot-img');

const veredict = document.getElementById('veredict');

const win = document.getElementById('win');
const draw = document.getElementById('draw');
const loss = document.getElementById('loss');

/* VARIABLES TO CHECK WINNERS */
let botPlay = '';
let yourPlay = '';

/* VARIABLES TO UPDATE THE SCORE */
let winScore = 0;
let drawScore = 0;
let lossScore = 0;

win.innerText = winScore;
draw.innerText = drawScore;
loss.innerText = lossScore;

/* EVENT LISTENERS */
paper.addEventListener('click', function() {
    playPaper();
});

scissors.addEventListener('click', function() {
    playScissors();
});

rock.addEventListener('click', function(){
    playRock();
});

/* FUNCTIONS */
function hideElement(element){ // HIDE ELEMENT
    element.classList.add('opacity-0');
    setTimeout(function(){

        element.classList.add('display-none');
    }, 500);
}

function showElement(element){ // SHOW ELEMENT
    element.classList.remove('opacity-0');
    setTimeout(function(){

        element.classList.remove('display-none');
    }, 500);

}

function updateScore(){ // UPDATE SCORE
    win.innerText = winScore;
    draw.innerText = drawScore;
    loss.innerText = lossScore;
}

function checkWinner(){ // CHECK WINNER
    if(yourPlay === botPlay){
        veredict.innerHTML = 'Draw';
        drawScore++;
        updateScore();
    } else if (yourPlay === 'paper' && botPlay === 'rock'){
        veredict.innerHTML = 'You win';
        winScore++;
        updateScore();
    } else if (yourPlay === 'scissors' && botPlay === 'paper'){
        veredict.innerHTML = 'You win';
        winScore++;
        updateScore();
    } else if (yourPlay === 'rock' && botPlay === 'scissors'){
        veredict.innerHTML = 'You win';
        winScore++;
        updateScore();
    } else {
        veredict.innerHTML = 'You lose';
        lossScore++;
        updateScore();
    }
}

function createMatch(selected){ // CREATE MATCH
    /* SHOW THE MATCH */
    match.classList.remove('display-none');
    match.classList.remove('opacity-0');

    /* HUMAN PLAY */
    switch(selected){
        case 'paper':
            yourPlay = 'paper';
            playImg.setAttribute('src', 'images/paper.png')
            play.style.border = `2rem solid var(--blue)`;
            play.style.boxShadow = `0 0 2rem 0 var(--blue) inset`;
            break;

        case 'scissors':
            yourPlay = 'scissors';
            playImg.setAttribute('src', 'images/scissors.png');
            play.style.border = `2rem solid var(--yellow)`;
            play.style.boxShadow = `0 0 2rem 0 var(--yellow) inset`;
            break;

        case 'rock':
            yourPlay = 'rock';
            playImg.setAttribute('src', 'images/rock.png');
            play.style.border = `2rem solid var(--red)`;
            play.style.boxShadow = `0 0 2rem 0 var(--red) inset`;
            break;
    }

    /* BOT PLAY */
    const random = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
    switch(random){ 
        case 1:
            botPlay = 'paper';
            botImg.setAttribute('src', 'images/paper.png');
            bot.style.border = `2rem solid var(--blue)`;
            bot.style.boxShadow = `0 0 2rem 0 var(--blue) inset`;
            break;

        case 2:
            botPlay = 'scissors';
            botImg.setAttribute('src', 'images/scissors.png');
            bot.style.border = `2rem solid var(--yellow)`;
            bot.style.boxShadow = `0 0 2rem 0 var(--yellow) inset`;
            break;

        case 3:
            botPlay = 'rock';
            botImg.setAttribute('src', 'images/rock.png');
            bot.style.border = `2rem solid var(--red)`;
            bot.style.boxShadow = `0 0 2rem 0 var(--red) inset`;
            break;
    }

    /* CHECK WINNER */
    checkWinner();

    /* PLAY AGAIN BUTTON */
    let playAgain = document.createElement('button');
    playAgain.classList.add('play-again');
    playAgain.innerText = 'Play again';
    match.appendChild(playAgain);
    playAgain.addEventListener('click', function(){
        hideElement(match);
        hideElement(playAgain);
        showElement(content);
    });

}

function playPaper(){ // PLAY PAPER
    hideElement(content);
    setTimeout(function(){
        createMatch('paper', 'blue');
    }, 500);
}

function playScissors(){ // PLAY SCISSORS
    hideElement(content);
    setTimeout(function(){
        createMatch('scissors', 'yellow');
    }, 500);
}

function playRock(){ // PLAY ROCK
    hideElement(content);
    setTimeout(function(){
        createMatch('rock', 'red');
    }, 500);
}