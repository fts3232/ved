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
	
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li>a').eq(7).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar').mouseout(function(){
		$('.navbar-nav>li>a').eq(7).addClass('on');
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
    