"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// header change color
$(window).scroll(function () {
  var currentclass;
  $('section').each(function () {
    if ($(this).offset().top < $(window).scrollTop() + 50) {
      currentclass = $(this).attr('data-color');
    }
  });
  $('header').attr('data-color', currentclass);
}); // fixed header

function stickySidebar() {
  var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.header').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
  footerOffsetTop = $('.js-stop-header').offset().top,
      $header = $('header');

  if (scrollDistance >= headerHeight) {
    $header.addClass('header_fixed');
    $header.removeClass('header_hide');
  } else {
    $header.removeClass('header_fixed');
  }

  if (scrollDistance + headerHeight >= footerOffsetTop) {
    $header.removeClass('header_fixed');
    $header.addClass('header_hide');
  }
}

stickySidebar();
$(document).scroll(function () {
  stickySidebar();
}); //ancors btn

var anchors = document.querySelectorAll('button[data-ancor*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('data-ancor').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // mobile menu

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

$(function () {
  var btnMenu = document.querySelectorAll('.burger');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (event) {
      var menu = document.querySelector('.nav');
      menu.classList.toggle('is-open');
      btnMenu.forEach(function (btnMenu) {
        btnMenu.classList.toggle('is-active');
      });
    });
  });
}); // how slider

var arrow_prev = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='black' stroke-width='2'/> </svg>",
    arrow_next = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='black' stroke-width='2'/></svg>",
    arrow_prev_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='white' stroke-width='2'/> </svg>",
    arrow_next_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='white' stroke-width='2'/></svg>";
$('.js-how-slider').owlCarousel({
  items: 3,
  active: true,
  loop: true,
  dots: false,
  nav: true,
  navText: [arrow_prev, arrow_next],
  navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
  navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      items: 1,
      margin: 0
    },
    769: {
      items: 2,
      margin: 80
    },
    1200: {
      items: 3,
      margin: 110
    }
  },
  onTranslate: function onTranslate(e) {
    $(".js-how-slider .owl-item > li").removeClass("is-active");
  },
  onTranslated: function onTranslated(e) {
    $(".js-how-slider .owl-item > li").eq(e.item.index).addClass("is-active");
  }
}); // price slider

$('.js-price-slider').owlCarousel({
  items: 3,
  active: true,
  loop: true,
  dots: false,
  nav: true,
  navText: [arrow_prev, arrow_next],
  navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
  navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      items: 1,
      margin: 0
    },
    769: {
      items: 2,
      margin: 80
    },
    1200: {
      items: 3,
      margin: 110
    }
  },
  onTranslate: function onTranslate(e) {
    $(".js-price-slider .owl-item > li").removeClass("is-active");
  },
  onTranslated: function onTranslated(e) {
    $(".js-price-slider .owl-item > li").eq(e.item.index).addClass("is-active");
  }
});
$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(); // service slider on mobile

    if (windowWidth < 992) {
      $('.js-service-slider').owlCarousel({
        active: true,
        loop: true,
        dots: false,
        nav: true,
        navText: [arrow_prev_white, arrow_next_white],
        navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
          // breakpoint from 0 up
          320: {
            items: 1,
            margin: 5
          },
          640: {
            items: 2,
            margin: 20
          },
          768: {
            items: 2,
            margin: 30
          }
        }
      });
    } else {
      $('.js-service-slider').trigger('destroy.owl.carousel').removeClass('js-service-slider owl-carousel owl-theme');
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});