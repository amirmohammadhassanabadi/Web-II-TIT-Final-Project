let menuBarBTN = document.getElementById('menuBarBTN');
let mobileMenu = document.getElementById('mobileMenu');
let menuBarBtnIcon = document.getElementById('menuBarBtnIcon');
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('d-none');
        menuBarBtnIcon.classList.add('fas', 'fa-bars');
        menuBarBtnIcon.classList.remove('fa', 'fa-close');
    }
})
menuBarBtnIcon.addEventListener('click', function () {
    if (menuBarBtnIcon.classList[1] == 'fa-bars' || menuBarBtnIcon.classList[3] == 'fa-bars') {
        menuBarBtnIcon.classList.remove('fas', 'fa-bars');
        menuBarBtnIcon.classList.add('fa', 'fa-close');
        mobileMenu.classList.remove('d-none');
    } else {
        menuBarBtnIcon.classList.add('fas', 'fa-bars');
        menuBarBtnIcon.classList.remove('fa', 'fa-close');
        mobileMenu.classList.add('d-none');
    }
})