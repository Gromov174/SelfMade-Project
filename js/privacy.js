$(function () {

  /* ====================SMOTH-SCROLL==================== */

  $(".footer__description, .policy").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--close')
    $('.header__top-inner').toggleClass('header__top-inner--open')
    $('.header__menu').toggleClass('header__menu--open')
  })

  $('.header__nav-item').on('click', 'a', function (e) {
    $('.header__menu').toggleClass('header__menu--open')
    var href = $(this).attr('href');
    setTimeout(function () { window.location = href }, 1000);
    return false;
    // e.preventDefault()
  })

  /* ====================INACTIVE==================== */

  $('.social').on('click', function (e) {
    e.preventDefault()
  })

})