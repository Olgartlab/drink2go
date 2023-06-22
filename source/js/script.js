/* Слайдер */
const swiper = new Swiper('.slider__container', {
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__arrow--right',
    prevEl: '.slider__arrow--left',
  },

  slidesPerView: 1,
  loop: false,


});

/* Карта */
const map = L.map('map').setView([59.968137, 30.316272], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const customIcon = L.icon({
  iconUrl: 'img/images/map-pin.svg',

  iconSize: [38, 50],
  iconAnchor: [18, 50],
});

const marker = L.marker([59.968137, 30.316272], {icon: customIcon}).addTo(map);

/* Меню */
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let siteList = document.querySelector('.site-list');

navMain.classList.add('main-nav--closed');
siteList.classList.add('site-list--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
  }
});
