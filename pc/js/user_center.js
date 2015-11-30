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
	$('.top').click(function(){
		$('body').animate({'scrollTop':'0px'})
	})
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    slidesPerView : 1,//'auto',
	    pagination : '.swiper-pagination',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
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

	$('.addFavo').click(function(){
		if(document.all){
	    	window.external.addFavorite('http://jb51.net','FREE Web Directory');
	    }else if(window.sidebar){
	    	window.sidebar.addPanel('FREE Web Directory', 'http://jb51.net','');
	    }
	})


	$('.all-order-btn').click(function(){
		$('.order-list').hide();
		$('.all-order').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
	})

	$('.complete-order-btn').click(function(){
		$('.order-list').hide();
		$('.complete-order').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
	})

	$('.sh-order-btn').click(function(){
		$('.order-list').hide();
		$('.sh-order').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
	})

	$('.fh-order-btn').click(function(){
		$('.order-list').hide();
		$('.fh-order').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
	})

	$('.pj-order-btn').click(function(){
		$('.order-list').hide();
		$('.pj-order').show();
		$('.empty').hide();
		$('.pagination').show()
		$('.address-list .list').hide();
		$('.address-list .address-add').hide();
		$('.address-list .address-edit').hide();
	})

	$('.fk-order-btn').click(function(){
		$('.order-list').hide();
		$('.fk-order').show();
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

})