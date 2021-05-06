"use strict"

const menu = document.querySelector('#sidebar');
const body = document.querySelector('#body');
const openSidebar = document.querySelector('#open');
const closeSidebar = document.querySelector('#close');

openSidebar.addEventListener('click', openSide);
closeSidebar.addEventListener('click', closeSide);

function openSide() {
    body.style.width = 'calc(100% - 375px)';
    body.style.overflow = 'hidden';
    menu.style.width = '375px';
    menu.style.right = '0';
}

function closeSide() {
    body.style.width = '100%';
    body.style.overflow = 'initial';
    menu.style.width = '0';
    menu.style.right = '-40px';
}