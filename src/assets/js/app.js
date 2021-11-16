// $(document).ready(function () {
//   $('body').autoPadding({
//     source: $('.js-header'),
//   });
//   //removeIf(production)
//   console.log("document ready");
//   //endRemoveIf(production)
// });


// fixed header

$(document).ready(function() {

  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.header').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.js-stop-header').offset().top,
      $header = $('header');

    if( scrollDistance >= headerHeight) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if ( scrollDistance + headerHeight  >= footerOffsetTop - 100) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }

  }
  stickySidebar();

  $(document).scroll(function() {
    stickySidebar();
  });

});
