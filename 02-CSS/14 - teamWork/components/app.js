document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const stickyOffset = navbar.offsetTop;
    const brand1Left = document.querySelector('.header__nav__left .brand1');
    const brand2Left = document.querySelector('.header__nav__left .brand2');
    const brand1Right = document.querySelector('.header__nav__right .brand1');
    const brand2Right = document.querySelector('.header__nav__right .brand2');

    function handleScroll() {
        if (window.pageYOffset > stickyOffset) {
            navbar.classList.add('sticky');
            brand1Left.style.display = 'none';
            brand2Left.style.display = 'inline';
            brand1Right.style.display = 'none';
            brand2Right.style.display = 'inline';
        } else {
            navbar.classList.remove('sticky');
            brand1Left.style.display = 'inline';
            brand2Left.style.display = 'none';
            brand1Right.style.display = 'inline';
            brand2Right.style.display = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('slidingMenu').classList.add('open');
});

document.getElementById('closeMenuButton').addEventListener('click', function() {
    document.getElementById('slidingMenu').classList.remove('open');
});
