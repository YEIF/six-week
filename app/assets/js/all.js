$(function () {
  console.log('Hello Bootstrap5');


  var swiperTranslate = new Swiper(".swiperTranslate", {
    slidesPerView: 3,
    spaceBetween: 16,
    // loop: true,
    // loopedSlides:20,
    // centeredSlides: true,
    // setWrapperSize:true,
    lazy: {
      loadPrevNext: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    loop : true,
    slidesPerView : 'auto',
    loopedSlides :20,
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 16
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 16
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     // slidesPerView: auto,
    //     loop : true,
    //     slidesPerView : 'auto',
    //     loopedSlides :20,
    //   }
    // }
  });

  const swiperExclusivecourse = new Swiper('.swiperExclusivecourse', {
    // 分頁   

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 500000,
      // disableOnInteraction: false,
      // pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
    },
    // 左右箭頭    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 滾動條
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

});