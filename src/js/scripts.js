$(document).ready(function () {
  mMenu();




  function mMenu() {
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      var btnMenu = $(".intro-section__menu-btn");
      var menu = $(".intro-section__item--menu");
      var closeBtn = $(".intro-section__close-btn--hidden-for-pc");
      btnMenu.on("click", function () {
        menu.show().addClass("collapse");
      });

      if(menu.hasClass("collapse")) {
        $(".intro-section__logo--default").hide();
      };

      menu.hide();

      closeBtn.on("click", function(){
        menu.hide().removeClass("collapse");
      });
    }
  // }
});

