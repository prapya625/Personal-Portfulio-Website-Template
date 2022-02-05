const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar-right');

burger.addEventListener('click', function () {
    nav.classList.toggle('clicked');
    this.classList.toggle('active');
}); 