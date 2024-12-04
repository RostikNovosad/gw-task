$(document).ready(function () {
  $('.header-center__burger').on('click', function () {
    $('.burger').hide().addClass('open').fadeIn(100);
    $('body').addClass('burger-open');
  });
  $('.burger__close').on('click', function () {
    $('.burger').hide().removeClass('open').fadeOut(100);
    $('body').removeClass('burger-open');
  });
});
