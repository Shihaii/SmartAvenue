// import Swiper from 'swiper/bundle';
// import Swiper from '/node_modules/swiper';

console.log("hi");
const handleScroll = () => {
  console.log("hi");
  let value = window.scrollY;
  console.log("value", value);
  if (value > 0) {
    document.getElementById("header").classList.add("header__white");
  } else {
    document.getElementById("header").classList.remove("header__white");
  }
};
document.addEventListener("scroll", handleScroll);



const swiper = new Swiper('.swiper', {
  // Optional parameters
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1000000,
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});