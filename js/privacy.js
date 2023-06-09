$(function () {

  /* ====================SMOTH-SCROLL==================== */

  $(".footer__description, .policy").on("click", "a", function (e) {
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