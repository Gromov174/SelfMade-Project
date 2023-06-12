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

  $(".header__main-logo, .header__nav, .footer__nav-list, .footer__description, .footer__scrollup-box").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.header__btn, .elipse').on('click', function (e) {
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('.popup__window').addClass('popup__window--active')
  })

  $('.popup__close, .popup--blur').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('.popup__window').removeClass('popup__window--active')
  })


  $('.burger').on('click', function(e){
    e.preventDefault()
    $('.burger').toggleClass('burger--close')
  })

  /* ====================INACTIVE==================== */

  $('.social').on('click', function (e) {
    e.preventDefault()
  })

})