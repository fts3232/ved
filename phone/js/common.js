$(document).ready(function(){
	$('.back_top').click(function(){
			$('body').stop().animate({'scrollTop':'0px'});
		})
	$(".navbar-suoxiao").swipe({
			swipe:function(event,direction, distance, duration, fingerCount) {
				if(direction=='up'){
					$('.navbar-collapse').removeClass('in')
				}
			}
	})
})