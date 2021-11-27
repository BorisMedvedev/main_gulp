
let swiper = new Swiper(".main-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



$(function () {

  $(".product-list__btn").on("click", function () {
    $('.product-list__menu').toggleClass("product-list__menu--active");
    $('.product-list__btn').toggleClass("product-list__btn--active");

  });


  $(".navbar__link, .cart__basket-img").on("click", function () {
    $('.basket').toggleClass("basket--active");

  });

  $(".basket__btn-close ").on("click", function () {
    $('.basket').toggleClass("basket--active");

  });

  $('.quantity-inner .bt-minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });

  $('.quantity-inner .bt-plus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });

  $('.quantity-inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
      this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
    }
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);




});

$(function () {

  $(".star").rateYo({
    numStars: 1,
    ratedFill: "#FFB800",
    starWidth: "16px"
  });

});