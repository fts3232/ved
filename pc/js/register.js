var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.main').height(winH-70-$('.footer').height())
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	index=7
	width=0;
	for(i=0;i<index;i++){
		width+=$('.navbar-nav>li').eq(i).width();
	}
	one=width+20;
	two=width-10;
	$('.nav_border').css({left:width+'px'})

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
		index=7
		width=0;
		for(i=0;i<index;i++){
			width+=$('.navbar-nav>li').eq(i).width();
		}
		one=width+20;
		two=width-10;
		$('.nav_border').stop(true).animate({left:one+'px'},100).animate({left:two+'px'},100).animate({left:width+'px'},100)
	})
	$('.box a').click(function(){
		i=$(this).index();
		$(this).addClass('on').siblings('a').removeClass('on')
		$('form').eq(i).show().siblings('form').hide();
	})
	$('.sex-icon').click(function(){
		$('.sex-icon').removeClass('on')
		$(this).addClass('on')
	})
})
    