const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


const img = document.querySelectorAll('#imgs img')

//b ta3tina whd nodeList() dyal img li kaunin f imgs
// console.log(img)
let idx = 0;
// function run (){
//     idx++;
//     changeImage();
// }

function changeImage(){
    if(idx > img.length - 1 ){
        idx = 0;
    }else if(idx < 0 ) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 350}px)` 
}

rightBtn.addEventListener('click', () =>{
    idx++;
    changeImage();
})

leftBtn.addEventListener('click', () =>{
    idx--;
    changeImage();
})