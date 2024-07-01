 //selecting active meny item
function initHeaderColors() {
  $(".header-item-menu__text").click(function () {
    $(".header-item-menu__text").removeClass("header-item-selected");
    $(this).addClass("header-item-selected");
  });
}

//changes header colors depends on screen width and scroll
function initHandleScroll() {
  const handleScroll = () => {
    let value = window.scrollY;
    let vw = $(window).width();
    if (value > 5) {
      $("#header").addClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text").css(
          "color",
          `var(--text-color-secondary-light)`
        );
        $(".header-item-menu__text:hover").css(
          "color",
          `var(--text-color-primary-light)`
        );
        $(".header-item__text-general").css(
          "color",
          `var(--text-color-primary-light)`
        );
        $(".header-item__select").css(
          "color",
          `var(--text-color-primary-light)`
        );
        $(".header-item__label").css(
          "color",
          `var(--text-color-secondary-light)`
        );
      }
    } else {
      $("#header").removeClass("header__white");

      if (vw > 1130) {
        $(".header-item-menu__text").css(
          "color",
          `var(--text-color-secondary-dark)`
        );
        $(".header-item-menu__text:hover").css(
          "color",
          `var(--text-color-primary-dark)`
        );
        $(".header-item__text-general").css(
          "color",
          `var(--text-color-primary-dark)`
        );
        $(".header-item__select").css(
          "color",
          `var(--text-color-primary-dark)`
        );
        $(".header-item__label").css(
          "color",
          `var(--text-color-secondary-dark)`
        );
      }
    }
  };
  $(document).scroll(handleScroll);
}

  //init and config main slider
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
      nextEl: "#swiper-button-next",
      prevEl: "#swiper-button-prev",
    },
  });

  if ($(window).width() < 1130) {
    $(".swiper-banner-button-container").css("display", "none");
  }
}

  //init and config slider for appartments
function initAppartmentsSlider() {
  const appartmentsSlider = new Swiper(".appartments-slider", {
    // Optional parameters
    on: {
      init: function () {
        console.log("swiper initialized");
      },
    },
    direction: "horizontal",
    loop: true,
    allowTouchMove: false,
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      654: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1130: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200:{
        slidesPerView: 4,
        spaceBetween: 30
      }
    },

    pagination: {
      el: ".appartments-section-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".appartments-section-button-left",
      prevEl: ".appartments-section-button-right",
    },
  });
  if ($(window).width() > 1130) {
    $(".appartments-section-dots-container").hide();
  } else {
    $(".appartments-section-button-left").hide();
    $(".appartments-section-button-right").hide();
  }
}

//init and config slider for news
function initNewsSlider() {
  const newsSlider = new Swiper(".news-slider", {
    // Optional parameters
    on: {
      init: function () {
        console.log("news swiper initialized");
      },
    },
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    allowTouchMove: false,
    autoplay: {
      delay: 10000,
    },
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 880px
      880: {
        slidesPerView: 2,
      },
      // when window width is >= 1445px
      1445: {
        slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".news-section-button-right",
      prevEl: ".news-section-button-left",
    },
  });
}

 //init and config slider for complex gallery
function initComplexGallerySlider() {
  const complexGallerySlider = new Swiper(".complex-gallery-slider", {
    // Optional parameters
    on: {
      init: function () {
        console.log("gallery swiper initialized");
      },
    },
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
      delay: 10000,
    },
    spaceBetween: 20,
    // Navigation arrows

    pagination: {
      el: ".complex-gallery-slider-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
      nextEl: ".complex-gallery-slider-button__next",
      prevEl: ".complex-gallery-slider-button__prev",
    },
  });

  if ($(window).width() > 560) {
    $(".complex-gallery-slider-dots-container").hide();
  } else {
    $(".complex-gallery-slider-button__prev").hide();
    $(".complex-gallery-slider-button__next").hide();
  }
}

//changes styles for header to transform it into popup
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

//changes menu button on click
function initMenuButton() {
  var toggled = false;

  if($(window).width()<=560){
    $("#header-dropdown-menu__icon, .header-item-menu__text").click(function () {
      toggled = !toggled;
      $("#header-dropdown-menu__icon").attr(
        "src",
        toggled ? "assets/cross-icon.svg" : "assets/menu-icon.svg"
      );
      openMenu();
    });
  }
}

