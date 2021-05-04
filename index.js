"use strict"

const menu = document.querySelector('#sidebar');
const body = document.querySelector('#body');
const openSidebar = document.querySelector('#open');
const closeSidebar = document.querySelector('#close');

openSidebar.addEventListener('click', openSide);
closeSidebar.addEventListener('click', closeSide);

function openSide() {
    body.style.width = '80%';
    body.style.overflow = 'hidden';
    menu.style.visibility = 'visible';
    menu.style.display = 'block';
}

function closeSide() {
    body.style.width = '100%';
    body.style.overflow = 'initial';
    menu.style.visibility = 'hidden';
}