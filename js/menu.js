jQuery(document).ready(function($) {

    var Mwidth = 960; // mobile devices
    if ($(window).width() > Mwidth) {
        var headerHeight = $('.header__menu').height();
        $(window).on('scroll', {
                TopPrev: 0
            },
            function() {
                var TopCurrent = $(window).scrollTop();
                //check if user is scroll up
                if (TopCurrent < this.TopPrev) {
                    //if scroll up
                    if (TopCurrent > 0 && $('.header__menu').hasClass('fixed-menu')) {
                        $('.header__menu').addClass('visible-scroll-up');
                    } else {
                        $('.header__menu').removeClass('visible-scroll-up fixed-menu');
                    }
                } else {
                    //if scroll down
                    $('.header__menu').removeClass('visible-scroll-up');
                    if (TopCurrent > headerHeight && !$('.header__menu').hasClass('fixed-menu')) $('.header__menu').addClass('fixed-menu');
                }
                this.TopPrev = TopCurrent;
            });
    }
});