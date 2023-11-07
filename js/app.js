const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 800,
    interval: 2000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);