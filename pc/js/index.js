var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.container-full.hidden-xs').height(winH);
    $('.hidden-xs').width(winW);
    $('.visible-xs-block').height(winH);
	}
resize();
win.resize(function(){
	resize();
});
$(document).ready(function(){
	page1=0
		page2=$('.Center-Container').eq(0).height()
		page3=page2+$('.Center-Container').eq(1).height()
		page4=page3+$('.Center-Container').eq(2).height()
		$('body').mousewheel(function(event, delta, deltaX, deltaY) {  
		    if(delta==1){
		    	total=$('body').scrollTop()
		    	if(total==page2){
		    		$('body').stop().animate({'scrollTop':page1+'px'});
		    	}

		    	else if(total==page3){
		    		$('body').stop().animate({'scrollTop':page2+'px'});
		    	}
		    	else if(total<page4){
		    		$('body').stop().animate({'scrollTop':page3+'px'});
		    	}
		    	
		    }
		    else{
				total=$('body').scrollTop()
				if(total<page2){
		    		$('body').stop().animate({'scrollTop':page2+'px'});
		    	}
		    	else if(total<page3){
		    		$('body').stop().animate({'scrollTop':page3+'px'});
		    	}
		    	else if(total>page4-300){
		    		$('body').stop().animate({'scrollTop':page4+'px'});
		    	}
		    }	
		});  
})
