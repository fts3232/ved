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
		index=0
		width=0;
		for(i=0;i<index;i++){
			width+=$('.navbar-nav>li').eq(i).width();
		}
		one=width+20;
		two=width-10;
		$('.nav_border').stop(true).animate({left:one+'px'},100).animate({left:two+'px'},100).animate({left:width+'px'},100)
	})
	$('.about-image-box').mouseover(function(){
		$(this).find('img').eq(1).addClass('show').removeClass('hide').siblings().addClass('hide').removeClass('show')
	}).mouseout(function(){
		$(this).find('img').eq(0).addClass('show').removeClass('hide').siblings().addClass('hide').removeClass('show')
	})
	$('.product-cate-box').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on')
	}).mouseout(function(){
		$(this).removeClass('on')
	})
	$('.product-btn').mouseover(function(){
		//$(this).addClass('on').siblings().removeClass('on')
		$(this).animate({"background-color": '#414353','color':'#fff'},200).siblings().animate({"background-color":'#efefef','color':'#414353'},200)
		i=$(this).index()
		_this=$(this)
		if(i==0){
			$(this).parent().siblings('img').eq(1).fadeOut(200,function(){
				_this.parent().siblings('img').eq(0).removeClass('hide').fadeIn(200)
			});
			
		}
		else{

			$(this).parent().siblings('img').eq(0).fadeOut(200,function(){
				_this.parent().siblings('img').eq(1).removeClass('hide').fadeIn(200)
			});
		}
	})
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    slidesPerView : 4,//'auto'
	    spaceBetween : 20,
	    pagination : '.swiper-pagination',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	  })    
})
window.onload=function(){
		page1=$('.page1').height()
		page2=page1+$('.page2').height()
		page3=page2+$('.page3').height();
		$('body').mousewheel(function(event, delta, deltaX, deltaY) {  
			total=$('body').scrollTop()
		    if(delta==1){
		    	if(total<=page3 && total>page2){
					$('body').stop().animate({'scrollTop':page2+'px'});
				}
				else if(total <=page1+300 && total >page1){
					$('body').stop().animate({'scrollTop':page1+'px'});
				}
				else if(total <=page1-300){
					$('body').stop().animate({'scrollTop':'0px'});
				}
		    	
		    }
		    else{
				if(total>=page1-300 && total < page1){
					$('body').stop().animate({'scrollTop':page1+'px'});
				}
				else if(total >= page2-300 && total < page2){
					$('body').stop().animate({'scrollTop':page2+'px'});
		    	}
			}
		});  
		index_about_pic=$('.about_right_top img').width()+15;
		$('.index-text').width(index_about_pic)
}
