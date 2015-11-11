var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.news').width(winW+17).height(winH-70)
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
	$('.top').click(function(){
			$('body').stop().animate({'scrollTop':'0px'});
			$('.top').hide();
		})
	$('body').mousewheel(function(event, delta, deltaX, deltaY) {  
			total=$('body').scrollTop()
		    if(total>=100){
		    	$('.top').show();
		    }
		});  
    $(".news>.container").mCustomScrollbar({ theme:"dark"});
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li>a').eq(2).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar').mouseout(function(){
		$('.navbar-nav>li>a').eq(2).addClass('on');
	})
	var p=1;
	var imagesLoading = true;
	$('.waterfall').masonry({
  		// set itemSelector so .grid-sizer is not used in layout
  		itemSelector: '.news-box',
  		// use element for option
  		columnWidth: '.news-box',
  		percentPosition: true,
  		gutter: 10,
	})
	appendToMasonry();
	$(window).scroll(function() {
		if($(document).height() - $(window).height() - $(document).scrollTop() < 10) {
			if(!imagesLoading){
				appendToMasonry();
			} 
		}
	})
	function appendToMasonry(){
		if(p!=1){
			$('.loading').show();
		}
		arr=new Array();
		imagesLoading = true;
		$.post('data/data.json',{},function(data,status){
			for(i=0;i<data.result.length;i++){
				 var elem = document.createElement('div');
				 name='news-box'
				 elem.className = name;
				 elem.innerHTML="<img src='"+data.result[i].image+"' class='img-responsive'/>"+
				 				'<div class="news-content">'+
								'<h3 class="news-title">'+data.result[i].title+'</h3>'+
								'<div class="news-detail">'+data.result[i].detail+'</div>'+
								'</div>'+
								'<div class="news-button-box">'+
								'<a class="read-btn">阅读全文</a>'+
								'<a><img src="images/like.png"/> '+data.result[i].like+'</a>'+
								'<a>阅读 '+data.result[i].read+'</a>'+
								'</div>'
				arr.push(elem)
			}
			//tpl = $('#waterfall-tpl').html();
			//template = Handlebars.compile(tpl);
			//newItems=template(data);
			$(arr).css({ opacity: 0})
			$('.waterfall').append($(arr))
			// 等待新元素中的图片加载完毕
			$('.waterfall').imagesLoaded(function(){
				imagesLoading = false;
				$(arr).css({ opacity: 1})
				$('.waterfall').masonry( 'appended', $(arr) );
				p++
				$('.loading').hide();
			// 调用瀑布流布局的appended方法
			}).progress( onProgress );
			
		},'json').error(function() { $('.loading').html('Data load faild, please try again later.') })
	}    
	function getItemElement() {
		  var elem = document.createElement('div');
		  elem.className = 'item '+'col-md-2'
		  return elem;
		}
	
	function onProgress( imgLoad, image ) {
		$(image.img).parent().removeClass('is-loading');
		if(!image.isLoaded){
			$(image.img).parent().addClass('is-broken');	
		}
	}
	$(document).on('click','.read-btn',function(){
		$.post('data/article.json',{},function(data){
			var Range = 3- 0;   
			var Rand = Math.random();   
			rand=0 + Math.round(Rand * Range)
			$('.title').html(data.result[rand].title)
			$('.content').html(data.result[rand].content)
			$('.news').show()
			$('body').css({'overflow':'hidden'})
		},'json')
	})
	$(document).on('click','.news-close',function(){
		$('.news').hide();
	})
})
    