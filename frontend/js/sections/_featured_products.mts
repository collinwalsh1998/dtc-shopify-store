export function initFeaturedProducts(): void {
  $(".fp-slider").slick({
    autoplay: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".fp-prev",
    nextArrow: ".fp-next"
  });
}