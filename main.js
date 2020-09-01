var hamburger = $(".header-right i");
var closeMenu = $(".close");

// ESERCIZIO SVOLTO CON  fadeIn E fadeOut

// hamburger.click(
//
// function () {
//   $(".hamburger-menu").fadeIn("slow");
//  }
// );
//
//
// closeMenu.click(
//   function () {
//     $(".hamburger-menu").fadeOut("slow");
//   }
// );

// ESERCIZIO SVOLTO CON addClass

hamburger.click(
  function () {
   $("div.hamburger-menu").addClass("active");
  }
);

closeMenu.click(
  function () {
   $("div.hamburger-menu").removeClass("active");
  }
);
