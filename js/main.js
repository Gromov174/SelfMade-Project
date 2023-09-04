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
    asNavFor: ".header__background-slider, header__slider",
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    }]
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
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    appendDots: $('.portfolio__dots'),
    asNavFor: ".portfolio__number",
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

  /* ====================TYPES-SLIDER==================== */

  $('.types-services__list').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    appendDots: $('.types-services__dots'),
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      }
    }]
  })


  /* ====================SMOTH-SCROLL==================== */

  $(".header__nav-list, .footer__nav-list, .footer__description, .footer__scrollup-box").on("click", "a", function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('.overlay').removeClass('overlay--active')
    $('.normal-swipe-on').removeClass('normal-swipe-off')
    $('.header__top').removeClass('header__top--off')
    $('.burger').toggleClass('burger--close')
    $('.header__top-inner').removeClass('header__top-inner--open')
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $(".header__main-logo").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  /* ====================POPUP==================== */

  $('.header__btn, .elipse').on('click', function (e) {
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('.popup__window').addClass('popup__window--active')
    $('.overlay').addClass('overlay--active')
    $('.normal-swipe-on').addClass('normal-swipe-off')
    $('.header__top').addClass('header__top--off')
  })

  $('.popup__close, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('.popup__window').removeClass('popup__window--active')
    $('.overlay').removeClass('overlay--active')
    $('.normal-swipe-on').removeClass('normal-swipe-off')
    $('.header__top').removeClass('header__top--off')
  })

  /* ====================BURGER=================== */

  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--close')
    $('.header__top-inner').toggleClass('header__top-inner--open')
    $('.header__menu').toggleClass('header__menu--open')
  })

  $('.header__nav-item').on('click', 'a', function (e) {
    e.preventDefault()
    $('.header__menu').toggleClass('header__menu--open')
  })

  $('.about-us__inner-btn').on('click', function (e) {
    e.preventDefault()
    $('.about-us__inner-btn').toggleClass('about-us__inner-btn--active')
    $('.about-us__inner-checkmark').toggleClass('about-us__inner-checkmark--active')
    $('.about-us__text').toggleClass('about-us__text--disable')
    $('.about-us__text-grd').toggleClass('about-us__text-grd--disable')
  })

  $('.portfolio__inner-btn').on('click', function (e) {
    e.preventDefault()
    $('.portfolio__inner-btn').toggleClass('portfolio__inner-btn--active')
    $('.portfolio__inner-checkmark').toggleClass('portfolio__inner-checkmark--active')
    $('.portfolio__text').toggleClass('portfolio__text--disable')
    $('.portfolio__text-grd').toggleClass('portfolio__text-grd--disable')
  })

  /* ====================INACTIVE==================== */

  $('.social').on('click', function (e) {
    e.preventDefault()
  })

})
