$(document).ready(() => {

  $('.top-slider-wrapper').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-full').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slider-poster').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="btn-slider btn-slider-next"><span></span></button>',
    prevArrow: '<button type="button" class="btn-slider btn-slider-prev"><span></span></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

});
