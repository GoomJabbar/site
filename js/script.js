const navToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
   mainNav.hasAttribute("data-visible")
      ? navToggle.setAttribute("aria-expanded", false)
      : navToggle.setAttribute("aria-expanded", true);
   mainNav.toggleAttribute("data-visible");
});

//slider

const slider = new A11YSlider(document.querySelector(".slider"), {
   adaptiveHeight: true,
   slidesToShow: 1,
   arrows: false, // arrows enabled 767px and down
   dots: true,
   skipBtn: false,
   // autoplay: true,
   // autoplaySpeed: 2500,
   responsive: {
      768: {
         slidesToShow: 2,
         arrows: false,
         dots: true,
         skipBtn: false,
         // autoplay: true,
         // autoplaySpeed: 2500,
      },
      960: {
         disable: true, // slider disabled 960px to 1279px
      },
      1280: {
         disable: false,
         slidesToShow: 3,
         arrows: false,
         dots: true, // dots enabled 1280px and up
         skipBtn: false,
         // autoplay: true,
         // autoplaySpeed: 2500,
      },
   },
});
