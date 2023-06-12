$(function () {

  /* ====================SMOTH-SCROLL==================== */

  $(".footer__description, .policy").on("click", "a", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
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