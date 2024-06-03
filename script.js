function initHeaderColors() {
  $(".header-item-menu__text").addClass("text-color-secondary-dark");
  $(".header-item-menu__text:hover").addClass("text-color-primary-dark");
  $(".header-item__text-general").addClass("text-color-primary-dark");
  $(".header-item__select").addClass("text-color-primary-dark");
  $(".header-item__label").addClass("text-color-secondary-dark");
}

function initHandleScroll() {
  const handleScroll = () => {
    let value = window.scrollY;
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (value > 5) {
      $("#header").addClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text")
          .removeClass("text-color-secondary-dark")
          .addClass("text-color-secondary-light");
        $(".header-item-menu__text:hover")
          .removeClass("text-color-primary-dark")
          .addClass("text-color-primary-light");
        $(".header-item__text-general")
          .removeClass("text-color-primary-dark")
          .addClass("text-color-primary-light");
        $(".header-item__select")
          .removeClass("text-color-primary-dark")
          .addClass("text-color-primary-light");
        $(".header-item__label")
          .removeClass("text-color-secondary-dark")
          .addClass("text-color-secondary-light");
      }
    } else {
      $("#header").removeClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text")
          .removeClass("text-color-secondary-light")
          .addClass("text-color-secondary-dark");
        $(".header-item-menu__text:hover")
          .removeClass("text-color-primary-light")
          .addClass("text-color-primary-dark");
        $(".header-item__text-general")
          .removeClass("text-color-primary-light")
          .addClass("text-color-primary-dark");
        $(".header-item__select")
          .removeClass("text-color-primary-light")
          .addClass("text-color-primary-dark");
        $(".header-item__label")
          .removeClass("text-color-secondary-light")
          .addClass("text-color-secondary-dark");
      }
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
function openMenu() {
  $("#header").toggleClass("header").toggleClass("header-responsive");
  $("#header-item-menu")
    .toggleClass("header-item-menu")
    .toggleClass("header-item-menu-responsive");
  $("#header-item-group")
    .toggleClass("header-item-group")
    .toggleClass("header-item-group-responsive");
  $("#header-divider")
    .toggleClass("header-divider-container")
    .toggleClass("header-divider-container-responsive");
  $("#header-item__social-media")
    .toggleClass("header-item__social-media")
    .toggleClass("header-item__social-media-responsive");
  $("#header-item__language")
    .toggleClass("header-item__language")
    .toggleClass("header-item__language-responsive");
  $("#header-item__address")
    .toggleClass("header-item__address")
    .toggleClass("header-item__address-responsive");
  $("#header-item__phone")
    .toggleClass("header-item__phone")
    .toggleClass("header-item__phone-responsive");
}
function initMenuButton() {
  $("#menu-button").click(function () {
    $("body").toggleClass("disable-scroll");
    $("#menu-button").toggleClass("show").toggleClass("hide");
    $("#cross-button").toggleClass("show").toggleClass("hide");
    openMenu();
    $(".header-item-menu__text")
      .removeClass("text-color-secondary-dark")
      .addClass("text-color-secondary-light");
    $(".header-item-menu__text")
      .removeClass("text-color-secondary-dark")
      .addClass("text-color-secondary-light");
    $(".header-item-menu__text:hover")
      .removeClass("text-color-primary-dark")
      .addClass("text-color-primary-light");
    $(".header-item__text-general")
      .removeClass("text-color-primary-dark")
      .addClass("text-color-primary-light");
    $(".header-item__select")
      .removeClass("text-color-primary-dark")
      .addClass("text-color-primary-light");
    $(".header-item__label")
      .removeClass("text-color-secondary-dark")
      .addClass("text-color-secondary-light");
  });

  $("#cross-button").click(function () {
    $("body").toggleClass("disable-scroll");
    $("#menu-button").toggleClass("show").toggleClass("hide");
    $("#cross-button").toggleClass("show").toggleClass("hide");
    openMenu();
    $(".header-item-menu__text")
      .removeClass("text-color-secondary-light")
      .addClass("text-color-secondary-dark");
    $(".header-item-menu__text")
      .removeClass("text-color-secondary-light")
      .addClass("text-color-secondary-dark");
    $(".header-item-menu__text:hover")
      .removeClass("text-color-primary-light")
      .addClass("text-color-primary-dark");
    $(".header-item__text-general")
      .removeClass("text-color-primary-light")
      .addClass("text-color-primary-dark");
    $(".header-item__select")
      .removeClass("text-color-primary-light")
      .addClass("text-color-primary-dark");
    $(".header-item__label")
      .removeClass("text-color-secondary-light")
      .addClass("text-color-secondary-dark");
  });
}

function initSlick() {
  $(".slick").on("init", function (event, slick) {
    $(".slick-custom-slide-text-container__circular-progress").css(
      "--progress",
      (slick.slickCurrentSlide() + 1 / slick.slideCount) * 100
    );
    $(".slick-custom-slide-text-container-progress__label").text(
      `${slick.slickCurrentSlide() + 1}/${slick.slideCount}`
    );
  });
  $(".slick").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-custom-slide-text-container__circular-progress").css(
        "--progress",
        ((currentSlide + 1) / slick.slideCount) * 100
      );
      $(".slick-custom-slide-text-container-progress__label").text(
        `${currentSlide + 1}/${slick.slideCount}`
      );
    }
  );
  $(".slick").slick({
    arrows: true,
  });
  $(".slick__button-prev").click(function () {
    $(".slick").slick("slickPrev");
  });
  $(".slick__button-next").click(function () {
    $(".slick").slick("slickNext");
  });
}

$(document).ready(function () {
  initHeaderColors();
  initHandleScroll();
  initSwiper();
  initMenuButton();
  initSlick();
});
