$(function () {

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
    dots: false ,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".header__background-slider, header__slider"
  })

  $('.header__slider').slick({
    arrows: false,
    dots: false ,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".header__background-slider, .header__slider-title"
  })

})