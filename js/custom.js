jQuery(document).ready(function($) {
    "use strict";
		
	/* Owl Slider For Banner One
    ================================================*/
    if ($('#tnit-banner-slider').length) {
        $('#tnit-banner-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:1,
            smartSpeed:1000,
            padding: 0,
            margin: 0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }

    /* Owl Slider For Banner Two
    ================================================*/
    if ($('#tnit-portfolio-slider').length) {
        $('#tnit-portfolio-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:1,
            smartSpeed:2000,
            stagePadding: 150,
            margin: 0,
            mouseDrag: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }

     /* Owl Slider For Timeline
    ================================================*/
    if ($('#tnit-timeline-slider').length) {
        $('#tnit-timeline-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:4,
            smartSpeed:2000,
            padding:0,
            margin: 0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1199:{
                    items:4,
                }
            }
        });
    }

     /* Owl Slider For Cause
    ================================================*/
    if ($('#tnit-causes-slider').length) {
        $('#tnit-causes-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:3,
                }
            }
        });
    }

     /* Owl Slider For Cause
    ================================================*/
    if ($('#tnit-causes-slider_v2').length) {
        $('#tnit-causes-slider_v2').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1199:{
                    items:4,
                }
            }
        });
    }

     /* Owl Slider For Team
    ================================================*/
    if ($('#tnit-team-slider').length) {
        $('#tnit-team-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:3,
                }
            }
        });
    }


    /* Owl Slider For Sponsors
    ================================================*/
    if ($('#tnit-sponsors-slider').length) {
        $('#tnit-sponsors-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:4,
                },
                1199:{
                    items:6,
                }
            }
        });
    }

     /* Scroll Animation
    ================================================*/
    if ($('.anim-scroll').length) {
        $('.anim-scroll').smoove({offset:'40%'});
    }

    /* Owl Slider For Banner
    ================================================*/
    if ($('#tnit-tweets-slider').length) {
        $('#tnit-tweets-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:1,
            smartSpeed:1500,
            padding:0,
            margin: 0,

        });
    }


     /* FILTERABLE Masonary For Gallery
    ======================================================*/
    if ($('.tnit-filterOuter_v1').length) {
        var $container = $('.tnit-filterOuter_v1');
        $container.imagesLoaded( function(){
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
        $('.tnit-filterlist_v1 a').on('click', function(){
            $('.tnit-filterlist_v1 .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }


    /* Progressbar Jquery Code
    ================================================*/
    if ($('.tnit-progressbar').length) {
        $('.tnit-progressbar').barfiller({
          // color of bar
          barColor: '#16b597',
          // shows a tooltip
          tooltip: true,
          // duration in ms
          duration: 1000,
          // re-animate on resize
          animateOnResize: true,
          // custom symbol
          // symbol: "%"
          
        });
    }

    /* Counter Jquery Code CounterUp
    ================================================*/
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 12,
            time: 1500
        });
    }


    /* BxSlider Jquery Code
    ================================================*/
    if ($('#product-slider').length) {
        $('#product-slider').bxSlider({
          auto: true,
          pagerCustom: '#bx-pager',
          navigation:false,
        });
    }

    /* Countdown Jquery Code
    ================================================*/
    // $(function () {
    //     var austDay = new Date();
    //     austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    //     $('.tnit-countdown').countdown({until: austDay});
    //     $('.year').text(austDay.getFullYear());
    // });


    /* Calendar Jquery Code For Event Page
    ================================================*/
    if ($('#tnit-calendar').length) {
        $('#tnit-calendar').fullCalendar({
          defaultDate: '2018-03-12',
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: [
            {
              title: 'All Day Event',
              start: '2018-03-01'
            },
            {
              title: 'Long Event',
              start: '2018-03-07',
              end: '2018-03-10'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2018-03-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2018-03-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2018-03-11',
              end: '2018-03-13'
            },
            {
              title: 'Meeting',
              start: '2018-03-12T10:30:00',
              end: '2018-03-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2018-03-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2018-03-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2018-03-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2018-03-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2018-03-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2018-03-28'
            }
          ]
        });
    }


});

