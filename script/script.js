

document.addEventListener("DOMContentLoaded", function(e){

  //## 우측 메뉴 슬라이드 ##
  slideMenu()
  index_section2_slide();
  scroll_move();
  applyform();
})

const applyform = () => {
  const input = document.getElementById('name');

  // 포커스 빠질 때만 정리
  input.addEventListener('blur', () => {
    input.value = input.value
      .replace(/[^가-힣]/g, '') // 한글만
      .slice(0, 5);            // 5글자 제한
  });

  // 휴대폰 (그대로 👍)
  $('#phone').on('input', function () {
    let value = $(this).val().replace(/[^0-9]/g, '').slice(0, 11);

    if (value.length > 7) {
      value = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    }

    $(this).val(value);
  });
};


const scroll_move = () => {
  $(".scroll_move").click(function(e){  
    e.preventDefault();       
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
}

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