var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.container-full.hidden-xs').height(winH);
    $('.hidden-xs').width(winW);
    $('.visible-xs-block').height(winH);
    about2H=$('.about-2 .row').eq(0).height();
    if(winW>=1024 && winW<=1200 && about2H>256){
    	$('.about-2 .overflow-hidden').height(about2H-72);
    }
    else{
    	$('.about-2 .overflow-hidden').height(about2H);
    }
    about2H_2=$('.about-2 .left-bottom').height();
    $('.about-2 .right-bottom').height(about2H_2);
	}

win.resize(function(){
	resize();
});
window.onload=function(){
		resize();
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
			$(this).addClass('on').siblings().removeClass('on')
			i=$(this).index()
			if(i==0){
				$(this).parent().siblings('img').eq(0).addClass('show').removeClass('hide').siblings('img').addClass('hide').removeClass('show')
			}
			else{
				$(this).parent().siblings('img').eq(1).addClass('show').removeClass('hide').siblings('img').addClass('hide').removeClass('show')
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
		page1=$('.page1').height()
		page2=page1+$('.page2').height()
		page3=page2+$('.page3').height();
		$('.back_top').click(function(){
			$('body').stop().animate({'scrollTop':'0px'});
		})
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
}
