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
});
$(window).scroll(function () {
  var currentclass;
  $('footer').each(function () {
    if ($(this).offset().top < $(window).scrollTop() + 50) {
      currentclass = $(this).attr('data-color');
    }
  });
  $('header').attr('data-color', currentclass);
}); // fixed header

var timer = null;
window.addEventListener('scroll', function () {
  if (timer !== null) {
    var stickySidebar = function stickySidebar() {
      var scrollDistance = $(document).scrollTop(),
          headerHeight = $('.header').outerHeight(true),
          // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.js-stop-header').offset().top,
          $header = $('header');

      if (scrollDistance >= headerHeight) {
        $header.addClass('header_fixed');
      } else {
        $header.removeClass('header_fixed');
      }

      if (scrollDistance + headerHeight >= footerOffsetTop) {
        $header.removeClass('header_fixed');
        $header.addClass('out');
      }
    };

    clearTimeout(timer);
    document.querySelector('header').classList.add('out', 'header_fixed');
    stickySidebar();
    $(document).scroll(function () {
      stickySidebar();
    });
  }

  timer = setTimeout(function () {
    document.querySelector('header').classList.remove('out');
  }, 800);
}, false); //ancors btn

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
}); // slider arrows

var arrow_prev = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='black' stroke-width='2'/> </svg>",
    arrow_next = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='black' stroke-width='2'/></svg>",
    arrow_prev_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='white' stroke-width='2'/> </svg>",
    arrow_next_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='white' stroke-width='2'/></svg>",
    team_arrow = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>"; //how slider

$('.js-how-slider-second').owlCarousel({
  loop: true,
  margin: 30,
  smartSpeed: 800,
  items: 1,
  dots: false,
  nav: false,
  URLhashListener: true
});
$('.js-how-slider').owlCarousel({
  items: 3,
  active: true,
  smartSpeed: 800,
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
  },
  URLhashListener: true
}); // price slider

$('.js-price-slider-second').owlCarousel({
  loop: true,
  margin: 30,
  smartSpeed: 800,
  items: 1,
  dots: false,
  nav: false,
  URLhashListener: true
});
$('.js-price-slider').owlCarousel({
  items: 3,
  active: true,
  smartSpeed: 800,
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
  },
  URLhashListener: true
});
$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(); // service slider on mobile

    if (windowWidth < 993) {
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
      $('.js-themes-slider').owlCarousel({
        active: true,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
          // breakpoint from 0 up
          320: {
            items: 1,
            margin: 5
          },
          768: {
            items: 2,
            margin: 0
          }
        }
      });
    } else {
      $('.js-service-slider').trigger('destroy.owl.carousel').removeClass('js-service-slider owl-carousel owl-theme');
      $('.js-service-slider').trigger('destroy.owl.carousel').removeClass('js-themes-slider owl-carousel owl-theme');
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
$('.js-team-slider').owlCarousel({
  items: 4,
  active: true,
  loop: true,
  dots: false,
  nav: true,
  navText: ['', team_arrow],
  // navText: [arrow_prev, arrow_next],
  navClass: ["team__arrow team__arrow_prev btn-reset", "team__arrow team__arrow_next btn-reset"],
  // navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      items: 1,
      margin: 0
    },
    480: {
      items: 2,
      margin: 10
    },
    769: {
      items: 3,
      margin: 20
    },
    1400: {
      items: 4,
      margin: 30
    }
  }
}); // app portfolio slider

$('.js-app-portfolio-slider').owlCarousel({
  items: 3,
  active: true,
  loop: true,
  dots: false,
  nav: true,
  navText: ['', team_arrow],
  // navText: [arrow_prev, arrow_next],
  navClass: ["team__arrow team__arrow_prev btn-reset", "team__arrow team__arrow_next btn-reset"],
  // navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      items: 1,
      margin: 0
    },
    480: {
      items: 2,
      margin: 10
    },
    769: {
      items: 3,
      margin: 20
    },
    1400: {
      margin: 30
    }
  }
});
$('.js-cs-peculiar-slider-bottom').owlCarousel({
  loop: true,
  margin: 30,
  smartSpeed: 1000,
  items: 1,
  dots: false,
  nav: false,
  URLhashListener: true,
  responsive: {
    0: {
      animateIn: 'fadeIn',
      // add this
      animateOut: 'fadeOut' // and this

    }
  },
  onTranslate: function onTranslate(e) {
    $('.cs-peculiar__img').removeClass('animated animate__animated animate__fadeInLeftBig');
    $('.cs-peculiar__img').eq(e.item.index).addClass('animated animate__animated animate__fadeInLeftBig');
    $('.cs-peculiar__caption').removeClass('animated animate__animated animate__fadeInUp');
    $('.cs-peculiar__caption').eq(e.item.index).addClass('animated animate__animated animate__fadeInUp');
    $('.cs-peculiar__description').removeClass('animated animate__animated animate__fadeInDown');
    $('.cs-peculiar__description').eq(e.item.index).addClass('animated animate__animated animate__fadeInDown');
    $('.cs-peculiar__img svg').removeClass('animated animate__animated animate__zoomIn');
    $('.cs-peculiar__img svg').eq(e.item.index).addClass('animated animate__animated animate__zoomIn');
  }
});
$('.js-cs-peculiar-slider-top').owlCarousel({
  active: true,
  loop: true,
  dots: false,
  nav: true,
  navText: [arrow_prev, arrow_next],
  navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
  // navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      margin: 0,
      items: 1,
      autoWidth: false
    },
    1025: {
      margin: 70,
      autoWidth: true,
      items: 2
    }
  },
  onTranslate: function onTranslate(e) {
    $(".js-cs-peculiar-slider-top .owl-item > li").removeClass("is-active");
  },
  onTranslated: function onTranslated(e) {
    $(".js-cs-peculiar-slider-top .owl-item > li").eq(e.item.index).addClass("is-active");
  }
}); // tabs

$(document).ready(function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});
$('.js-cs-data-slider').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  navText: [arrow_prev_white, arrow_next_white],
  navClass: ["slider-arrow slider-arrow_prev btn-reset", "slider-arrow slider-arrow_next btn-reset"],
  // navContainerClass: 'slider-arrow__wrp',
  responsive: {
    // breakpoint from 0 up
    320: {
      items: 1
    },
    1025: {
      items: 3
    }
  },
  onTranslate: function onTranslate(e) {
    $(".js-cs-data-slider .owl-item > li").removeClass("is-active");
  },
  onTranslated: function onTranslated(e) {
    $(".js-cs-data-slider .owl-item > li").eq(e.item.index).addClass("is-active");
    $(".js-cs-data-slider .owl-item > li").eq(e.item.index).trigger('click');
  }
});