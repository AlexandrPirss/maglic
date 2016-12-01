var $menu = $(".main-menu");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 500 && $menu.hasClass("main-menu") ){
    $menu.fadeOut('fast',function(){
      $(this).removeClass("main-menu")
      .addClass("fixed transbg")
      .fadeIn('fast');
    });
  } else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
    $menu.fadeOut('fast',function(){
      $(this).removeClass("fixed transbg")
      .addClass("main-menu")
      .fadeIn('fast');
    });
  }
});        
