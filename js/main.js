$(function () {

  /* ==================HEADER-SLIDER================== */

  $('.header__background-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    appendDots: $('.header__dots'),
    asNavFor: ".header__slider, .header__slider-title"
  })

  $('.header__slider-title').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".header__background-slider, header__slider"
  })

  $('.header__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".header__background-slider, .header__slider-title"
  })

  /* ==================PORTFOLIO-SLIDER================== */

  $('.portfolio__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".portfolio__number"
  })

  $('.portfolio__arrow--prev').on('click', function (e) {
    e.preventDefault()
    $('.portfolio__slider').slick('slickPrev')
  })

  $('.portfolio__arrow--next').on('click', function (e) {
    e.preventDefault()
    $('.portfolio__slider').slick('slickNext')
  })

  $('.portfolio__number').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    speed: 100,
    fade: true,
    asNavFor: ".portfolio__slider"
  })

  /* ====================SMOTH-SCROLL==================== */

  $(".header__main-logo, .header__nav, .footer__nav-list, .footer__description").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  /* ====================INACTIVE==================== */

  $('.social').on('click', function (e) {
    e.preventDefault()
  })

})