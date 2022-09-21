// const cells = document.querySelectorAll('cell')
// const restart = document.getElementById('.restartBtn');
// const statuss = document.getElementById('.status')
// const windConditions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// let options = [ "", "", "", "", "", "", "", "", ""]; // ch7al mn mara ghadi tal3ab 
// let currentPlayer = "X";
// let running = false;

// startTheGame();

// function startTheGame(){
//     cells.forEach(cell => cell.addEventListener("click", click))
//     restart.addEventListener("click", restart)
//     statuss.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }

// function click(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != " " || !running){
//         return;

//         updateCell(this, cellIndex)
//         changePlayer();
//         winner();
//     }
// }

// function updateCell(cell, index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer
// }

// function changePlayer(){
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statuss.textContent = `${currentPlayer}'s turn`
// }
// function winner(){

// }

// function  restart (){

// }

// const cells = document.querySelectorAll('cell')
// const restart = document.getElementById('.restartBtn');
// const statuss = document.getElementById('.status')



// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#status");
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


const wrapper = document.getElementById('cellContainer');

turn = true

let player1 = []
let player2 = []
let clicked_buttons = []



wrapper.addEventListener('click', (event) => {
  let isButton = event.target.nodeName === 'BUTTON';

  if (!isButton) {
    return;
  }

  console.log(event.target.id)

  if(clicked_buttons.includes(event.target.id))
  {
    return;
  }
  else
  {
     clicked_buttons.push(event.target.id)
  }

  if(turn == true)
  {
    turn = false
    player1.push(event.target.id)
    event.target.style.background = 'red'
    event.target.textContent = 'X'
  }
  else
  {
    turn = true
    player2.push(event.target.id)
    event.target.style.background = 'green'
    event.target.textContent = 'O'
  }

  if(clicked_buttons.length == 9)
  {
    console.log('ta3adol')
  }
  else
  {
    check_winner()
  }

})
function check_winner()
{
    // player 1
    if(player1.includes('1') && player1.includes('2') && player1.includes('3'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player1.includes('4') && player1.includes('5') && player1.includes('6'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player1.includes('7') && player1.includes('8') && player1.includes('9'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    // rows

    if(player1.includes('1') && player1.includes('5') && player1.includes('9'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player1.includes('3') && player1.includes('5') && player1.includes('7'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player1.includes('2') && player1.includes('5') && player1.includes('8'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    // player 2
    if(player2.includes('1') && player2.includes('2') && player2.includes('3'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player2.includes('4') && player2.includes('5') && player2.includes('6'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player2.includes('7') && player2.includes('8') && player2.includes('9'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }
// rows

    if(player2.includes('1') && player2.includes('5') && player2.includes('9'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player2.includes('3') && player2.includes('5') && player2.includes('7'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }

    if(player2.includes('2') && player2.includes('5') && player2.includes('8'))
    {
        console.log(document.getElementById(1).textContent + ' is the winner')
    }
}