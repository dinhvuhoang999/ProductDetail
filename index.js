console.log('sadsda');
var swiper = new Swiper(".mySwiper", {
//   loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,   
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
