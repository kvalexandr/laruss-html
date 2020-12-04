/* src/app.js */

// Styles
import 'styles/_app.scss';

import 'bootstrap/js/dist/modal';
import '@fancyapps/fancybox';
import 'slick-carousel';
import 'jquery-datetimepicker/build/jquery.datetimepicker.full.min';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SimpleBar from 'simplebar';

import 'scripts/ymaps';
import 'scripts/sliders';

$(document).ready(() => {

  const menuMobile = document.querySelector('.menu_mobile-scroll');
  if (menuMobile) {
    new SimpleBar(menuMobile, { autoHide: false });
  }

  $.datetimepicker.setLocale('ru');
  $('.datetimepicker').datetimepicker({
    format: 'd.m.Y H:i',
    formatDate: 'd.m.Y',
    timepicker: true,
    daysOfWeekDisabled: [0, 6],
    disabledDates: disabledDates,
    onGenerate: function (ct) {
      jQuery(this).find('.xdsoft_disabled').on('mouseenter', function (e) {
        e.preventDefault();
        // const dateMsg = $(".date-disabled-msg").html();

        // const dateMsg = document.createElement('div');
        // dateMsg.setAttribute('id', 'date-disabled-msg');
        // dateMsg.innerHTML = 'Бронирование на эту дату осуществляется по телефону +7 (812) 571-75-91';

        // dateMsg.addEventListener('mouseleave', function (e) {
        //   this.remove();
        // });

        // $(this).append(dateMsg);
      });

      // jQuery(this).find('.xdsoft_disabled').on('mouseleave', function (e) {
      //   e.preventDefault();
      //   $(this).find("#date-disabled-msg").remove();;
      // });
    },
  });

  $('.phone').mask('+7(999)999-99-99');

  $('.mobile-menu__link.parent').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });

  $('.mobile-menu__btn').on('click', function (e) {
    $('.mobile-menu__container').slideToggle();
    $('body').toggleClass('open-menu');
  });

  $('.lp-page-title-mobile').on('click', function (e) {
    $('.lp-page-list').slideToggle();
    $(this).toggleClass('active');
  });

  $('.rmenu-main__title').on('click', function (e) {
    if (document.querySelector("body").offsetWidth < 768) {
      $(this).parent().find('.rmenu-main__items-container').slideToggle();
      $(this).toggleClass('active');
    }
  });

  let videoSrc;
  $('.btn-video').on('click', function () {
    videoSrc = $(this).data('src');
  });

  $('#video-modal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });

  $('#video-modal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', videoSrc);
  });


  $('[data-fancybox-iframe]').fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false
    }
  });

  $('[data-fancybox]').fancybox({
    loop: true
  });

  $('a.scroll[href^="#"]').on('click', function () {
    var _href = $(this).attr('href');
    const screenWidth = window.screen.width;
    let offsetTop = $(_href).offset().top - 10;
    if (screenWidth < 1024) offsetTop -= 120;
    $('html, body').animate({ scrollTop: offsetTop + 'px' });
    return false;
  });

  $('.show-more-poster').on('click', function (e) {
    $('.poster__list-show-more').slideToggle('fast', function () {
      if ($('.poster__list-show-more').css('display') === 'block') {
        console.log($('.show-more-poster').data('btn-hide'));
        $('.show-more-poster').text($('.show-more-poster').data('btn-hide'));
      } else {
        $('.show-more-poster').text($('.show-more-poster').data('btn-show'));
      }
    });

  });

  $('.show-review').on('click', function (e) {
    e.preventDefault();
    $('.review-list').slideToggle('slow', function () {
      if ($('.review-list').css('display') === 'block') {
        $('.show-review').text($('.show-review').data('btn-hide'));
      } else {
        $('.show-review').text($('.show-review').data('btn-show'));
      }
    });
  });

  $(document).on("click", ".showmore", function (e) {
    var btn = $(this);
    var page = btn.attr('data-next-page');
    var page_max = btn.attr('data-max-page');
    var id = btn.attr('data-show-more');
    var btn_text = btn.text();

    var data = {};

    data['PAGEN_' + id] = page;
    data['ajax'] = "Y";

    $.ajax({
      type: "GET",
      url: window.location.href,
      data: data,
      beforeSend: function () {
        btn.text("Идет загрузка...");
      },
      success: function (data) {
        btn.text(btn_text);
        $(".btn_area_ajax").html($(data).find(".btn_area_ajax").html());
        $(".ajax__list").append($(data).find(".ajax__list").html());
        if (page == page_max) $(".btn_area_ajax").remove();
      }
    });

    e.preventDefault();
  });

  $(document).on("click", ".rating-area input", function (e) {
    const score = $(this).val();
    const lp = $(this).data("lp");

    $.ajax({
      type: "POST",
      url: "/local/ajax/score.php",
      data: "score=" + score + "&lp=" + lp,
      dataType: "json",
      beforeSend: function () {
      },
      success: function (data) {
        $(".rating-area").html("Спасибо за оценку");
        localStorage.setItem('score-lp', lp);
        localStorage.setItem('score-rate', score);
      },
      error: function () {

      }
    });
    return false;
  });

  function CallPrint(strid) {
    var prtContent = document.getElementById(strid);
    var prtCSS = '<link rel="stylesheet" href="/local/assets/css/app.css" type="text/css" />';
    var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    WinPrint.document.write('<div id="print" class="contentpane">');
    WinPrint.document.write(prtCSS);
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.write('</div>');
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
  }

  function postData(url, options) {
    const requestOptions = {
      method: 'POST',
      headers: options.headers,
      body: options.body
    };
    return fetch(url, requestOptions).then(function (response) {
      return response.json();
    });
  }

  const reserveForms = document.querySelectorAll('.form-send-reserve');
  // const reserveBtn = document.querySelector('.btn-send-reserve');
  for (const reserveForm of reserveForms) {
    if (reserveForm) {
      reserveForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const successText = reserveForm.querySelector('.success-text__form').innerHTML;
        const data = new FormData(reserveForm);
        // reserveBtn.disabled = true;
        postData('/local/ajax/reserve.php', {
          body: data
        }).then(function (data) {
          // reserveBtn.disabled = false;
          if (data.status) {
            $('#reserve').modal('hide');
            $('#success-form').find('.success-text').html(successText);
            $('#success-form').modal('show');

            if (data.form_type === 'RESERV_POPUP') {
              ym(data.metric, 'reachGoal', 'zakaz-stol');
              ga('send', 'event', 'zakaz', 'click', 'stol');
            }

            if (data.form_type === 'LP') {
              ym(data.metric, 'reachGoal', 'zakaz-banket');
              ga('send', 'event', 'zakaz', 'click', ' banket');
            }

          } else {
            alert('Ошбика при отправке!');
          }
          reserveForm.reset();
        });
      });
    }
  }

  const reviewForm = document.querySelector('.form-send-review');
  const reviewBtn = document.querySelector('.btn-send-review');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successText = reviewForm.querySelector('.success-text__form').textContent;
      const data = new FormData(reviewForm);
      reviewBtn.disabled = true;
      postData('/local/ajax/review.php', {
        body: data
      }).then(function (data) {
        reviewBtn.disabled = false;
        if (data.status) {
          $('#reserve').modal('hide');
          $('#success-form').find('.success-text').text(successText);
          $('#success-form').modal('show');

          // if (data.form_type === 'services') {
          //   window.dataLayer.push({ 'event': 'form-success' });
          // }

        } else {
          alert('Ошбика при отправке!');
        }
        reviewForm.reset();
      });
    });
  }



});


