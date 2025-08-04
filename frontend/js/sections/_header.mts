export function initHeader(): void {
  $(".topbar-slider").slick({
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