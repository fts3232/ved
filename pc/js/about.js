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
	
    $(".about-04-left").mCustomScrollbar({ theme:"dark"});
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li>a').eq(1).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar').mouseout(function(){
		$('.navbar-nav>li>a').eq(1).addClass('on');
	})

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		loop:true,
		slidesPerView:4,
		spaceBetween:10,
		slidesOffsetBefore:300,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	})
	$('.about-06 .swiper-slide').click(function(){
		$('.about-06-01').show()
		$('body').css({overflow: 'hidden'})
		var mySwiper2 = new Swiper('.swiper-container2', {
			autoplay: 5000,//可选选项，自动滑动
			loop:true,
			prevButton:'.swiper-button-prev2',
			nextButton:'.swiper-button-next2',
		})
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
	$('.about-04-left').height($('.about-04-right').height());
}
    