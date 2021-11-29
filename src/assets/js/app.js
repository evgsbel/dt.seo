// header change color

$(window).scroll(function () {
  var currentclass
  $('section').each(function () {
    if ($(this).offset().top < ($(window).scrollTop() + 50)) {
      currentclass = $(this).attr('data-color')
    }
  })
  $('header').attr('data-color', currentclass)
})

$(window).scroll(function () {
  var currentclass
  $('footer').each(function () {
    if ($(this).offset().top < ($(window).scrollTop() + 50)) {
      currentclass = $(this).attr('data-color')
    }
  })
  $('header').attr('data-color', currentclass)
})


// fixed header
let timer = null;
window.addEventListener('scroll', function() {

  if(timer !== null) {
    clearTimeout(timer);
    document.querySelector('header').classList.add('out', 'header_fixed');
    function stickySidebar() {
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
    }

    stickySidebar();

    $(document).scroll(function () {
      stickySidebar();
    });
  }
  timer = setTimeout(function() {
    document.querySelector('header').classList.remove('out');

  }, 800);
}, false);



//ancors btn
const anchors = document.querySelectorAll('button[data-ancor*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('data-ancor').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// mobile menu
$(() => {
  const btnMenu = document.querySelectorAll('.burger');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (event) {
      const menu = document.querySelector('.nav');
      menu.classList.toggle('is-open');
      btnMenu.forEach(btnMenu => {
        btnMenu.classList.toggle('is-active');
      });
    });
  });
})


// slider arrows
const arrow_prev = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='black' stroke-width='2'/> </svg>",
  arrow_next = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='black' stroke-width='2'/></svg>",
  arrow_prev_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='white' stroke-width='2'/> </svg>",
  arrow_next_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='white' stroke-width='2'/></svg>",
  team_arrow = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>"

//how slider
$('.js-how-slider-second').owlCarousel({
  loop:true,
  margin: 30,
  smartSpeed: 800,
  items:1,
  dots:false,
  nav: false,
  URLhashListener:true
})
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
      margin: 80,
    },
    1200: {
      items: 3,
      margin: 110,
    }
  },
  onTranslate: function (e) {
    $(".js-how-slider .owl-item > li").removeClass("is-active");
  },
  onTranslated: function (e) {
    $(".js-how-slider .owl-item > li").eq(e.item.index).addClass("is-active");
  },
  URLhashListener:true
})

// price slider

$('.js-price-slider-second').owlCarousel({
  loop:true,
  margin: 30,
  smartSpeed: 800,
  items:1,
  dots:false,
  nav: false,
  URLhashListener:true
})
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
      margin: 80,
    },
    1200: {
      items: 3,
      margin: 110,
    }
  },
  onTranslate: function (e) {
    $(".js-price-slider .owl-item > li").removeClass("is-active");
  },
  onTranslated: function (e) {
    $(".js-price-slider .owl-item > li").eq(e.item.index).addClass("is-active");
  },
  URLhashListener:true
})


$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()
    // service slider on mobile
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
            margin: 20,
          },
          768: {
            items: 2,
            margin: 30,
          }
        }
      })
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
            margin: 0,
          }
        }
      })
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
      margin: 10,
    },
    769: {
      items: 3,
      margin: 20,
    },
    1400: {
      items: 4,
      margin: 30,
    }
  }
})

