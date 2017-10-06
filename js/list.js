$(function(){
	var id=$('.list>.xuan>.id');
	var ida=$('.list>.xuan>.ida');
	var xuan=$('.list>.xuan');
	var xllb=$('.xuan>.id>.xll>.xllb');
	var xllc=$('.xuan>.id>.xll>.xllc');
	xuan.mouseenter(function(){
		$(this).find(".id").css('left','-30px').css('background','#E82281').css('transition','all 0.2s');
		$(this).find(".xll").css('background','#E82281').css('transition','all 0.2s');
		$(this).find(".xllb").css('background','#E82281').css('transition','all 0.2s');
		$(this).find(".xllc").css('background','#E82281').css('transition','all 0.2s');
		$(this).find(".ida").css('transform','scale(1.1)').css('transition','all 0.2s')
	})
	xuan.mouseleave(function(){
		$(this).find(".id").css('left','0px').css('background','#999');
		$(this).find(".xll").css('background','#999');
		$(this).find(".xllb").css('background','#999');
		$(this).find(".xllc").css('background','#999');
		$(this).find(".ida").css('transform','scale(1.0)')
	})


})