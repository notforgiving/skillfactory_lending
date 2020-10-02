$(document).ready(function(){
    $('.copleted-slider').slick({
        dots: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                dots: false,
                prevArrow: '<button type="button" class="arrow_prev"><img src="../img/arrow_left.svg"></button>',
                nextArrow: '<button type="button" class="arrow_next"><img src="../img/arrow_right.svg"></button>'
              }
            },
            {
              breakpoint: 375,
              settings: {
                dots: true,
                prevArrow: '<button type="button" class="arrow_prev"><img src="../img/arrow_left.svg"></button>',
                nextArrow: '<button type="button" class="arrow_next"><img src="../img/arrow_right.svg"></button>'
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });