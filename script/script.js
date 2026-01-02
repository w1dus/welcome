

document.addEventListener("DOMContentLoaded", function(e){

  //## 우측 메뉴 슬라이드 ##
  slideMenu()
  index_section2_slide();
})


const index_section2_slide= () => {
  var swiper = new Swiper(".main .section2 .mySwiper", {
    loop : true, 
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

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