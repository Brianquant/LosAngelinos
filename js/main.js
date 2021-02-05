$(function () {
  $(window).on('load', function () {
    $('#preloader').fadeOut(
      'slow',
      function () {
        $(this).remove();
      },
      500
    );
  });
});
$(document).ready(
  setTimeout(function () {
    $('#preloader').fadeOut(1000);
  }, 3000)
);

jQuery(document).on(
  'ready',
  (function ($) {
    'use strict';

    /*--------------------------
            SCROLLSPY ACTIVE
        ---------------------------*/
    $('body').scrollspy({
      target: '.bs-example-js-navbar-scrollspy',
      offset: 50,
    });

    /*--------------------------
            STICKY MAINMENU
        ---------------------------*/
    $('#mainmenu-area').sticky({
      topSpacing: 0,
    });

    /*-----------------------------
            SLIDER ACTIVE
        ------------------------------*/
    var mySlider = $('.pogoSlider')
      .pogoSlider({
        pauseOnHover: false,
      })
      .data('plugin_pogoSlider');

    /*----------------------------
            OPEN SEARCH FORM
        ----------------------------*/
    var $searchForm = $('.search-form');
    var $searchFormTrigger = $('.search-form-trigger');
    var $formOverlay = $('.search-form-overlay');
    $searchFormTrigger.on('click', function (event) {
      event.preventDefault();
      toggleSearch();
    });

    function toggleSearch(type) {
      if (type === 'close') {
        //close serach
        $searchForm.removeClass('is-visible');
        $searchFormTrigger.removeClass('search-is-visible');
      } else {
        //toggle search visibility
        $searchForm.toggleClass('is-visible');
        $searchFormTrigger.toggleClass('search-is-visible');
        if ($searchForm.hasClass('is-visible'))
          $searchForm.find('input[type="search"]').focus();
        $searchForm.hasClass('is-visible')
          ? $formOverlay.addClass('is-visible')
          : $formOverlay.removeClass('is-visible');
      }
    }

    /*------------------------------
            TIME PICKER ACTIVE
        -------------------------------*/
    var input = $('#time').clockpicker({
      placement: 'bottom',
      align: 'left',
      autoclose: true,
      default: 'now',
    });

    /*--------------------------
           HOME PARALLAX BACKGROUND
        ----------------------------*/
    $(window).stellar({
      responsive: true,
      positionProperty: 'position',
      horizontalScrolling: false,
    });

    /*------------------------------
            VIDEO BLOG POPUP
        --------------------------------*/
    $('.blog-video-button').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 320,
      preloader: false,
    });

    /*---------------------------
            SMOOTH SCROLL
        -----------------------------*/
    $('a.scrolltotop, .slider-area h3 a, .navbar-header a, ul#nav a').on(
      'click',
      function (event) {
        var id = $(this).attr('href');
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate(
          {
            scrollTop: target,
          },
          1500,
          'easeInOutExpo'
        );
        event.preventDefault();
      }
    );

    /*----------------------------
            SCROLL TO TOP
        ------------------------------*/
    $(window).on('scroll', function () {
      var $totalHeight = $(window).scrollTop();
      var $scrollToTop = $('.scrolltotop');
      if ($totalHeight > 300) {
        $scrollToTop.fadeIn();
      } else {
        $scrollToTop.fadeOut();
      }
      if ($totalHeight + $(window).height() === $(document).height()) {
        $scrollToTop.css('bottom', '90px');
      } else {
        $scrollToTop.css('bottom', '20px');
      }
    });

    /*---------------------------
            MENU LIST MIXITUP FILTERING
        ----------------------------*/
    $('.food-menu-list').mixItUp();

    /*---------------------------
            MENU DISCOUNT SLIDER
        -----------------------------*/
    $('.menu-discount-offer').owlCarousel({
      merge: true,
      video: true,
      items: 1,
      smartSpeed: 1000,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: false,
      autoplayTimeout: 2000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    /*---------------------------
            TEAM SLIDER
        -----------------------------*/
    $('.team-slider').owlCarousel({
      merge: true,
      video: true,
      items: 1,
      smartSpeed: 1000,
      loop: true,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: false,
      autoplayTimeout: 2000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });

    /*---------------------------
            BLOG POST SLIDER
        -----------------------------*/
    $('.post-slider').owlCarousel({
      merge: true,
      video: true,
      items: 1,
      smartSpeed: 1000,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: false,
      autoplayTimeout: 2000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    /*---------------------------
            BLOG POST IMAGE SLIDER
        -----------------------------*/
    $('.blog-image-sldie').owlCarousel({
      merge: true,
      video: true,
      items: 1,
      smartSpeed: 1000,
      loop: true,
      // animateIn: "fadeIn",
      // animateOut: "fadeOut",
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: false,
      autoplayTimeout: 2000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    /*---------------------------
            BMENU SLIDER
        -----------------------------*/
    $('.food-menu-list.food-menu-slider').owlCarousel({
      smartSpeed: 1000,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    /*----------------------------
            INSTAGRAM FEED ACTIVE
        -----------------------------*/
    // var feed = new Instafeed({
    //   get: 'user',
    //   userId: 3287251940,
    //   accessToken: '3287251940.1677ed0.30ef31a6f72044cda001db3bfd0d8308',
    //   target: 'instagram',
    //   limit: 10, //max 60 images..
    //   resolution: 'standard_resolution',
    //   after: function () {
    //     var el = document.getElementById('instagram');
    //     if (el.classList) el.classList.add('show');
    //     else el.className += ' ' + 'show';
    //   },
    // });
    // feed.run();

    /*--------------------------
            ACTIVE WOW JS
        ----------------------------*/
    new WOW().init();
  })(jQuery)
);

jQuery(window).on('load', function () {
  /*--------------------------
          PRE LOADER
      ----------------------------*/
  $('.preeloader').fadeOut(1000);
});

/*--------------------------
        MENU FIX
    ----------------------------*/

$(window).load(function () {
  setTimeout(function () {
    $('.base').click();
  }, 500);
});

/*--------------------------
        NAVBAR COLLAPSE
    ----------------------------*/

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

/*--------------------------
        IMPRESSUM & DATENSCHUTZ OVERLAY
    ----------------------------*/

function on_datenschutz() {
  document.getElementById('overlay_datenschutz').style.display = 'block';
  document.getElementById('nav').style.display = 'none';
}

function off_datenschutz() {
  document.getElementById('overlay_datenschutz').style.display = 'none';
  document.getElementById('nav').style.display = 'inline-table';
}

function on_impressum() {
  document.getElementById('overlay_impressum').style.display = 'block';
  document.getElementById('nav').style.display = 'none';
}

function off_impressum() {
  document.getElementById('overlay_impressum').style.display = 'none';
  document.getElementById('nav').style.display = 'inline-table';
}

function menu_fix() {
  document.getElementById('overlay_impressum').style.display = 'none';
  document.getElementById('overlay_datenschutz').style.display = 'none';
  document.getElementById('nav').style.display = 'inline-table';
}

/*--------------------------
NEWSTICKER
    ----------------------------*/

var width = $('.ticker-text').width(),
  containerwidth = $('.ticker-container').width(),
  left = containerwidth;
$(document).ready(function (e) {
  function tick() {
    if (--left < -width) {
      left = containerwidth;
    }
    $('.ticker-text').css('margin-left', left + 'px');
    setTimeout(tick, 8);
  }
  tick();
});

let cy = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = cy;
