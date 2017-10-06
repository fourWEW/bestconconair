'use strict';
$(function(){
	// 导航
	var nav = $('.nav');
	var navLi = $('li',nav);
	var slider = $('.slider');
	var l1 = navLi.eq(0).offset().left;
	navLi.each(function(index,val){
		navLi.eq(index).click(function(){
			var lindex = navLi.eq(index).offset().left;
			var left = lindex - l1;
			var width = navLi.eq(index).width();
			slider.animate({left:left},500);
			slider.css({width:width});
		})
	})


	// banner
	var bannerBox = $('.bannerBox');
	var banner = $('.banner',bannerBox);
	var p = $('p',bannerBox);
	var width = bannerBox.innerWidth();
	var now=0;
	var next=0;
	var falge=true;
	banner.css({left:width+'px'}).eq(0).css('left',0);
	function move(){
		if(!falge){
			return;
		}
		falge=false;
		next++;
		if(next>=3){
			next=0;
		}
		banner.eq(now).css('left',0);
		banner.eq(next).css({left:width+'px'});
		banner.eq(now).animate({left:-width+'px'},1000)
		banner.eq(next).animate({left:0},1000,function(){
			falge=true;
		})
		p.eq(now).removeClass('active');
		p.eq(next).addClass('active');
		now=next;	
	}
	var t=setInterval(function(){
		move()
	},2000);
	bannerBox.mouseenter(function(){
		clearInterval(t);
	})
	bannerBox.mouseleave(function(){
		t=setInterval(function(){
		move()
		},2000)
	})


	
})
	

