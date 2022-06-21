const container = document.querySelector('.container');
const picture = 'https://source.unsplash.com/random/'
const rows = 3

for(let i=0; i< rows ; i++){
    const img = document.createElement('img');
    img.src = `${picture}${size()}`
    container.appendChild(img)
}



function getNumb(){
    return Math.floor(Math.random() *10) +300
}

function size(){
    return `${getNumb()}x${getNumb()}`
}