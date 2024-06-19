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

  if($(window).width() < 1130){
    $(".swiper-banner-button-container").css("display", "none");
  }
}

function initAppartmentsSlider() {
  const appartmentsSlider = new Swiper(".appartments-slider", {//init and config slider for appartments
    // Optional parameters
    on: {
      init: function () {
        console.log("swiper initialized");
      },
    },
    direction: "horizontal",
    loop: true,
    allowTouchMove: false,
    // slidesOffsetBefore: 100,
    // slidesOffsetAfter: 100,
    // slidesPerView: 'auto',
    slidesPerView: 4,
    // pagination: true,
    
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // },
    // Navigation arrows
    navigation: {
      nextEl: ".appartments-section-button-left",
      prevEl: ".appartments-section-button-right",
    },
  });
}
function openMenu() {//changes styles for header to transform it into popup
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

const appartments = [
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"Bob",
  type:"Fun",
  total_squares: "Minion",
  layout_img: "assets/appartments-layout-2.jpg",
  price:"papoi",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "minion number",
  section:1,
  building:1
},
{
  title:"1С31К",
  type:"S (Smart)",
  total_squares: "31 м.кв",
  layout_img: "assets/appartments-layout-1.jpg",
  price:"440.000",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "0",
  section:2,
  building:2
},
{
  title:"1С31К",
  type:"S (Smart)",
  total_squares: "31 м.кв",
  layout_img: "assets/appartments-layout-1.jpg",
  price:"440.000",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "0",
  section:3,
  building:3
},
{
  title:"1С31К",
  type:"S (Smart)",
  total_squares: "31 м.кв",
  layout_img: "assets/appartments-layout-1.jpg",
  price:"440.000",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "0",
  section:1,
  building:1
},
{
  title:"1С31К",
  type:"S (Smart)",
  total_squares: "31 м.кв",
  layout_img: "assets/appartments-layout-1.jpg",
  price:"440.000",
  pdf: "assets/Chainsaw Man [Volume 01].pdf",
  phone_number: "0",
  section:2,
  building:5
},
];

function generateCards(appartments, building, section){

let template = $(".template-card__appartment").html();
let filtered_appartments = appartments.filter((appartment)=>{
  return appartment.building == building && appartment.section == section;
})
$(".appartments-slider .swiper-wrapper .swiper-slide").remove();
 for(let i = 0; i < filtered_appartments.length; i++){
  let newCard = $(template);
  newCard.find('.appartments-slider-item-image-container img').attr("src",filtered_appartments[i].layout_img);
  newCard.find('.appartments-slider-item-image-container a').attr("href",filtered_appartments[i].layout_img);
  newCard.find('.appartments-slider-item__title p').text(filtered_appartments[i].title);
  newCard.find('.appartments-slider-item-tags-tag__value:eq(0)').text(filtered_appartments[i].type);
  newCard.find('.appartments-slider-item-tags-tag__value:eq(1)').text(filtered_appartments[i].total_squares);
  newCard.find('.appartments-slider-item-tags-tag__value-link').attr("href",filtered_appartments[i].layout_img);
  newCard.find('.appartments-slider-item-price p:eq(1)').text(filtered_appartments[i].price);
  newCard.find('.appartments-slider-item-download__text').attr("href",filtered_appartments[i].pdf);
  newCard.find('.appartments-slider-item-download__img').attr("href",filtered_appartments[i].pdf);
  newCard.find('.appartments-slider-item-button').attr("href","tel:" + filtered_appartments[i].phone_number); 
  $(".appartments-slider .swiper-wrapper").append(newCard);
  initAppartmentsSlider();
 }
}
var selectedBuilding = 1;
var selectedSection = 1;
function initAppartmentsFilter (){
  $("#section-1").addClass("appartments-button-group__button-selected");
  $("#building-1").addClass("appartments-button-group__button-selected");
  generateCards(appartments,selectedBuilding,selectedSection);

  $(".building").click(function(){
    $(".building").removeClass("appartments-button-group__button-selected");
    $(this).addClass("appartments-button-group__button-selected");
    selectedBuilding = parseInt($(this).text());
    generateCards(appartments, selectedBuilding, selectedSection);
    console.log(selectedBuilding);
  });
  $(".section").click(function(){
    $(".section").removeClass("appartments-button-group__button-selected");
    $(this).addClass("appartments-button-group__button-selected");
    selectedSection = parseInt($(this).text());
    generateCards(appartments, selectedBuilding, selectedSection);
  });
}
function initFancybox (){
  Fancybox.bind('[data-fancybox="appartments-layouts"]', {
    // Your custom options for a specific gallery
    // Toolbar: false,
    // baseClass : 'fancybox-custom-layout',
    // prev: {
    //   tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev> </button>',
    // },
  });
}
$(document).ready(function () {
  initHeaderColors();
  initHandleScroll();
  initSwiper();
  initMenuButton();
  initSlick();
  initAppartmentsFilter();
  initFancybox ();
});