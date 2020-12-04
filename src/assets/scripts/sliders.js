$(document).ready(() => {

  const topSlider = $('.top-slider-wrapper');

  topSlider.on('init', function (event, slick) {
    topSlider.find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout(function () {
      topSlider.find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
  });

  topSlider.slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    useTransform: true
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


  let sliderPosterList = $('.poster__list-slider');
  sliderPosterList.slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  sliderPosterList.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i === slick.slideCount) $('.poster__nav-next').addClass('poster__list-end');
    else $('.poster__nav-next').removeClass('poster__list-end');

    if (i === 1) $('.poster__nav-prev').addClass('poster__list-end');
    else $('.poster__nav-prev').removeClass('poster__list-end');
  });

  $('.poster__nav-next').on('click', function (e) {
    e.preventDefault();
    sliderPosterList.slick('slickNext');
  });

  $('.poster__nav-prev').on('click', function (e) {
    e.preventDefault();
    sliderPosterList.slick('slickPrev');
  });




  let pages = $('.poster-detail__slider-cnt');
  let sliderPoster = $('.poster-detail__slider-container');

  sliderPoster.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    pages.text(i + ' из ' + slick.slideCount);

    if (i === 1 || i === 2 || i === slick.slideCount) {
      const iframeSrc = $(".slide-poster iframe").attr('data-src');
      $(".slide-poster iframe").attr('src', iframeSrc);
    }
  });

  sliderPoster.slick({
    dots: false,
    arrows: true,
    infinite: true,
    responsive: true,
    asNavFor: '.poster-detail__slider-vertical',
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="btn-slider btn-slider-next"><span></span></button>',
    prevArrow: '<button type="button" class="btn-slider btn-slider-prev"><span></span></button>',
  });

  $('.poster-detail__slider-vertical').slick({
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.poster-detail__slider-container',
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    nextArrow: '<button type="button" class="btn-slider btn-slider-next"><span></span></button>',
    prevArrow: '<button type="button" class="btn-slider btn-slider-prev"><span></span></button>',
  });


  $('.slider-lp').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="btn-slider btn-slider-next"><span></span></button>',
    prevArrow: '<button type="button" class="btn-slider btn-slider-prev"><span></span></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: true,
          arrows: false
        }
      },
    ]
  });

  const topSliderSection = $('.slider-top');
  const speedTopSliderSection = topSliderSection.attr('data-speed') || 2000;

  topSliderSection.slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: speedTopSliderSection,
    dotsClass: 'slick-dots-square',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: false
        }
      },
    ]
  });

  $('.top-btn-slider-next').on('click', function () {
    topSliderSection.slick('slickNext');
  });

  $('.top-btn-slider-prev').on('click', function () {
    topSliderSection.slick('slickPrev');
  });

  $('.restaurant-fixed__items').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

});
