window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header__dropdown-btn");
    const list = document.querySelector(".nav__list");
    const burgerStick = document.querySelectorAll(".burger-stick");

    //animation
    const heroImg = document.querySelector(".hero__img");
    const heroBlock = document.querySelector(".hero__block");
    const heroDescription = document.querySelectorAll(".hero__content>*");
    const whyBlock = document.querySelector(".why");
    const about = document.querySelector(".about");
    const help = document.querySelector(".help");
    const helpList = document.querySelector(".help__list");
    const helpListMore = document.querySelector(".help__list-more");
    const helpListDescription = document.querySelector(
        ".help__list-description"
    );
    const info = document.querySelector(".info");
    const contact = document.querySelector(".contact");
    const footer = document.querySelector(".footer");

    const blocksArray = [
        whyBlock,
        about,
        help,
        helpList,
        helpListMore,
        helpListDescription,
        info,
        contact,
        footer,
    ];
    const whyText = document.querySelector(".why__content");
    const whyImg = document.querySelector(".why__img");
    const aboutText = document.querySelector(".about__content");
    const infoImg = document.querySelector(".info__img");
    const contactImg = document.querySelector(".contact__img");
    const footerImg = document.querySelector(".footer__img");
    
    whyText.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    aboutText.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    whyImg.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    infoImg.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    contactImg.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    footerImg.style.transition = "opacity 0.5s linear, transform 0.5s linear";

    function animationScroll(arr) {
        let scrollTop = window.scrollY;
        let windowCenter = window.innerHeight / 2 + scrollTop;
        arr.forEach((item) => {
            item.style.transition = "opacity 0.5s linear";
            let blockHeight = item.offsetTop;

            if (windowCenter >= blockHeight) {
                item.classList.add("show");
                item.classList.remove("unShow");
            } else {
                item.classList.remove("show");
                item.classList.add("unShow");
            }
        });
    }

    function burgerMenu() {
        if (list.classList.contains("open")) {
            list.classList.remove("open");
            burgerStick[0].classList.remove("burger-stick-top");
            burgerStick[1].classList.remove("burger-active");
            burgerStick[2].classList.remove("burger-stick-bottom");
            setTimeout(() => {
                burgerStick[0].style.top = "0";
                burgerStick[2].style.top = "10px";
            }, 400);
        } else {
            list.classList.add("open");
            burgerStick[0].style.top = "5px";
            burgerStick[2].style.top = "5px";
            burgerStick[1].classList.add("burger-active");
            setTimeout(() => {
                burgerStick[0].classList.add("burger-stick-top");
                burgerStick[2].classList.add("burger-stick-bottom");
            }, 400);
        }
    }

    function animationHero() {
        setTimeout(() => {
            heroDescription.forEach((item) => {
                item.classList.add("active-text");
            });
            heroBlock.classList.add("active__block");
            heroImg.classList.add("active__img");
        }, 1);
    }

    menu.addEventListener("click", burgerMenu);

    window.addEventListener("scroll", () => {
        animationScroll(blocksArray);
    });

    window.addEventListener("load", () => {
        animationScroll(blocksArray);
        animationHero();
    });
});

//
