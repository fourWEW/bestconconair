window.onload=function(){
	var boxone = document.querySelectorAll(".boxone");
	var boxbottom = document.querySelectorAll(".boxbottom");
	var h3 =document.querySelectorAll(".boxbottom h3");
	Array.from(boxone).forEach((val,index)=>{
		val.onmousemove = function(){
			boxbottom[index].style.bottom='0px';
			boxbottom[index].style.backgroundColor='#fff43c';
			boxbottom[index].style.color='#333333';
			h3[index].style.color='#333333';
		}
		val.onmouseleave = function(){
			boxbottom[index].style.bottom='-109px';
			boxbottom[index].style.backgroundColor='#f4f4f4';
			h3[index].style.color='#8a8a8a';
		}
	})



// 加盟案例

var now=$('.lbtnbox li').index();
		var next=0;
       $('.lbtnbox li').mouseenter(function() {
            var index = $('.lbtnbox li').index(this);
            $('.add li').eq(index).show().siblings().hide();
            $('.lbtnbox li').eq(index).addClass('lactive').siblings().removeClass('lactive');
       });     
       	function auto(type='l'){
       		 $('.add li').eq(now).show().siblings().hide();
       		if(type=='l'){
	       		next++;
	       		if(next>=$('.add li').length){
	       			next=0;
	       			}
	       		}
			else if(type=='r'){
				next--;
				if(next<=0){
					next=$('.add li').length-1;
				}
			}
            $('.lbtnbox li').eq(next).addClass('lactive').siblings().removeClass('lactive');
			$('.add li').eq(now).hide();
			$('.add li').eq(next).show();
       	}
	var t=setInterval(function(){auto()}, 2000);
 	$('.add li').mouseenter(function(){
            clearInterval(t);
       }).mouseleave(function(){
            t=setInterval(function(){auto()}, 2000);
       })
}


// 企业环境

var now1=$('.air-con-left-bot li').index();
		var next1=0;
       $('.air-con-left-bot li').mouseenter(function() {
            var index = $('.air-con-left-bot li').index(this);
            $('.air-con-left-top li').eq(index).show().siblings().hide();
            $('.air-con-left-bot li').eq(index).addClass('llactive').siblings().removeClass('llactive');
       });     
       	function auto1(type='l'){
       		 $('.air-con-left-top li').eq(now1).show().siblings().hide();
       		if(type=='l'){
	       		next1++;
	       		if(next1>=$('.air-con-left-top li').length){
	       			next1=0;
	       			}
	       		}
			else if(type=='r'){
				next1--;
				if(next1<=0){
					next1=$('.air-con-left-top li').length-1;
				}
			}
            $('.air-con-left-bot li').eq(next1).addClass('llactive').siblings().removeClass('llactive');
			$('.air-con-left-top li').eq(now1).hide();
			$('.air-con-left-top li').eq(next1).show();
       	}
	var t1=setInterval(function(){auto1()}, 2000);
 	$('.air-con-left-top li').mouseenter(function(){
            clearInterval(t1);
       }).mouseleave(function(){
            t1=setInterval(function(){auto1()}, 2000);
       })

         $('.left_one1').click(function(){
            auto1('r');
            $this.addClass('aactive');
        })
        $('.right_one1').click(function(){
            auto1('l');
        })

