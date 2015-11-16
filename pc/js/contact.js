var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.map').height(winH-$('footer').height()-$('.banner').height());
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	
    
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li>a').eq(5).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar').mouseout(function(){
		$('.navbar-nav>li>a').eq(5).addClass('on');
	})
})
window.onload=function(){
	$('#map').height(winH-$('.footer').height()-$('.banner').height());
}
    