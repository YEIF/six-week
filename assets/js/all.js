"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var _Swiper;

  console.log('Hello Bootstrap5');
  var swiperTranslate = new Swiper(".swiperTranslate", (_Swiper = {
    slidesPerView: 3,
    spaceBetween: 16,
    // loop: true,
    // loopedSlides:20,
    // centeredSlides: true,
    // setWrapperSize:true,
    lazy: {
      loadPrevNext: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    loop: true
  }, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "loopedSlides", 20), _Swiper));
  var swiperExclusivecourse = new Swiper('.swiperExclusivecourse', {
    // 分頁   
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 500000 // disableOnInteraction: false,
      // pauseOnMouseEnter: true

    },
    pagination: {
      el: '.swiper-pagination'
    },
    // 左右箭頭    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // 滾動條
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
});
//# sourceMappingURL=all.js.map
