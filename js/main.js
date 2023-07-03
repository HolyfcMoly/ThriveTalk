const menu = document.querySelector('.header__dropdown-btn')
const list = document.querySelector('.nav__list')
const burgerStick = document.querySelectorAll('.burger-stick')

menu.addEventListener('click', function () {
    if(list.classList.contains('open')) {
        list.classList.remove('open')
        burgerStick[0].classList.remove('burger-stick-top')
        burgerStick[1].classList.remove('burger-active')
        burgerStick[2].classList.remove('burger-stick-bottom')
        setTimeout(() => {
            burgerStick[0].style.top = '0'
            burgerStick[2].style.top = '10px'
        },400)
    } else {
        list.classList.add('open');
        burgerStick[0].style.top = '5px'
        burgerStick[2].style.top = '5px'
        burgerStick[1].classList.add('burger-active')
        setTimeout(() => {
            burgerStick[0].classList.add('burger-stick-top')
            burgerStick[2].classList.add('burger-stick-bottom')
        },400)
    }
})

// document.addEventListener("click", function (e) {
//     if (!list.contains(e.target))
//     {list.classList.remove('open');}
// });