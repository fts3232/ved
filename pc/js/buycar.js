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
    $('.float').width(winW+17).height(winH-70)
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

	$('.empty-btn').click(function(){
		$('.empty').hide()
		$('.order-list').show()
		$('.buycar-footer').show()
		return false;
	})

	$('.minus').click(function(){
		num=parseInt($('.num').html())-1
		if(num<0){
			num=0
		}
		$('.num').html(num)
	})
	$('.add').click(function(){
		num=parseInt($('.num').html())+1
		$('.num').html(num)
	})



	$('.all-btn').click(function(){
		$('.order-list').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();

	})

	$('.delete-btn').click(function(){
		$('.delete').show()
		$('.check').hide()
		$('body').css({overflow:'hidden'})
	})
	$('.delete-btn-box>a').click(function(){
		$('.delete').hide()
		$('.checkbox>a.on').each(function(index){
			$('.checkbox>a.on').eq(index).parent().parent().parent().remove()
		})
		$('body').css({overflow:'auto'})
	})

	$('.canel-btn').click(function(){
		$('.canel').show()
		$('body').css({overflow:'hidden'})
	})
	$('.canel-btn-box>a').click(function(){
		$('.canel').hide()
		$('body').css({overflow:'auto'})
	})

	$('.remind-btn').click(function(){
		$('.remind').show()
		$('body').css({overflow:'hidden'})
	})
	$('.remind-btn-box>a').click(function(){
		$('.remind').hide()
		$('body').css({overflow:'auto'})
	})

	$('.check-btn').click(function(){
		$('.check').show()
		$('body').css({overflow:'hidden'})
	})
	$('.check-close').click(function(){
		$('.check').hide()
		$('body').css({overflow:'auto'})
	})

	$('.pj-btn').click(function(){
		$('.pj').show()
		$('body').css({overflow:'hidden'})
	})
	$('.pj .check-close').click(function(){
		$('.pj').hide()
		$('body').css({overflow:'auto'})
	})

	$('.logistics-btn').click(function(){
		$('.logistics').show()
		$('body').css({overflow:'hidden'})
	})
	$('.logistics .check-close').click(function(){
		$('.logistics').hide()
		$('body').css({overflow:'auto'})
	})

	$('.address-list>.list>.content>.address').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
		content=$('.address-list>.list>.content>.address .edit').html()
		$('.address-list>.list>.content>.address .edit').remove()
		$(this).append('<div class="edit">'+content+'</dikv>')
	})
	$('.address-btn').mouseover(function(){
		$(this).find('span').eq(1).css({background: '#24b59d'})
	}).mouseout(function(){
		$(this).find('span').eq(1).css({background: '#1dd2af'})
	})

	$('.address-del-btn').click(function(){
		$('.address-delete').show();
		$('body').css({overflow:'hidden'})
	})

	$('.address-delete-btn-box>a').click(function(){
		$('.address-delete').hide()
		$('body').css({overflow:'auto'})
	})

	$('.tab .address-btn').click(function(){
		$('.address-list .list').show();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
		$('.order-list').hide();
		$('.pagination').hide();
		$('.empty').hide();
	})
	$('.list .address-btn').click(function(){
		$('.address-list .address-add').show();
	})

	$(document).on('click','.address-edit-btn',function(){
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').show();
		$('.order-list').hide();
		$('.pagination').hide();
		$('.empty').hide();
	})

	$(document).on('click','.add-edit-btn',function(){
		$('.address-list .address-edit').hide();

	})

	$(document).on('click','.add-add-btn',function(){
		$('.address-list .address-add').hide();

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

	$('.check-all,.check-all-btn').click(function(){
		if($('.check-all').find('a').hasClass('on')){
			$('.check-all').find('a').removeClass('on');
			$('.checkbox').each(function(index){
				$('.checkbox').eq(index).find('a').removeClass('on');
			})
		}
		else{
			$('.check-all').find('a').addClass('on');
			$('.checkbox').each(function(index){
				$('.checkbox').eq(index).find('a').addClass('on');
			})
		}
		l=$('.checkbox>a.on').length;
		$('.check_num').html(l)
	})
})