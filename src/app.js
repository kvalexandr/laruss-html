/* src/app.js */

// Styles
import 'styles/_app.scss';

import 'bootstrap/js/dist/modal';
import '@fancyapps/fancybox';
import 'slick-carousel';

import 'scripts/ymaps';
import 'scripts/sliders';

$(document).ready(() => {

  $('.mobile-menu__link.parent').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });

  $('.mobile-menu__btn').on('click', function (e) {
    $('.mobile-menu__container').slideToggle();
  });

  function orderInit() {
    const orders = document.querySelectorAll('.btn-reserve');
    for (const order of orders) {
      if (order) {
        const orderFormType = order.getAttribute('data-form-type');
        //const comment = order.getAttribute('data-comment');
        order.addEventListener('click', function (e) {
          e.preventDefault();
          $('#reserve').modal('show');
          //$('#appointment').find('input[name="form_type"]').val(orderFormType);
          //$('#appointment').find('textarea[name="comment"]').val(comment);
        });
      }
    }
  }
  orderInit();

});
