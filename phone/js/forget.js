var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    
}
resize()
win.resize(function(){
	resize();
});
i=60
function timedCount(){  
   	var text='重发验证码('+i+')'
   	$('.get_code_again').val(text)
    i--
    if(i<=0){
		clearInterval(t)  
		$('.get_code_again').removeClass('disabled');
		$('.get_code_again').removeAttr("disabled");
		$('.get_code_again').val('重发验证码');
		$('.vaildate').addClass('disabled');
		$('.vaildate').attr("disabled",true);
    }
}
$(document).ready(function(){
	
	$('.navbar-nav>li>a').mouseover(function(){
		$('.navbar-nav>li>a').eq(7).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$('.navbar-nav>li>a').removeClass('on')
	})
	$('.navbar').mouseout(function(){
		$('.navbar-nav>li>a').eq(7).addClass('on');
	})
	$('.get_code').click(function(){
		$('.step-01').hide();
		$('.step-02').show();

		$('.get_code_again').addClass('disabled');
		$('.get_code_again').attr("disabled","disabled");
		var text='重发验证码('+i+')'
   		$('.get_code_again').val(text)
   		i--
		t=setInterval("timedCount()",1000)  
	})

	$('.get_code_again').click(function(){
		//$(this).attr("disabled",true);
		i=60
		$('.vaildate').removeClass('disabled');
		$('.vaildate').removeAttr("disabled");
		$(this).addClass('disabled');
		$(this).attr("disabled","disabled");
		var text='重发验证码('+i+')'
   		$('.get_code_again').val(text)
   		i--
		t=setInterval("timedCount()",1000)  
	})
	$('.vaildate').click(function(){
		$('.step-02 form').hide();
		$('.vaildateing').show();
		setTimeout(function(){
			code=$("[name='code']").val()
			if(code=='code'){
				$('.step-02').hide();
				$('.step-03').show()
			}else{
				$('.step-02').hide();
				$('.step-02-error').show()
			}
		},2000)
	})

	$("[name='new_password']").blur(function(){
         if($(this).val()==null||$(this).val()==''){
         	$(this).next('.icon').attr('src','images/forget-icon-02.png').show();
         }
         else{
         	$(this).next('.icon').attr('src','images/forget-icon-01.png').show();
         }
     });

	$("[name='new_password']").keyup(function(){
		if($(this).val()==null||$(this).val()==''){
         	$(this).next('.icon').attr('src','images/forget-icon-02.png').show();
         }
         else{
         	$(this).next('.icon').attr('src','images/forget-icon-01.png').show();
         }
	})


	$("[name='repeat_password']").blur(function(){
         if($(this).val()!=$("[name='new_password']").val()){
         	$(this).next('.icon').attr('src','images/forget-icon-02.png').show();
         }
         else{
         	$(this).next('.icon').attr('src','images/forget-icon-01.png').show();
         }
     });

	$("[name='repeat_password']").keyup(function(){
		if($(this).val()!=$("[name='new_password']").val()){
         	$(this).next('.icon').attr('src','images/forget-icon-02.png').show();
         }
         else{
         	$(this).next('.icon').attr('src','images/forget-icon-01.png').show();
         }
	})

	$('.password_reset').click(function(){
		$('.step-03').hide();
		$('.step-04').show();
	})

})

document.onkeydown = function(event) {  
            var target, code, tag;  
            if (!event) {  
                event = window.event; //针对ie浏览器  
                target = event.srcElement;  
                code = event.keyCode;  
                if (code == 13) {  
                    tag = target.tagName;  
                    if (tag == "TEXTAREA") { return true; }  
                    else { return false; }  
                }  
            }  
            else {  
                target = event.target; //针对遵循w3c标准的浏览器，如Firefox  
                code = event.keyCode;  
                if (code == 13) {  
                    tag = target.tagName;  
                    if (tag == "INPUT") { return false; }  
                    else { return true; }  
                }  
            }  
        };  
    