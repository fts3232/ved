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
	$('.radios').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	})
}) 