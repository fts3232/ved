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
}
resize()
win.resize(function(){
	resize();
});
$(document).ready(function(){
	$('.minus').click(function(){
		num=parseInt($('.num').val())-1
		if(num<0){
			num=0
		}
		$('.num').val(num)
	})
	$('.add').click(function(){
		num=parseInt($('.num').val())+1
		$('.num').val(num)
	})
})