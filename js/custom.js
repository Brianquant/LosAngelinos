$(function () {
  $(window).on('load', function () {
    $('#preloader').fadeOut(
      'slow',
      function () {
        $(this).remove();
      },
      500
    );
  });
});
$(document).ready(
  setTimeout(function () {
    $('#preloader').hide();
  }, 3000)
);

let cy = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = cy;
