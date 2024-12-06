// Tic-Tac-Toe Game
let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector(".restart");
let newGame = document.querySelector(".newGame");
let winner = document.querySelector(".winner");
let hide = document.querySelector(".hide");

let champ;
let turn = true; //playerX ,playerO
let count = 0;// to track draw

// Array of winning  patterns
let winPatterns = [  
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    count = 0;
    turn = true;
    enableBtns();
    hide.classList.remove("msg");
}

// playing game
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
    if(turn){
        box.innerText = "O";
        turn = false;
    }else{
        box.innerText = "X";
        turn = true;
     }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if( count === 9 && !isWinner){
        gameDraw();
    }
  });
});  

// game draw
const gameDraw = () => {
    winner.innerText = `The Game was a Draw.`;
    hide.classList.add("msg");
    disableButtons();
}

// endOfGame
const disableButtons = () => {
    for(box of boxes){
       box.disabled=true;
    }
}

// new game
function enableBtns(){
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// winnerAnoucement
const showWinner = () => {
    winner.innerText = `Congratulation the winner is Player ${champ}.`;
    hide.classList.add("msg");
    disableButtons();
}

//  finding winner
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText;
        if(val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2 && val2 === val3 ){
                champ = val1;
                showWinner();
                return true;
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);