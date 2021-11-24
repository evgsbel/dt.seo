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


// fixed header
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
});

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

// how slider
const arrow_prev = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 1L2 13L14 25' stroke='black' stroke-width='2'/> </svg>",
  arrow_next = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='black' stroke-width='2'/></svg>"


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
})

// // price slider

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
})
