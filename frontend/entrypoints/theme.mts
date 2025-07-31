import 'vite/modulepreload-polyfill'

//scope variables
(() => {
  function initSliders(): void {
    $('.topbar-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  $(function() {
    initSliders();
  });
})();