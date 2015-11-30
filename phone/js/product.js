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
    $('.navbar').width(winW)
    //$('.product-pic-box img').height(200);
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	
	
	$('.bottom').click(function(){
		height=$('.page1').height();
		$('body').stop().animate({'scrollTop':height+'px'});
	})
	var mySwiper = new Swiper ('.swiper-01', {
	    slidesPerView : 3.8,//'auto'
	    spaceBetween : 20,
	    slidesOffsetBefore : 25,
	     slidesOffsetAfter : 25
	  })  
	var mySwiper2 = new Swiper ('.swiper-02', {
	    slidesPerView : 1,//'auto'
	    // 如果需要分页器
    	pagination: '.swiper-02 .swiper-pagination',
    
    	// 如果需要前进后退按钮
    	nextButton: '.swiper-02 .swiper-button-next',
    	prevButton: '.swiper-02 .swiper-button-prev',
	  })    
	var mySwiper3 = new Swiper ('.swiper-03', {
	    loop: true,
	    // 如果需要分页器
	    slidesPerView : 1.5,//'auto'
	    spaceBetween : 25,
	    slidesOffsetBefore : 25,
    	pagination: '.swiper-03 .swiper-pagination',
	  })    
	var mySwiper4 = new Swiper ('.swiper-04', {
	    initialSlide :1,
	    // 如果需要分页器
	    slidesPerView : 'auto',//'auto'
    	pagination: '.swiper-03 .swiper-pagination',
	  })   
})

