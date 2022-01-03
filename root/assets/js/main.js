'use strict'

// DOM element variables
const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.nav')
const email = document.querySelector('#email')


// Dropdown functionality
btnHamburger.addEventListener('click', function(){
    this.classList.toggle('header__menu--active');
    nav.classList.toggle('nav--active');
})


