function initHeaderColors() {//selecting active meny item
  $(".header-item-menu__text").click(function(){
    $(".header-item-menu__text").removeClass("header-item-selected");
    $(this).addClass("header-item-selected");
  })
}

function initHandleScroll() {//changes header colors depends on screen width and scroll
  const handleScroll = () => {
    let value = window.scrollY;
    let vw = $(window).width();
    if (value > 5) {
      $("#header").addClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text")
        .css("color",`var(--text-color-secondary-light)`)
        $(".header-item-menu__text:hover")
        .css("color",`var(--text-color-primary-light)`)
        $(".header-item__text-general")
        .css("color",`var(--text-color-primary-light)`)
        $(".header-item__select")
        .css("color",`var(--text-color-primary-light)`)
        $(".header-item__label")
        .css("color",`var(--text-color-secondary-light)`)
      }
    } else {
      $("#header").removeClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text")
        .css("color",`var(--text-color-secondary-dark)`)
        $(".header-item-menu__text:hover")
        .css("color",`var(--text-color-primary-dark)`)
        $(".header-item__text-general")
        .css("color",`var(--text-color-primary-dark)`)
        $(".header-item__select")
        .css("color",`var(--text-color-primary-dark)`)
        $(".header-item__label")
        .css("color",`var(--text-color-secondary-dark)`)
      }
    }
  };
  $(document).scroll(handleScroll);
}

function initSwiper() {//init and config main slider
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
      nextEl: "#swiper-button-next",
      prevEl: "#swiper-button-prev",
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
function initMenuButton() {//changes menu button on click
  var toggled = false;
  $("#header-dropdown-menu__icon").click(function () {
    toggled = !toggled;
    $("#header-dropdown-menu__icon").attr("src",toggled ? 'assets/cross-icon.svg' : 'assets/menu-icon.svg');
    openMenu();
  });
}

function initSlick() { //initialize and config slick slider, progress bar 
  $(".slick").on("init", function (event, slick) {
    $(".slick-custom-slide__circular-progress").css(
      "--progress",
      (slick.slickCurrentSlide() + 1 / slick.slideCount) * 100
    );
    $(".slick-custom-slide-progress__label").text(
      `${slick.slickCurrentSlide() + 1}/${slick.slideCount}`
    );
    $("slick-dots").css("display","none");
  });
  $(".slick").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-custom-slide__circular-progress").css(
        "--progress",
        ((currentSlide + 1) / slick.slideCount) * 100
      );
      $(".slick-custom-slide-progress__label").text(
        `${currentSlide + 1}/${slick.slideCount}`
      );
    }
  );
  if($(window).width() > 1130){
    $(".slick-button__next").show();
    $(".slick-button__prev").show();
    $(".slick").slick({
      arrows: false,
      dots: false
    });
  }
  else{
    $(".slick-button__next").hide();
    $(".slick-button__prev").hide();
    $(".slick").slick({
      prevArrow: $('.slick-button__prev'),
      nextArrow: $('.slick-button__next'),
      arrows: false,
      dots: true
    });
  }

  $(".slick-button__prev").click(function () {
    $(".slick").slick("slickPrev");
  });
  $(".slick-button__next").click(function () {
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
