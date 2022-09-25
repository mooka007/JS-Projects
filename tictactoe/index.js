
let btns = document.querySelectorAll('.cell');
let stat = document.getElementById('stat')
// let t = document.querySelector('#restartBtn');


// input ( names )
let firstPlayer = document.getElementById("player_1");
const secPlayer = document.getElementById("player_2");
const na1 = document.getElementById("name1");
const na2 = document.getElementById("name2")

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let option = ['', '','','', '','','', '',''];
let firstMove = 'X'


submit = false



stat.textContent = "please enter your names";
function diplay() {
    localStorage.setItem("player1", firstPlayer.value);
    localStorage.setItem("player2", secPlayer.value);
    na1.innerText = localStorage.getItem("player1");
    na2.innerText = localStorage.getItem("player2");
    stat.textContent = "";
    // play = true;
    submit = true
  }
  
  theStart();
  
  function theStart() {
  btns.forEach(btn => btn.addEventListener('click', clicked))
  
}

function clicked(){
  // console.log(submit)
  let isBtn = this.getAttribute("index");
  // console.log(isBtn)
  if(option[isBtn]  != ""){
    return;
  }
  if(submit === true){
  selectCell(this, isBtn)
}
winner();
}

function selectCell(cell ,index){
    option[index] =  firstMove; 
    cell.textContent = firstMove;
    firstMove = (firstMove == 'X') ? 'O' : 'X';
}
  

function restartt(){
 
  na1.innerHTML = '';
  na2.innerHTML = '';
  firstPlayer.value = '';
  secPlayer.value = ''
  stat.textContent = "please enter your names";
  btns.forEach(btn => btn.textContent = "");
}

function winner(){
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const condition = winConditions[i];
        const cellA = option[condition[0]];
        const cellB = option[condition[1]];
        const cellC = option[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
      stat.textContent = `${firstMove} wins!`;
      running = false;
      setTimeout(() => {
        restartt()
      }, 2000);
    }
    else if(!option.includes("")){
        stat.textContent = `Draw!`;
        running = false;
    }
    // else{
    //   selectCell();
    // }
  
}