$(document).ready(function(){
    fullPage();
    headerColor();
});



function fullPage(){
    var section = ".box";
    $(section).each(function(index){
      // each(function(index) 배열관리 메서드 
        $(this).on("mousewheel", function (e) {
            e.preventDefault();
            var delta = e.originalEvent.wheelDelta;
            // event > originalEvent > wheelDelta 
            // originalEvent는 순수 dom객체
            var moveTop = $(window).scrollTop();
            var nth = $(section).eq(index);
            if (delta < 0) {   /* delta가 0보다 작으면 */
                if ($(nth).next() != undefined) {     /* nth의 다음 section이 undefined가 아닐때 */
                  moveTop = $(nth).next().offset().top;    /* moveTop은 nth 다음 section의 offset top 만큼 이동 */
                }
            } else {
                if ($(nth).prev() != undefined) {    /* nth의 이전 section이 undefined가 아닐때 */
                    moveTop = $(nth).prev().offset().top;     /* moveTop은 nth 이전 section의 offset top 만큼 이동 */
                }
            }
            topAnimate(moveTop); /* 풀페이지 animate */
        });
    });
  }
  // index fullpage 애니메이션
  
  
  function topAnimate(top){
    console.log(top);
    $('html').stop().animate({ 
      scrollTop: top + 'px'
  },800 );  /* 작동시간 0.8초 */
  }
  // Main Topbotton animate
  
  
  function headerColor(){
    $(window).scroll(function(){
      var New = $('.mainNew').offset().top;
      var Edition = $('.mainEdition').offset().top;
  
      if(window.scrollY < New || window.scrollY == Edition){
        $('.mainHeader').removeClass('on');
      }
      else{
        $('.mainHeader').addClass('on');
      }
      topup();
    });
    
  }
  // index 헤더 section별 컬러변경
  
  
  function topup(){
    $(window).scrollTop(function(){
      var New = $('.mainNew').offset().top;  /* 변수 New = class=mainNew(메인 두번째 section)의 offsetTop값 */
      if($(window).scrollTop() >= New){  /* 만약 화면의 scrollTop 값이 변수New과 같거나 보다 클때 */
        $('.top').addClass('add');  /* class=top에 class=add를 추가함 */
      }else{   /* 조건과 맞지 않다면 */
        $('.top').removeClass('add');  /* class=top에 class=add를 제거함 */
      }
    });
    $('.top').click(function(e){  /* class=top 을 클릭했을때 */
      e.preventDefault();  /* a태그 기본값을 초기화(제거) 하고 */
      topAnimate(0);  /* topAnimate함수를 실행함 */
    })
  }