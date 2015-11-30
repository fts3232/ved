var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.news').height(winH-$('.navbar').height()).css({'margin-top':$('.navbar').height()})
    $('.bar').height(winH);
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
		})
	
    $(".news>.container").mCustomScrollbar({ theme:"dark"});
	
	var p=1;
	var imagesLoading = true;
	$('.waterfall').imagesLoaded(function(){
		$('.waterfall').masonry({
	  		// set itemSelector so .grid-sizer is not used in layout
	  		itemSelector: '.news-box',
	  		// use element for option
	  		columnWidth: '.news-box',
	  		percentPosition: true,
	  		gutter: '.gutter-sizer',
	  		percentPosition: true
		})
		appendToMasonry()
	})
	
	//appendToMasonry();
	$(window).scroll(function() {
		if($(document).height() - $(window).height() - $(document).scrollTop() < 100) {
			if(!imagesLoading){
				//appendToMasonry();
			} 
		}
	})
	function appendToMasonry(){
		if(p!=1){
			$('.loading').show();
		}
		arr=new Array();
		imagesLoading = true;
		$.get('data/data1.json',function(data,status){
			for(i=0;i<data.result.length;i++){
				 var elem = document.createElement('div');
				 name='news-box'
				 elem.className = name;
				 elem.innerHTML="<img src='"+data.result[i].image+"' class='img-responsive'/>"+
				 				'<div class="news-content">'+
								'<h3 class="news-title">'+data.result[i].title+'</h3>'+
								'<div class="news-detail">'+data.result[i].detail+'</div>'+
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
			
		},'json').error(function() { $('.loading').html('没有更多啦~');$('.loading').show()})
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
	/*$(document).on('click','.read-btn,.news-box>img',function(){
		$.get('data/article.json',function(data){
			var Range = 3- 0;   
			var Rand = Math.random();   
			rand=0 + Math.round(Rand * Range)
			$('.title').html(data.result[rand].title)
			$('.content').html(data.result[rand].content)
			$('.news').show()
		},'json')
	})*/
	$(document).on('click','.news-top',function(){
		$('#mCSB_1_dragger_vertical').stop().animate({'top':'0px'});
		$('#mCSB_1_container').stop().animate({'top':'0px'})
	})
})
    