$(document).ready(function(){
    
    $('.carousel__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev main__slick-prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="url(#paint0_linear)" stroke-width="5"/><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="white" stroke-opacity="0.3" stroke-width="5"/><path d="M27 19L21 25.25L27 31.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear" x1="5.16807" y1="25.1681" x2="45" y2="25.1681" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4778"/><stop offset="1" stop-color="#335ECC"/></linearGradient></defs></svg></button>',
        nextArrow: '<button type="button" class="slick-next main__slick-next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="url(#paint0_linear)" stroke-width="5"/><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="white" stroke-opacity="0.3" stroke-width="5"/><path d="M23 32L29 25.75L23 19.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear" x1="5.16807" y1="25.1681" x2="45" y2="25.1681" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4778"/><stop offset="1" stop-color="#335ECC"/></linearGradient></defs></svg></button>',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                variableWidth: false,
                centerMode: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                variableWidth: false,
                centerMode: false,
              }
            }
          ]

    });
    
    var menuBtn = $('.header__menu');
    var menu    = $('.menu__submenu');
  
    menuBtn.on('click', function() {
        if ( menu.hasClass('menu__submenu--active') ) {
            menu.removeClass('menu__submenu--active');
            $('.header__menu-burger:nth-child(1)').css('transform','translateY(0) rotate(0)');
            $('.header__menu-burger:nth-child(2)').css('transform','rotate(0)');
            $('.header__menu-burger:nth-child(3)').css({'transform': 'translateY(0)','opacity':'1'});
            $('body').css('overflow' , 'auto');
        } else {
            menu.addClass('menu__submenu--active');
            $('.header__menu-burger:nth-child(1)').css('transform','translateY(10px) rotate(45deg)');
            $('.header__menu-burger:nth-child(2)').css('transform','rotate(-45deg)');
            $('.header__menu-burger:nth-child(3)').css({'transform': 'translateY(10px)','opacity':'0'});
            $('body').css('overflow' , 'hidden');
        }
    });


});