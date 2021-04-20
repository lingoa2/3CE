$(document).ready(function(){
    sd01();
    sd02();
    asideMenu();
    selectOption();
    numberCount();
    tabmenu();
    inputChoice();
    contentDel();
    menuClick();
    mainHeader();
});



function sd01(){
    
    var swiper = new Swiper('.swiper-container.mainSlide', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        321:{
          spaceBetween: 25,
        },
        769: {
          spaceBetween: 50,
        }
      }
    });
};
// index new, best 슬라이더


function sd02(){
  var swiper = new Swiper('.swiper-container.shopSlide', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};
// shop 메인 슬라이더


function asideMenu(){
  $('.asideMenu').click(function(e){  /* class=asideMenu 를 클릭했을떄 */
    e.preventDefault();  /* a태그 기본값을 초기화(제거) 하고 */
    $(this).next().slideToggle();   /* 선택한요소의 다음형제(a를 클릭했을때 동위선상 중 다음에 위치한 ul)이 토글버튼으로 슬라이드 작동 */
      $(this).children('span').toggleClass('active'); /* 선택한요소의 자식요소중 span에 토글클래스 active를 부여함 */
  });
}
// shop aside 클릭이벤트


function selectOption(){
  $('select').on('change', function(){   /* select가 체인지(변화) 했을때 */
    var selectedColor = $('#color').val();   /* selectedColor 변수는 id=dpCR의 value값을 가져오고 */
    var selectedSize = $('#size').val();   /* selectedSize 변수는 id=dpSZ의 value값을 가져온다 */
    var name = $('#color').children('option:selected').text()   /* name 변수는 id=color 안의 자손 option중 선택된 요소의 텍스트를 가져옴 */

    $('.selname').html('#' + name);  /* class=selname의 html에 문자 #과 name변수를 더해 출력함 (option 선택값의 따라 마지막 출력부의 값이 달라짐) */
    if(selectedColor != '0' && selectedSize != '0'){   /* selectedColor, selectedSize value값이 0이 아닐때 */
      $('.hidden').addClass('selectOn');   /* class=hidden에 selectOn 클래스를 추가한다 */
      }else{
      $('.hidden').removeClass('selectOn');   /* 조건외의 다른 답일경우 class=hidden에 selectOn 클래스를 제거한다 */
    }
  });
}
// shop 상세페이지 select 선택시


function numberCount(){
  var i = 1;   
  var Unitprice = minusComma($('.pre').text());
  var delivery = minusComma($('.dely').text());

    $('.up').click(function(){  /* span(class=up)을 클릭했을때 */
      i = $('#Number').val(); 
      $('#Number').val(++i);    /* id=Number의 value값 ++i */
      price($('#Number').val());
      });
    $('.down').click(function(){   /* span(class=down)을 클릭했을때 */
      i = $('#Number').val();
      if(i > 1){        /* i 가 1보다 클때 */
        $('#Number').val(--i);  /*  id=Number의 value값 --i */
        price($('#Number').val());
      }
    });
    
    $('#Number').focusout(function(){    /* id=Number 인풋필드가 선택해제될때 */
      price($('#Number').val());     /* price함수에 id=Number의 vlaue값 대입해서 작동 */
    })

    function price(value){
      $('.count').html($('#Number').val()); /* 카트 토탈가격옆 갯수출력 */

      $('.pic').html(addComma(Unitprice * value)); /* class=pic에 단가*갯수 계산해서 출력 */
      $('.total').html(addComma(Unitprice * value + parseInt(delivery)));   /* class=total에 단가*갯수+배송비 계산해서 출력 */
    }
    /* 갯수에 따른 총 합계 계산하기 */

    function minusComma(value){   /* 숫자에서 ,빼기 */
      value = value.replace(/[^\d]+/g, "");
      return value; 
  }

    function addComma(value){    /* 숫자에 , 붙이기 */
      value = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return value; 
  }
}
// shop 상세페이지, cart 수량카운트, 가격계산


function tabmenu(){
  $('.inputSelector ol:first-of-type').show();   /* ol li:첫번째 (내용적힌곳) 보이게함*/
  $('.inputSelector ul:first-of-type').addClass('productActive');   /* ul li:첫번째 (탭메뉴)에 class=productActive 부여 */

  $('.inputSelector ul li').click(function(){   /* ul li를 클릭했을때 */
    index = $(this).index();  /*  index = 클릭한(li) 값을 담음 */
    $('.inputSelector ul li').removeClass('productActive');   /* ul li:first에 부여했던 class 제거 */
    $(this).addClass('productActive');   /* 클릭한 요소에 class부여 */
    $('.inputSelector ol li').hide();     /* ol li:first 보이게 했던걸 안보이게 만듬 */
    $('.inputSelector ol li').eq(index).show();   /* 변수에 담긴 값(n)만큼 ol li:nth(n)째를 보이게함 */ 
  })
}
// shop 상세페이지 하단 탭메뉴


function inputChoice(){
  $('#checkall').change(function(){  /* id=checkall인 input이 변했을때 */
    $('.choice').prop('checked', $(this).prop('checked'))  /* choice에 checked부여 */
  })
  $('.choice').change(function(){   /* id=choice input이 변했을때 */
    if($(this).prop('checked') == false){   /* 만약 선택한요소가 체크되지 않았다면 */
      $('#checkall').prop('checked',false)   /* id=checkall checkbox 체크해제 */
    }
    if($('.choice:checked').length == $('.choice').length){  /* 만약 class=choice checked 된 갯수가 class=choice 총 갯수와 같을때 */
      $('#checkall').prop('checked',true)  /* id=checkall checkbox 체크표시 */
    }
  })
}



function contentDel(){
  $('.delete').click(function(){  /* class=delete를 클릭했을때 */
    if($('.choice:checked')){   /* 만약 class=choice가 체크되었을때 */
      $('.onBasket').empty();   /* class=onBasket의 자식요소태그 삭제 */
      $('.offBasket').addClass('active');  /* class=offBasket에 active 클래스 추가 */
    }
  })
}



function menuClick(){
  
  $('.menuBtn').click(function(e){
    e.preventDefault();
    $('.asideArea').addClass('on');
  })
  $('.removBtn').click(function(e){
    e.preventDefault();
    $('.asideArea').removeClass('on');
  })
}


// function mainHeader(){
//   $('.headerTab').click(function(e){
//     e.preventDefault();
//     $('.tabMenu').toggleClass('add');
//     $('.headerTab').children('a').toggleClass('add');
//   })
// }

function mainHeader(){
  $('.headerTab').click(function(e){
    e.preventDefault();
    $('.tabMenu').toggleClass('add');
    $('.headerTab').children('a').toggleClass('add');
  })
}
