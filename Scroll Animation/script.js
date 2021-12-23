const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox)
checkBox();

function checkBox(){
    const trigBot = window.innerHeight / 5 *4
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < trigBot){
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}