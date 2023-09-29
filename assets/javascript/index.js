const nav = document.getElementById('main-nav');
const navBackgroundColor = '#ffc017';
const scrolledBackgroundColor = 'white';
const start = document.getElementById('start');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = scrolledBackgroundColor;
        start.style.backgroundColor = '#1a8917';
    } else {
        nav.style.backgroundColor = navBackgroundColor;
        start.style.backgroundColor = 'black';  // Torna a nero quando lo scroll è inferiore a 50px
    }
});
