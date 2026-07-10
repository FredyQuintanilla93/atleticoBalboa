/**
*
* -----------------------------------------------------------------------------
*
* Template : #
* Author : #
* Author URI : #

* -----------------------------------------------------------------------------
*
**/

(function ($) {
    "use strict";

    // pisticky Menu
    var header = $('.rts-header');
    var win = $(window);
    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 100) {
            header.removeClass("rts-sticky");
        } else {
            header.addClass("rts-sticky");
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //preloader
    $(window).on('load', function () {
        $("#rts__preloader").delay(800).fadeOut(400);
        $("#rts__preloader").delay(800).fadeOut(400);
    });

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    //Clients Slider


    function Tabs() {
        var bindAll = function () {
            var menuElements = document.querySelectorAll('[data-tab]');
            for (var i = 0; i < menuElements.length; i++) {
                menuElements[i].addEventListener('click', change, false);
            }
        }

        var clear = function () {
            var menuElements = document.querySelectorAll('[data-tab]');
            for (var i = 0; i < menuElements.length; i++) {
                menuElements[i].classList.remove('active');
                var id = menuElements[i].getAttribute('data-tab');
                document.getElementById(id).classList.remove('active');
            }
        }

        var change = function (e) {
            clear();
            e.target.classList.add('active');
            var id = e.currentTarget.getAttribute('data-tab');
            document.getElementById(id).classList.add('active');
        }

        bindAll();

    }
     // image slide gsap
        gsap.to(".images", {
          scrollTrigger:{
            // trigger: ".images",
            start: "top bottom", 
            end: "bottom top", 
            scrub: 1,
            // markers: true
          },
          y: -300,
        });



    var connectTabs = new Tabs();
    
    window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded")  
    });          


})(jQuery);