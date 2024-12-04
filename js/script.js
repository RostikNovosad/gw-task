$(document).ready(function () {
  $('.header-center__burger').on('click', function () {
    $('.burger').hide().addClass('open').fadeIn(100);
    $('body').addClass('burger-open');
  });
  $('.burger__close').on('click', function () {
    $('.burger').hide().removeClass('open').fadeOut(100);
    $('body').removeClass('burger-open');
  });

  function mobileDropdown() {
    if (window.innerWidth < 769) {
      $('.header-bottom__menu-link').on('click', function () {
        $('.dropdown').toggleClass('active');
      });
      $('.dropdown__menu-item.first').on('click', function () {
        $('.dropdown__submenu-1').toggleClass('active');
        $('.dropdown__submenu-2').removeClass('active');
      });
      $('.dropdown__menu-item.second').on('click', function () {
        $('.dropdown__submenu-2').toggleClass('active');
        $('.dropdown__submenu-1').removeClass('active');
      });
    }
  }
  mobileDropdown();
  $(window).on('resize', function () {
    mobileDropdown();
  });
});
