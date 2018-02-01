$(document).ready(function () {
  mMenu();


  function mMenu() {
    var btnMenu = $(".intro-section__menu-btn--hidden-for-pc");
    var menu = $(".intro-section__item--menu");
    var menuLogo = $(".intro-section__logo--menu");
    var defLogo = $(".intro-section__logo--default");
    var headerMenu = $(".intro-section__header");
    var footerMenu = $(".intro-section__footer");

    defLogo.show();
    menuLogo.hide();

    if ($(window).width() <= 768) {
      menu.attr("aria-expanded", "false");
      btnMenu.on("click tap", function () {
        if ($(document).find(".collapse").length > 0) {
          menu.attr("aria-expanded", "false");
          if(menu.attr("aria-expanded", "false")){
            btnMenu.removeClass("opn-btn");
          }
          menu.hide().removeClass("collapse");
          headerMenu.removeClass("collapse");
          footerMenu.removeClass("collapse");
          defLogo.show();
          menuLogo.hide();
        }
        else {
          menu.attr("aria-expanded", "true");
          if(menu.attr("aria-expanded", "true")){
            btnMenu.addClass("opn-btn");
          }
          menu.show().addClass("collapse");
          headerMenu.addClass("collapse");
          footerMenu.addClass("collapse");
          defLogo.hide();
          menuLogo.show();
        }

      });
      menu.hide();
    }

  }

});

