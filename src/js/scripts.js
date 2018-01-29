$(document).ready(function () {
  mMenu();


  function mMenu() {
    var btnMenu = $(".intro-section__menu-btn");
    var menu = $(".intro-section__item--menu");
    var closeBtn = $(".intro-section__close-btn--hidden-for-pc");
    var menuLogo = $(".intro-section__logo--menu");
    var defLogo = $(".intro-section__logo--default");

    defLogo.show();
    menuLogo.hide();

    if ($(window).width() <= 768) {
      btnMenu.on("click", function () {
        menu.show().addClass("collapse");
        defLogo.hide();
        menuLogo.show();
      });

      menu.hide();

      closeBtn.on("click", function () {
        menu.hide().removeClass("collapse");
        defLogo.show();
        menuLogo.hide();
      });
    }
  }
});

