const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  //  centeredSlides: true,
  // пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // навигация
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ///////////////////////////////////////
const swiperOffers = new Swiper(".special-offers__container", {
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 500,
  navigation: {
    nextEl: ".special-offers__button-prev",
    prevEl: ".special-offers__button-next",
  },

  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    600: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    767: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
  },
});
//////////////////////////////////////////

const usefulSwiper = new Swiper(".useful__wrapper", {
  loop: true,
  speed: 500,
  spaceBetween: 32,

  navigation: {
    nextEl: ".useful__button-prev",
    prevEl: ".useful__button-next",
  },

  breakpoints: {
    750: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
    },
    979: {
      slidesPerView: 3,
    },
    1190: {
      slidesPerView: 2,
    },
  },
});

////////////////////////////////////////

const similarProducts = new Swiper(".similar-products__wrapper", {
  loop: true,
  speed: 500,

  navigation: {
    nextEl: ".similar-products__button-prev",
    prevEl: ".similar-products__button-next",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    979: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1190: {
      slidesPerView: 4,
      spaceBetween: 33,
    },
  },
});

//////////////////////////////////////////

const miniCardProduct = new Swiper(".mini-card-product__images", {
  slidesPerView: 4,
  loop: true,
  speed: 500,
  initialSlide: 2,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      direction: "horizontal",
      spaceBetween: 16,
    },
    601: {
      slidesPerView: 4,
      direction: "vertical",
    },
    979: {
      slidesPerView: 4,
      direction: "horizontal",
    },
  },
});

const cardProduct = new Swiper(".card-product__images", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 32,
  navigation: {
    nextEl: ".card-product__button-prev",
    prevEl: ".card-product__button-next",
  },
  thumbs: {
    swiper: miniCardProduct,
  },
  breakpoints: {
    320: {
      direction: "horizontal",
    },
    601: {
      direction: "vertical",
    },
    979: {
      direction: "horizontal",
    },
  },
});

//////////////////////////////////////////

const miniCardProductModal = new Swiper(".mini-card__modal", {
  slidesPerView: 4,
  loop: true,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    979: {
      slidesPerView: 3,
    },
    1190: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".mini-card__button-prev",
    prevEl: ".mini-card__button-next",
  },
});

const cardProductModal = new Swiper(".modal__container", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  thumbs: {
    swiper: miniCardProductModal,
  },
});
