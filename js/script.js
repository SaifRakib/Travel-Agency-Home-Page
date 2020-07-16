$(function(){
   
    'use strict';
    
       // Slider testimonial
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow:'<i class="fas fa-chevron-right arrow_next"></i>',
        prevArrow:'<i class="fas fa-chevron-left arrow_prev"></i>',
          responsive: [
            {
                breakpoint: 1201,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow:2
                }
    },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
    },
            {
                breakpoint: 325,
                settings: {
                    centerMode: true,
                    centerPadding: '2px',
                    slidesToShow: 1
                }
    }
  ]

    }); 
    
    
//    Tour Slider
    
     $('.tourslider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
          nextArrow:'<i class="fas fa-chevron-right arrow_next_t"></i>',
        prevArrow:'<i class="fas fa-chevron-left arrow_prev_t"></i>',
           responsive: [
            {
                breakpoint: 1201,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow:2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 325,
                settings: {
                    centerMode: true,
                    centerPadding: '2px',
                    slidesToShow: 1,
                }
    }
  ]
 
   
    }); 
    
    
//    Menu Fix
        
    var navoff= $('.main_menu').offset().top;
    
    $(window).scroll(function(){
        var scrolling= $(this).scrollTop(); 
        
        if(scrolling > navoff){
            $('.main_menu').addClass('menu_fix');
        }
        else{
             $('.main_menu').removeClass ('menu_fix');
        }
    });
    
//    Top to bottom
 
    $('.tp_bm').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2500);
    });

    $(window).scroll(function () {
        var btscroll = $(this).scrollTop();


        if (btscroll > 300) {
            $('.tp_bm').fadeIn();
        } else {
            $('.tp_bm').fadeOut();
        }
    });
    
     //animation scroll js
    
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    
});