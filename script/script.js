

document.addEventListener("DOMContentLoaded", function(e){

  //## 우측 메뉴 슬라이드 ##
  slideMenu()
  index_section2_slide();
  scroll_move();
  applyform();
})

const applyform = () => {
   // 이름: 한글만, 최대 7자
   $('#name').on('input', function (e) {
    // 한글 조합 중이면 return
    if (e.originalEvent && e.originalEvent.isComposing) return;

    let value = $(this).val();

    // 한글만 허용
    value = value.replace(/[^가-힣]/g, '');

    // 최대 7자
    value = value.substring(0, 7);

    $(this).val(value);
  });


  // 연락처: 숫자만, 3-4-4 자동 하이픈
  $('#phone').on('input', function () {
    let value = $(this).val().replace(/[^0-9]/g, '');

    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 7) {
      value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    } else {
      value = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
    }

    $(this).val(value);
  });
}

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