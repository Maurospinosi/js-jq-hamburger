var hamburger = $(".header-right i");
var yes = $("div.hamburger-menu");
//
// hamburger.click(
//
// function () {
//   $(".hamburger-menu").fadeIn("slow");
//  }
// );
//
// var closeMenu = $(".close");
//
// closeMenu.click(
//   function () {
//     $(".hamburger-menu").fadeOut("slow");
//   }
// );

hamburger.click(
  function () {
   yes.addClass(".active");
  }
);
