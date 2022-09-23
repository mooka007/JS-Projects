
let btns = document.querySelectorAll('.cell');
let stat = document.getElementById('stat')
let restart = document.querySelector('#restartBtn');


// input ( names )
let firstPlayer = document.getElementById("player_1");
const secPlayer = document.getElementById("player_2");
const na1 = document.getElementById("name1");
const na2 = document.getElementById("name2")


// let playersName = document.getElementById("playerName")
let option = ['', '','','', '','','', '',''];
let optionSize = 9;
let firstMove = 'X'
let secMove = 'O'
play = false;




stat.textContent = "please enter your names";
function diplay() {
    localStorage.setItem("player1", firstPlayer.value);
    localStorage.setItem("player2", secPlayer.value);
    na1.innerText = localStorage.getItem("player1");
    na2.innerText = localStorage.getItem("player2");
    stat.textContent = "";
    play = true;
}

theStart();

function theStart() {
  btns.forEach(btn => btn.addEventListener('click', clicked))
  

}

function clicked(){
  let isBtn = this.getAttribute("index");
  console.log(isBtn)
  if(option[isBtn]  != ""){
    return;
  }
  selectCell(this, isBtn)
  winner();
}

function selectCell(cell ,index){
  
  option[index] =  firstMove; 
  cell.textContent = firstMove;
  firstMove = (firstMove == 'X') ? 'O' : 'X';
}
  
function winner(){

}