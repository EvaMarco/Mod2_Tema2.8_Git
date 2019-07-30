'use strict';
const face = document.querySelector('.face');
const head = document.querySelector('.head');

function blink () {
    face.innerHTML = ';)';
}
function smile () {
    face.innerHTML = ':)';
}

head.addEventListener('click', blink);
head.addEventListener('mouseleave', smile);