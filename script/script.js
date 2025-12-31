

document.addEventListener("DOMContentLoaded", function(e){

  //## 우측 메뉴 슬라이드 ##
  slideMenu()

})


const slideMenu = () => {
  $('header .menu-btn').click(function(){
    $('.slide-menu').addClass('show');
    $('.close-bg').addClass('show');
  })

  $('.close-bg').click(function(){
    $('.slide-menu').removeClass('show');
    $('.close-bg').removeClass('show');
  })

  $('.slide-menu .btn-div .close-btn').click(function(){
    $('.slide-menu').removeClass('show');
    $('.close-bg').removeClass('show');
  })
}