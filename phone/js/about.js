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
		  }) 
	}else{
		var mySwiper = new Swiper ('.swiper-01', {
		    slidesPerView : 2,//'auto'
		    spaceBetween : 20,
		    slidesOffsetBefore : 30,
		  }) 
	}
	var mySwiper = new Swiper ('.swiper-02', {
	    slidesPerView : 2,//'auto'
	    loop:true,
	    spaceBetween : 20,
	    slidesOffsetBefore : 100,
	    scrollbar:'.swiper-scrollbar',
	    scrollbarHide:false,
	  })
}) 