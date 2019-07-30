'use strict';
const face = document.querySelector('.face');

function blink () {
    face.innerHTML = ';)';
}
function smile () {
    face.innerHTML = ':)';
}

face.addEventListener('click', blink);
face.addEventListener('mouseleave', smile);