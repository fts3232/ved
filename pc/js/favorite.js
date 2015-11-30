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
		index=3
		width=0;
		for(i=0;i<index;i++){
			width+=$('.navbar-nav>li').eq(i).width();
		}
		one=width+20;
		two=width-10;
		$('.nav_border').stop(true).animate({left:one+'px'},100).animate({left:two+'px'},100).animate({left:width+'px'},100)
	})
	
	$('.btn-box>a').mouseover(function(){
		$(this).parent().parent().css({'box-shadow': '0 0 0 3px #02b998a'});
		//$(this).parent().parent().find('.del').show()
	}).mouseout(function(){
		$(this).parent().parent().css({  'box-shadow':  '0 0 0 1px #ededed'});
		$(this).parent().parent().find('.del').hide()
	})

	$('.box').mouseover(function(){
		$(this).find('.del').show()
		$(this).css({'box-shadow': '0 0 0 3px #2b998a'});
	}).mouseout(function(){
		$(this).css({  'box-shadow':  '0 0 0 1px #ededed'});
		$(this).find('.del').hide()
	})

	$('.del').click(function(){
		$(this).parent().parent().remove();
	})
})