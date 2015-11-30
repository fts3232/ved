var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.about-06-01').width(winW+17).height(winH)
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	index=1
	width=0;
	for(i=0;i<index;i++){
		width+=$('.navbar-nav>li').eq(i).width();
	}
	one=width+20;
	two=width-10;
	$('.nav_border').css({left:width+'px'})


   // $(".about-04-left").mCustomScrollbar({ theme:"dark"});
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li').eq(7).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
		width=0;
		index=$(this).parent().index()
		for(i=0;i<index;i++){
			width+=$('.navbar-nav>li').eq(i).width();
		}
		one=width+20;
		two=width-10;
		$('.nav_border').stop(true).animate({left:one+'px'},100).animate({left:two+'px'},100).animate({left:width+'px'},100)
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar-nav').mouseout(function(){
		index=1
		width=0;
		for(i=0;i<index;i++){
			width+=$('.navbar-nav>li').eq(i).width();
		}
		one=width+20;
		two=width-10;
		$('.nav_border').stop(true).animate({left:one+'px'},100).animate({left:two+'px'},100).animate({left:width+'px'},100)
	})
	if(winW==1680){
		var offset=225
	}
	else if(winW==1920){
		var offset=260
	}
	else if(winW==1440){
		var offset=190
	}
	else if(winW==1330){
		var offset=190
	}
	else if(winW==1280){
		var offset=190
	}
	else if(winW==1024){
		var offset=130
	}
	var mySwiper = new Swiper('.swiper-container', {
		//autoplay: 5000,//可选选项，自动滑动
		loop:true,
		slidesPerView:6,
		spaceBetween:10,
		slidesOffsetBefore:offset,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	})
	$('.about-06 .swiper-slide').click(function(){
		$('.about-06-01').show()
		$('body').css({overflow: 'hidden'})
		var mySwiper2 = new Swiper('.swiper-container2', {
			//autoplay: 5000,//可选选项，自动滑动
			loop:true,
			prevButton:'.swiper-button-prev2',
			nextButton:'.swiper-button-next2',
		})
		index=$(this).attr('data-swiper-slide-index')
		mySwiper2.slideTo(parseInt(index)+1, 100, false);
	})
	$(document).on('click','.about-close',function(){
		$('.about-06-01').hide()
		$('body').css({overflow: 'auto'})
	})
	$('.about-nav-point').mouseover(function(){
		$(this).prev('img').show();
	}).mouseout(function(){
		$(this).prev('img').hide();
	}).click(function(){
		href=$(this).attr('href')
		$('body').stop().animate({'scrollTop':$(href).offset().top-70+'px'});
		return false;
	})
})
window.onload=function(){
	//$('.about-04-left').height($('.about-04-right').height());
}
    