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
    $('.delete').height(winH-54)
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-01', {
	    loop: true,
	    slidesPerView : 1,//'auto',
	    pagination : '.swiper-01 .swiper-pagination',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-01 .swiper-button-next',
	    prevButton: '.swiper-01 .swiper-button-prev',
	  }) 
	  var mySwiper1 = new Swiper ('.swiper-02', {
	    loop: true,
	    slidesPerView : 1.6,//'auto',
	    spaceBetween : 20,
	    slidesOffsetBefore : 20,
	    slidesOffsetAfter : 20,
	    pagination : '.swiper-pagination-02',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-02 .swiper-button-next',
	    prevButton: '.swiper-02 .swiper-button-prev',
	  })    
	$('.minus').click(function(){
		num=parseInt($('.num').val())-1
		if(num<0){
			num=0
		}
		$('.num').val(num)
	})
	
	function stop_swiper(event){
		event.preventDefault();
	}
	$('.delete-btn').click(function(){
		$('.delete').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.delete-btn-box>a').click(function(){
		$('.delete').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.empty-btn').click(function(){
		$('.empty').hide();
		$('.buycar-zone').show();
	})

	$('.checkbox').click(function(){
		if($(this).find('a').hasClass('on')){
			$(this).find('a').removeClass('on');
		}
		else{
			$(this).find('a').addClass('on');
		}
		l=$('.checkbox>a.on').length;
		$('.check_num').html(l)
	})

	$('.check-all-btn').click(function(){
		if($(this).find('.check-all').find('a').hasClass('on')){
			$('.checkbox').each(function(index){
				$('.checkbox').eq(index).find('a').removeClass('on');
			})
			$(this).find('.check-all').find('a').removeClass('on');
		}
		else{
			$(this).find('.check-all').find('a').addClass('on');
			$('.checkbox').each(function(index){
				$('.checkbox').eq(index).find('a').addClass('on');
			})
		}
		l=$('.checkbox>a.on').length;
		$('.check_num').html(l)
	})
})