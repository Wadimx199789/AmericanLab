const headerMenu = document.querySelector(".header__menu");
let previosValue=0;



// function getCoords(block) {
//     let box = block.getBoundingClientRect();
//     return {
//       top: box.top,
//       left: box.left
//     };
//   }
  
//   function bringmenu() {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         document.getElementById("bottommenu").style.bottom = "-100%";
//     } else {
//         document.getElementById("bottommenu").style.bottom = "0";
//     }
// }  

let headerHeight = headerMenu.clientHeight;
let TopPrev = 0
  window.onscroll = function() {
    var TopCurrent = document.documentElement.scrollTop;
  
    if(TopCurrent<TopPrev){
        if (TopCurrent > 0 && headerMenu.classList.contains('fixed-menu')) {
            headerMenu.classList.add('visible-scroll-up');
        } else {
            headerMenu.classList.remove('fixed-menu');
            headerMenu.classList.remove('visible-scroll-up');
        }
    }
    else {
        //if scroll down
        headerMenu.classList.remove('visible-scroll-up');
        if (TopCurrent > headerHeight && !headerMenu.classList.contains('fixed-menu')) headerMenu.classList.add('fixed-menu');
    }
    TopPrev = TopCurrent;
  };
  
//   for (let i = 0; i < footerMenuLinks.length; i++) {
  
//       footerMenuLinks[i].addEventListener('click', function () {
  
//           scrollMenu(this.getAttribute('href'));
//       })
  
//   }
  




// jQuery(document).ready(function($) {

//     var Mwidth = 960; // mobile devices
//     if ($(window).width() > Mwidth) {
//         var headerHeight = $('.header__menu').height();
//         $(window).on('scroll', {
//                 TopPrev: 0
//             },
//             function() {
//                 var TopCurrent = $(window).scrollTop();
//                 //check if user is scroll up
//                 if (TopCurrent < this.TopPrev) {
//                     //if scroll up
//                     if (TopCurrent > 0 && $('.header__menu').hasClass('fixed-menu')) {
//                         $('.header__menu').addClass('visible-scroll-up');
//                     } else {
//                         $('.header__menu').removeClass('visible-scroll-up fixed-menu');
//                     }
//                 } else {
//                     //if scroll down
//                     $('.header__menu').removeClass('visible-scroll-up');
//                     if (TopCurrent > headerHeight && !$('.header__menu').hasClass('fixed-menu')) $('.header__menu').addClass('fixed-menu');
//                 }
//                 this.TopPrev = TopCurrent;
//             });
//     }
// });