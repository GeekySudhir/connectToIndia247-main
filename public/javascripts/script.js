(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, options);
});
