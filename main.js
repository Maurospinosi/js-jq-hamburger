var hamburger = $(".header-right i");

hamburger.click(

function () {
  $(".hamburger-menu").fadeIn("slow");
 }
);

var closeMenu = $(".close");

closeMenu.click(
  function () {
    $(".hamburger-menu").fadeOut("slow");
  }
);
