window.onload=function(){
	var boxone = document.querySelectorAll(".boxone");
	var boxbottom = document.querySelectorAll(".boxbottom");
	var h3 =document.querySelectorAll(".boxbottom h3");
	console.log(boxbottom);
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



}
