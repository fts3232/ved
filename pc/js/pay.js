var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.float').width(winW).height(winH-70);
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
	$('.order-submit').click(function(){
			$('.float').show();
			$('body').css({overflow:'hidden'})
		})
	index=3
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
	
	$('.address-box').mouseover(function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('hover');
		}
	}).mouseout(function(){
		if(!$(this).hasClass('on')){
			$(this).removeClass('hover');
		}
	})

	$('.address-box').click(function(){
		$('.address-box').find('input').prop('checked',false);
		$(this).find('input').prop('checked','checked');
		$(this).removeClass('hover');
		edit=$('.address-box').find('.edit').html();
		$('.address-box').find('.edit').remove();
		$(this).append('<div class="edit">'+edit+'</div>');
		$(this).addClass('on').siblings().removeClass('on')
	})

	$('.top').click(function(){
		$('body').animate({'scrollTop':'0px'})
	})

	$('.minus').click(function(){
		num=parseInt($('.num').val())-1
		if(num<0){
			num=0
		}
		$('.num').val(num)
	})
	$('.add').click(function(){
		num=parseInt($('.num').val())+1
		$('.num').val(num)
	})
	
})