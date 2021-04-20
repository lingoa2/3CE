$(document).ready(function(){
    fullpage();
    headerColor();
});



function fullpage(){
  var windowHeight = $(window).height();
    $('.onePage').each(function(index){
        $(this).attr('data-index',windowHeight * index);
    });
    
    $('.onePage').on('mousewheel', function(e){
        var sectionPos  = parseInt($(this).attr('data-index'));
    
        if(e.originalEvent.wheelDelta >= 0){
            $('html,body').stop().animate({
                scrollTop: sectionPos - windowHeight 
            },800);
            return false;
        } else if(e.originalEvent.wheelDelta < 0){
            $("html,body").stop().animate({
                scrollTop: sectionPos + windowHeight 
            },800);
            return false;
        }
    });
}
// index fullpage 애니메이션


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
      $('html').stop().animate({ 
        scrollTop: 0 },800 );  /* topAnimate함수를 실행함 */
    })
  }