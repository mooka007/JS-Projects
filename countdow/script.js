const daysEl = document.getElementById('dayss');
const hoursEl = document.getElementById('hourss');
const minutesEl = document.getElementById('minutess');
const secondsEl = document.getElementById('secondss');


const newYear = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML= days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML =formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
} 

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);




////////////////////////////////////


const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')){
    openFace.classList.add('active');
    closedFace.classList.remove('active')
}
});

openFace.addEventListener('click', () =>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})