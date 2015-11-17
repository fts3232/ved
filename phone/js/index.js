var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    /*about2H=$('.about-2 .row').eq(0).height();
    if(winW>=1024 && winW<=1200 && about2H>256){
    	$('.about-2 .overflow-hidden').height(about2H-72);
    }
    else{
    	$('.about-2 .overflow-hidden').height(about2H);
    }*/
    $('.navbar').width(winW)
    $('.big_pic').width(winW).height(winH+70)
    //$('.product-pic-box img').height(200);
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	big_pic=false
	function stop_swiper(event){
		event.preventDefault();
	}
	$('.product-pic').click(function(){
		pic=$(this).data('pic');
		big_pic=true;
		document.body.addEventListener('touchmove',stop_swiper);
		$('.big_pic').show();
		$('.big_pic').find('img').attr('src',pic)
	})
	$(document).on('click','.big_pic>.close',function(){
		$('.big_pic').hide();
		big_pic=false;
		document.body.removeEventListener('touchmove', stop_swiper);
	})
	$('.about-image-box').mouseover(function(){
		$(this).find('img').eq(1).addClass('show').removeClass('hide').siblings().addClass('hide').removeClass('show')
	}).mouseout(function(){
		$(this).find('img').eq(0).addClass('show').removeClass('hide').siblings().addClass('hide').removeClass('show')
	})
	
	$('.bottom').click(function(){
		height=$('.page1').height();
		$('body').stop().animate({'scrollTop':height+'px'});
	})
	var mySwiper = new Swiper ('.swiper-01', {
	    slidesPerView : 3,//'auto'
	    spaceBetween : 20,
	    slidesOffsetBefore : 25,
	  })  
	var mySwiper2 = new Swiper ('.swiper-02', {
	    slidesPerView : 1,//'auto'
	    // 如果需要分页器
    	pagination: '.swiper-02 .swiper-pagination',
    
    	// 如果需要前进后退按钮
    	nextButton: '.swiper-02 .swiper-button-next',
    	prevButton: '.swiper-02 .swiper-button-prev',
	  })    
	var mySwiper3 = new Swiper ('.swiper-03', {
	    loop: true,
	    // 如果需要分页器
	    slidesPerView : 1.5,//'auto'
	    spaceBetween : 25,
	    slidesOffsetBefore : 25,
    	pagination: '.swiper-03 .swiper-pagination',
	  })    
	var mySwiper4 = new Swiper ('.swiper-04', {
	    initialSlide :1,
	    // 如果需要分页器
	    slidesPerView : 'auto',//'auto'
    	pagination: '.swiper-03 .swiper-pagination',
	  })   
	var swiper_06=[];
	$('.swiper-06').each(function(index, el) {
		swiper_06[index] = new Swiper ('.swiper-06:eq('+index+')', {
			slidesPerView : 'auto',//'auto'
		    initialSlide :0,
		    freeMode : false,
		    preventLinksPropagation : false,
		    onTransitionEnd: function(swiper){
	            if(swiper.isEnd==true){
	            	swiper.slideTo(2, 1000, false);//切换到第一个slide，速度为1秒
	            	$('.swiper-06:eq('+index+')').find('.btn-box_1_2 a').eq(1).addClass('on')
	            	$('.swiper-06:eq('+index+')').find('.btn-box_1_2 a').eq(0).removeClass('on')
	            }
	            else if(swiper.isBeginning==true){
	            	swiper.slideTo(0, 1000, false);//切换到第3个slide，速度为1秒
	            	$('.swiper-06:eq('+index+')').find('.btn-box_1_2 a').eq(0).addClass('on')
	            	$('.swiper-06:eq('+index+')').find('.btn-box_1_2 a').eq(1).removeClass('on')
	            }
	        }
		})  
	})
	var swiper_07=[];
	$('.swiper-07').each(function(index, el) {
		swiper_07[index] = new Swiper ('.swiper-07:eq('+index+')', {
		    slidesPerView : 'auto',//'auto'
		    initialSlide :0,
		    freeMode : false,
		    preventLinksPropagation : false,
		    onTransitionEnd: function(swiper){
	            if(swiper.isEnd==true){
	            	swiper.slideTo(2, 1000);//切换到第一个slide，速度为1秒
	            	$('.swiper-07:eq('+index+')').find('.btn-box_1_2 a').eq(1).addClass('on')
	            	$('.swiper-07:eq('+index+')').find('.btn-box_1_2 a').eq(0).removeClass('on')
	            }
	            else if(swiper.isBeginning==true){
	            	swiper.slideTo(0, 1000);//切换到第3个slide，速度为1秒
	            	$('.swiper-07:eq('+index+')').find('.btn-box_1_2 a').eq(0).addClass('on')
	            	$('.swiper-07:eq('+index+')').find('.btn-box_1_2 a').eq(1).removeClass('on')
	            }
	        },
		})  
	})
})

