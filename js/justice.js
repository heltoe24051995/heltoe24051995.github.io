$(document).ready(function () {
$(".back_to-top").hide();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 300) {
      $(".back_to-top").fadeIn();
    } else {
      $(".back_to-top").fadeOut();
    }
  });

  function click() {
    $(".back_to-top").on("click", function () {
      $(window).scrollTop(0);
    })
  }
  click();
});