//initialize and config slick slider, progress bar
function initSlick() {
  $(".slick").on("init", function (event, slick) {
    $(".slick-custom-slide__circular-progress").css(
      "--progress",
      (slick.slickCurrentSlide() + 1 / slick.slideCount) * 100
    );
    $(".slick-custom-slide-progress__label").text(
      `${slick.slickCurrentSlide() + 1}/${slick.slideCount}`
    );
    $("slick-dots").css("display", "none");
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
  if ($(window).width() > 1130) {
    $(".slick-button__next").show();
    $(".slick-button__prev").show();
    $(".slick").slick({
      arrows: false,
      dots: false,
    });
  } else {
    $(".slick-button__next").hide();
    $(".slick-button__prev").hide();
    $(".slick").slick({
      prevArrow: $(".slick-button__prev"),
      nextArrow: $(".slick-button__next"),
      arrows: false,
      dots: true,
      appendDots: $(".slick-dots-custom"),
    });
  }

  $(".slick-button__prev").click(function () {
    $(".slick").slick("slickPrev");
  });
  $(".slick-button__next").click(function () {
    $(".slick").slick("slickNext");
  });
}

//initialize and config slick slider, progress bar
function initConstructionProgressSlider() {
  $(".construction-progress-slider").on("init", function (event, slick) {});
  if ($(window).width() > 1130) {
    $(".construction-progress-slider-button__next").show();
    $(".construction-progress-slider-button__prev").show();
    $(".construction-progress-slider").slick({
      arrows: false,
      dots: false,
    });
  } else {
    $(".construction-progress-slider-button__next").hide();
    $(".construction-progress-slider-button__prev").hide();
    $(".construction-progress-slider").slick({
      prevArrow: $(".construction-progress-slider-button__prev"),
      nextArrow: $(".construction-progress-slider-button__next"),
      arrows: false,
      dots: true,
      appendDots: $(".construction-progress-slider-dots"),
    });
  }

  $(".construction-progress-slider-button__prev").click(function () {
    $(".construction-progress-slider").slick("slickPrev");
  });
  $(".construction-progress-slider-button__next").click(function () {
    $(".construction-progress-slider").slick("slickNext");
  });
}

const appartments = [
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "Bob",
    type: "Fun",
    total_squares: "Minion",
    layout_img: "assets/appartments-layout-2.jpg",
    price: "papoi",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "minion number",
    section: 1,
    building: 1,
  },
  {
    title: "1С31К",
    type: "S (Smart)",
    total_squares: "31 м.кв",
    layout_img: "assets/appartments-layout-1.jpg",
    price: "440.000",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "0",
    section: 2,
    building: 2,
  },
  {
    title: "1С31К",
    type: "S (Smart)",
    total_squares: "31 м.кв",
    layout_img: "assets/appartments-layout-1.jpg",
    price: "440.000",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "0",
    section: 3,
    building: 3,
  },
  {
    title: "1С31К",
    type: "S (Smart)",
    total_squares: "31 м.кв",
    layout_img: "assets/appartments-layout-1.jpg",
    price: "440.000",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "0",
    section: 1,
    building: 1,
  },
  {
    title: "1С31К",
    type: "S (Smart)",
    total_squares: "31 м.кв",
    layout_img: "assets/appartments-layout-1.jpg",
    price: "440.000",
    pdf: "assets/Chainsaw Man [Volume 01].pdf",
    phone_number: "0",
    section: 2,
    building: 5,
  },
];

function generateCards(appartments, building, section) {
  let template = $(".template-card__appartment").html();
  let filtered_appartments = appartments.filter((appartment) => {
    return appartment.building == building && appartment.section == section;
  });
  $(".appartments-slider .swiper-wrapper .swiper-slide").remove();
  for (let i = 0; i < filtered_appartments.length; i++) {
    let newCard = $(template);
    newCard
      .find(".appartments-slider-item-image-container img")
      .attr("src", filtered_appartments[i].layout_img);
    newCard
      .find(".appartments-slider-item-image-container a")
      .attr("href", filtered_appartments[i].layout_img);
    newCard
      .find(".appartments-slider-item__title p")
      .text(filtered_appartments[i].title);
    newCard
      .find(".appartments-slider-item-tags-tag__value:eq(0)")
      .text(filtered_appartments[i].type);
    newCard
      .find(".appartments-slider-item-tags-tag__value:eq(1)")
      .text(filtered_appartments[i].total_squares);
    newCard
      .find(".appartments-slider-item-tags-tag__value-link")
      .attr("href", filtered_appartments[i].layout_img);
    newCard
      .find(".appartments-slider-item-price p:eq(1)")
      .text(filtered_appartments[i].price);
    newCard
      .find(".appartments-slider-item-download__text")
      .attr("href", filtered_appartments[i].pdf);
    newCard
      .find(".appartments-slider-item-download__img")
      .attr("href", filtered_appartments[i].pdf);
    newCard
      .find(".appartments-slider-item-button")
      .attr("href", "tel:" + filtered_appartments[i].phone_number);
    $(".appartments-slider .swiper-wrapper").append(newCard);
    initAppartmentsSlider();
  }
}
var selectedBuilding = 1;
var selectedSection = 1;
function initAppartmentsFilter() {
  $("#section-1").addClass("appartments-button-group__button-selected");
  $("#building-1").addClass("appartments-button-group__button-selected");
  generateCards(appartments, selectedBuilding, selectedSection);

  $(".building").click(function () {
    $(".building").removeClass("appartments-button-group__button-selected");
    $(this).addClass("appartments-button-group__button-selected");
    selectedBuilding = parseInt($(this).text());
    generateCards(appartments, selectedBuilding, selectedSection);
    console.log(selectedBuilding);
  });
  $(".section").click(function () {
    $(".section").removeClass("appartments-button-group__button-selected");
    $(this).addClass("appartments-button-group__button-selected");
    selectedSection = parseInt($(this).text());
    generateCards(appartments, selectedBuilding, selectedSection);
  });
}

//init and config fancybox
function initFancybox() {
  Fancybox.bind('[data-fancybox="appartments-layouts"]', {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: ["infobar"],
        right: ["close"],
      },
    },
  });
}

