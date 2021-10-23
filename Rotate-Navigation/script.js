const open = document.getElementById('open');
const close = document.getElementById('close');
const cont = document.querySelector('.container');


open.addEventListener('click', () => cont.classList.add('show-nav'))
close.addEventListener('click', () => cont.classList.remove('show-nav'))