function initHandleScroll() {
  const handleScroll = () => {
    let value = window.scrollY;
    if (value > 0) {
      document.getElementById("header").classList.add("header__white");
    } else {
      document.getElementById("header").classList.remove("header__white");
    }
  };
  document.addEventListener("scroll", handleScroll);
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
  initHandleScroll();
  initSwiper();
});