//form mask and validation
function initValidation() {
  //function to check regex
  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );

  //setup validation
  $("#contact-us-form").validate({
    rules: {
      "contact-section-form__name": {
        required: true,
      },
      "contact-section-form__phone": {
        required: true,
        regex: "^((?!#).)*$",
      },
    },
    messages: {
      "contact-section-form__name": {
        required: "Необхідно заповнити поле",
      },
      "contact-section-form__phone": {
        required: "Необхідно заповнити поле",
        regex: "Необхідно заповнити поле",
      },
    },
  });

  //setup mask for phone number input
  IMask(document.getElementById("contact-section-form__phone"), {
    mask: "{38\\0} (00) 00 00 000",
    lazy: false,
    placeholderChar: "#",
  });
}

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 50.363508, lng: 30.3777 };
  // Request needed libraries.
  //@ts-ignore
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const beachFlagImg = document.createElement("img");

  beachFlagImg.src = "assets/map-custom-marker__red.svg";
  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
    disableDefaultUI: true,
  });

  let contentString =
    '<div class="contact-section-map-modal">' +
    '<p class="contact-section-map-modal__title">Житловий комплекс “Dream House”</p>' +
    '<div class="contact-section-map-modal-item">' +
    '<img class="contact-section-map-modal-item__img" src="assets/geolocation-icon__white.svg" alt="">' +
    '<p class="contact-section-map-modal-item__text">с.Крюковщина 191, Київська область</p>' +
    "</div>" +
    '<div class="contact-section-map-modal-item">' +
    '<img class="contact-section-map-modal-item__img" src="assets/phone-icon__gray.svg" alt="">' +
    '<p class="contact-section-map-modal-item__text">+380 99 2337 999</p>' +
    "</div>" +
    '<div class="contact-section-map-modal-item">' +
    '<img class="contact-section-map-modal-item__img" src="assets/email-icon__white.svg" alt="">' +
    '<a href="#" class="contact-section-map-modal-item__link">sales@domail.com</a>' +
    "</div>" +
    '<div class="contact-section-map-modal-item">' +
    '<img class="contact-section-map-modal-item__img" src="assets/time-icon__white.svg" alt="">' +
    '<p class="contact-section-map-modal-item__text">08:00 – 18:00</p>' +
    "</div>" +
    "</div>";

  const infoWindow = new InfoWindow({
    ariaLabel: "SmartAvenue",
  });

  // The marker, positioned at SmartAvenue
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: beachFlagImg,
    title: "SmartAvenue",
    gmpClickable: true,
  });

  // Add a click listener for each marker, and set up the info window.
  marker.addListener("click", ({ domEvent, latLng }) => {
    const { target } = domEvent;

    infoWindow.close();
    infoWindow.setContent(contentString);
    infoWindow.open(marker.map, marker);
  });
}

$(document).ready(function () {
  initHeaderColors();
  initHandleScroll();
  initSwiper();
  initMenuButton();
  initSlick();
  initAppartmentsFilter();
  initFancybox();
  initNewsSlider();
  initConstructionProgressSlider();
  initComplexGallerySlider();
  initValidation();
  initMap();
});
