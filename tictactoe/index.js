// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame(){
//     cells.forEach(cell => cell.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }
// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != "" || !running){
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
// }
// function updateCell(cell, index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }
// function changePlayer(){
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statusText.textContent = `${currentPlayer}'s turn`;
// }
// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }
//     else if(!options.includes("")){
//         statusText.textContent = `Draw!`;
//         running = false;
//     }
//     else{
//         changePlayer();
//     }
// }
// function restartGame(){
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = "");
//     running = true;
// }







// inputs.addEventListener('input', (event) => {

//   let isInput = event.target.nodeName === 'INPUT';

//   if (!isInput || winner) {
//       return
//   }

  

//   if(document.getElementById('player1').value == '' || document.getElementById('player2').value == '')
//   {
//       document.getElementById('winner').textContent = "Enter player's names"
//       can_player = false
//       return
//   }
//   else
//   {
//       can_player = true
//       player1_name = document.getElementById('player1').value
//       player2_name = document.getElementById('player2').value
//       document.getElementById('winner').textContent = player1_name + "'s turn..."
//       if(localStorage.getItem('player_1') != player1_name)
//       {
//           localStorage.setItem('player_1',player1_name)
//       }

//       if(localStorage.getItem('player_2') != player2_name)
//       {
//           localStorage.setItem('player_2',player2_name)
//       }
//   }
// });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          











 


let btns = document.querySelectorAll('.cell');
let stat = document.getElementById('stat')
let restart = document.querySelector('#restartBtn');
let inPut = document.querySelector('.input')
const firstPlayer = document.getElementById("player_1");
const secPlayer = document.getElementById("player_2");

let player1 = '';
let player2 = '';

play = false;




function diplay() {
  localStorage.setItem("player1", firstPlayer.value);
  localStorage.setItem("player2", secPlayer.value);
}

document.getElementById("name1").innerText = localStorage.getItem("player1");
document.getElementById("name2").innerText = localStorage.getItem("player2");


theStart();



// document.addEventListener('DOMContentLoaded', ()=> {
  
//   if(firstPlayer.textContent == '' || secPlayer.textContent == ''){
//     stat.textContent = "P1 Enter Your name";
//   }
 
// })

// inPut.addEventListener('input', (e)=>{
  

// })


function theStart() {
  btns.forEach(btn => btn.addEventListener('click', click))
  // stat.textContent = `${player1}'s turn`;

}

function click(){
  let isBtn = this.getAttribute("index");
  if(!isBtn){
    return;
  }

}

