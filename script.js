function initHeaderColors(){
  $(".header-item-menu__text").addClass("text-color-secondary-dark");
  $(".header-item-menu__text:hover").addClass("text-color-primary-dark");
  $(".header-item__text-general").addClass("text-color-primary-dark");
  $(".header-item__select").addClass("text-color-primary-dark");
  $(".header-item__label").addClass("text-color-secondary-dark")
}

function initHandleScroll() {
  const handleScroll = () => {
    let value = window.scrollY;
    if (value > 5) {
      $("#header").addClass("header__white");

      $(".header-item-menu__text").removeClass("text-color-secondary-dark");
      $(".header-item-menu__text:hover").removeClass("text-color-primary-dark");
      $(".header-item__text-general").removeClass("text-color-primary-dark");
      $(".header-item__select").removeClass("text-color-primary-dark");
      $(".header-item__label").removeClass("text-color-secondary-dark")

      $(".header-item-menu__text").addClass("text-color-secondary-light");
      $(".header-item-menu__text:hover").addClass("text-color-primary-light");
      $(".header-item__text-general").addClass("text-color-primary-light");
      $(".header-item__select").addClass("text-color-primary-light");
      $(".header-item__label").addClass("text-color-secondary-light")
    } else {
      $("#header").removeClass("header__white");
   
      $(".header-item-menu__text").removeClass("text-color-secondary-light");
      $(".header-item-menu__text:hover").removeClass("text-color-primary-light");
      $(".header-item__text-general").removeClass("text-color-primary-light");
      $(".header-item__select").removeClass("text-color-primary-light");
      $(".header-item__label").removeClass("text-color-secondary-light")

      $(".header-item-menu__text").addClass("text-color-secondary-dark");
      $(".header-item-menu__text:hover").addClass("text-color-primary-dark");
      $(".header-item__text-general").addClass("text-color-primary-dark");
      $(".header-item__select").addClass("text-color-primary-dark");
      $(".header-item__label").addClass("text-color-secondary-dark")
    }
  };
  $(document).scroll(handleScroll);
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    on: {
      init: function () {
        console.log("swiper initialized");
      },
    },
    direction: "horizontal",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 10000,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

$(document).ready(function () {
  initHeaderColors();
  initHandleScroll();
  initSwiper();
});
