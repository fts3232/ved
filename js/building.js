var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.container-full.hidden-xs').height(winH);
    $('.hidden-xs').width(winW);
    $('.visible-xs-block').height(winH);
	}
resize();
win.resize(function(){
	resize();
});
$(document).ready(function(){
	
})