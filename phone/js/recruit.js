var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	if(winW==320){
		var mySwiper = new Swiper ('.swiper-01', {
		    slidesPerView : 'auto',//'auto'
		    spaceBetween : 20,
		    slidesOffsetBefore : 30,
		    slidesOffsetAfter : 30,
		  }) 
	}else{
		var mySwiper = new Swiper ('.swiper-01', {
		    slidesPerView : 2,//'auto'
		    spaceBetween : 20,
		    slidesOffsetBefore : 30,
		    slidesOffsetAfter : 30,
		  }) 
	}
	$('.job-more').click(function(){
		str='';
		for(i=10;i<16;i++){
			str+="<img src='images/recruit-"+i+".png' class='img-responsive'>"
		}
		$('.job-list').append(str);
	})
}) 