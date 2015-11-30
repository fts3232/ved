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
    $('.delete-zone').height(winH-54+200)
    $('.canel-zone').height(winH-54+200)
    $('.address-delete-zone').height(winH-54+200)
    $('.check-zone').height(winH-54+200)
    $('.pj-zone').height(winH-54+200)
    $('.check-order-zone').height($('body').height())
    $('.log-zone').height($('body').height())
    $('.edit-name-zone').height(winH-54+200)
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
		$('.delete-zone').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.delete-btn-box>a').click(function(){
		$('.delete-zone').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})


	$('.check-btn').click(function(){
		$('.check-zone').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.check-btn-box>a').click(function(){
		$('.check-zone').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.canel-btn').click(function(){
		$('.canel-zone').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.canel-btn-box>a').click(function(){
		$('.canel-zone').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.address-del-btn').click(function(){
		$('.address-delete-zone').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.address-delete-btn-box>a').click(function(){
		$('.address-delete-zone').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.log-btn').click(function(){
		$('.log-zone').show()
		//document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.log-zone .close-btn').click(function(){
		$('.log-zone').hide()
		//document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.empty-btn').click(function(){
		//$('.empty').hide();
		//$('.order_content').show();
	})

	$('.check-order-btn').click(function(){
		$('.check-order-zone').show()
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.check-order-zone .close-btn').click(function(){
		$('.check-order-zone').hide()
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.check-order-btn-box').click(function(){
		$('.delete-zone').show();

	})

	$('.pj-zone .close-btn').click(function(){
		$('.pj-zone').hide();
		$('.empty').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.pj-btn').click(function(){
		$('.pj-zone').show();
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.pj-btn-box>a').click(function(){
		$('.pj-zone').hide();
		$('.empty').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		document.body.removeEventListener('touchmove',stop_swiper);
	})

	$('.all-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.all-order').show();
	})

	$('.pj-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.pj-order').show();
	})

	$('.complete-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.complete-order').show();
	})

	$('.fh-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.fh-order').show();
	})

	$('.sh-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.sh-order').show();
	})

	$('.fk-order-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
		$('.fk-order').show();
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


	$('.set_default').click(function(){
		text="<div class='default'>"+$('.default').html()+'</div>';
		$('.default').remove();
		$('.set_default').removeClass('on');
		$(this).addClass('on')
		$(this).parent().parent().find('.address_name').find('div').eq(1).append(text);
	})

	$('.address-add-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').hide();
		$('.address-add-zone').show();
	})

	$('.address-add-zone .add-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').show();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
	})

	$('.address-edit-btn ').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').hide();
		$('.address-edit-zone').show();
		$('.address-add-zone').hide();

	})

	$('.address-edit-zone .add-btn').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').show();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
	})

	$('.address-manager').click(function(){
		$('.empty').hide();
		$('.order-zone').hide();
		$('.address-zone').show();
		$('.address-edit-zone').hide();
		$('.address-add-zone').hide();
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

	$('.username-zone').click(function(){
		name=$('.username').html()
		$('.edit-name-zone').find('input').val(name)
		$('.edit-name-zone').show();
		document.body.addEventListener('touchmove',stop_swiper);
	})

	$('.edit-name-btn-box>a').click(function(){
		$('.edit-name-zone').hide();
		document.body.removeEventListener('touchmove',stop_swiper);
	})
})