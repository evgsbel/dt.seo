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
  var _loop2 = function _loop2() {
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
    _loop2();
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
    arrow_next_white = "<svg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L13 13L1 25' stroke='white' stroke-width='2'/></svg>",
    team_arrow = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>";
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
    769: {
      items: 3,
      margin: 20
    },
    1200: {
      items: 4,
      margin: 30
    }
  }
}); // canvas

var canvases = document.getElementsByClassName('demo-canvas');

var _loop = function _loop(cn) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var ctx = canvases[cn].getContext('2d');
  canvases[cn].width = width;
  canvases[cn].height = height;
  var points = [];

  (function init() {
    var largeHeader,
        animateHeader = true;
    var target = {
      x: width / 2,
      y: height / 2
    }; // Main

    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      // canvas = document.querySelector('.demo-canvas');
      // canvases[cn].width = width;
      // canvases[cn].height = height;
      // create points
      for (var x = 0; x < width; x = x + width / 20) {
        for (var y = 0; y < height; y = y + height / 20) {
          var px = x + Math.random() * width / 20;
          var py = y + Math.random() * height / 20;
          var p = {
            x: px,
            originX: px,
            y: py,
            originY: py
          };
          points.push(p);
        }
      } // for each point find the 5 closest points


      for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];

        for (var j = 0; j < points.length; j++) {
          var p2 = points[j];

          if (!(p1 == p2)) {
            var placed = false;

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }

        p1.closest = closest;
      } // assign a circle to each point


      for (var i in points) {
        var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    } // Event handling


    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }

      window.addEventListener('scroll', scrollCheck); // window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
      var posx = 0;
      var posy = 0;
      posx = e.clientX + document.body.scrollLeft;
      posy = e.clientY + document.body.scrollTop;
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvases[cn].width = width;
      canvases[cn].height = height;
    } // animation


    function initAnimation() {
      animate();

      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);

        for (var i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }

      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function onComplete() {
          shiftPoint(p);
        }
      });
    } // Canvas manipulation


    function drawLines(p) {
      if (!p.active) return;

      for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      var _this = this; // constructor


      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
        ctx.fill();
      };
    } // Util


    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  })();
};

for (var cn = 0; cn < canvases.length; cn++) {
  _loop(cn);
} // service canvas
// var window_width = $(window).width(),
//   width = window_width,
//   height = 800,
//   num_dots = 900,
//   force_gravity = 1;
//
// var voronoi = d3.geom.voronoi()
//   .x(function(d) { return d.x; })
//   .y(function(d) { return d.y; });
//
// var nodes = d3.range(num_dots).map(function() { return {radius: Math.random() * 3 + 2}; }),
//   root = nodes[0],
//   links = voronoi.links(nodes);
// // links = d3.layout.tree().links(nodes)
//
// nodes.forEach(function(d, i) { d.x = (i * 3) + ((window_width / 2) - (num_dots * 1.5)); d.y = (Math.random() * 10) + 190; });
//
// links = [];
//
// for (var i = 0; i < num_dots; i++) {
//   if (i != 0 && Math.floor(Math.random() * 3)) {
//     links.push({"source": i, "target": Math.floor(Math.random() * (num_dots - 1)) + 1, "value": 1});
//   }
// }
//
// root.radius = 0;
// root.fixed = true;
//
// var force = d3.layout.force()
//   .gravity(0.027)
//   .charge(function(d, i) { return i ? -13 : -200; })
//   //.damper(0.1)
//   .nodes(nodes)
//   .links(links)
//   //.size([1,3])
//   //.linkDistance(0)
//   .friction(0.6)
//   //.chargeDistance(100)
//   .linkStrength(0.6)
//   .size([width, height]);
//
// force.start();
//
// var svg = d3.select("#graph").append("svg")
//   .attr("width", width)
//   .attr("height", height);
//
// var node = svg.selectAll("circle")
//   .data(nodes.slice(1))
//   .enter().append("circle")
//   .attr("class", "node")
//   .attr("r", function(d) { return d.radius; })
//   .style("fill", function(d, i) { return '#45aeb1'; })
//   .attr("opacity", function() { return Math.random() * 0.8 });
//
// var link = svg.selectAll("line")
//   .data(links)
//   .enter().append("svg:line")
//   .attr('class', 'link')
//   .attr("opacity", 0)
//   .style("stroke-width", function(d) { return Math.sqrt(d.value); });
//
// force.on("tick", function(e) {
//   var q = d3.geom.quadtree(nodes),
//     i = 0,
//     n = nodes.length;
//
//   while (++i < n) q.visit(collide(nodes[i]));
//
//   svg.selectAll("circle")
//     .attr("cx", function(d) { return d.x; })
//     .attr("cy", function(d) { return d.y; })
//     .call(force.drag);
//
//   svg.selectAll("line.link")
//     .attr("x1", function(d) { return d.source.x; })
//     .attr("y1", function(d) { return d.source.y; })
//     .attr("x2", function(d) { return d.target.x; })
//     .attr("y2", function(d) { return d.target.y; });
// });
//
// svg.on("mousemove", function() {
//   var p1 = d3.mouse(this);
//   root.px = p1[0];
//   root.py = p1[1];
//   force.resume();
// });
//
// svg.on("mousedown", function() {
//   nodes.forEach(function(o, i) {
//     o.x += (Math.random() - .5) * 6;
//     o.y += (Math.random() - .5) * 6;
//   });
//   force.resume();
// });
//
// function collide(node) {
//   var r = node.radius + 16,
//     nx1 = node.x - r,
//     nx2 = node.x + r,
//     ny1 = node.y - r,
//     ny2 = node.y + r;
//   return function(quad, x1, y1, x2, y2) {
//     if (quad.point && (quad.point !== node)) {
//       var x = node.x - quad.point.x,
//         y = node.y - quad.point.y,
//         l = Math.sqrt(x * x + y * y),
//         r = node.radius + quad.point.radius;
//       if (l < r) {
//         l = (l - r) / l * .5;
//         node.x -= x *= l;
//         node.y -= y *= l;
//         quad.point.x += x;
//         quad.point.y += y;
//       }
//     }
//     return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
//   };
// }
//
//
// svg.selectAll(".link").transition().duration(6000).attr("opacity", 0.1)