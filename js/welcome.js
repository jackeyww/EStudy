

	window.onload = function(){
		var winSize = new getWindowSize();
		var winHeight = winSize.h;
		var timer = setInterval(countDown,1000);
	}

	function getWindowSize(){
		if(window.innerWidth){
			return{
				w : window.innerWidth,
				h : window.innerHeight,
			}
		}else if(document.compatMode == "BackCompat"){
			return{
				w : document.body.clientWidth,
				h : document.body.clientHeight,
			}
		}else{
			return{
				w : document.documentElement.clientWidth,
				h : document.documentElement.clientHeight,
			}
		}
	}
	var second = 5;
	function countDown(){
		$(".time")[0].innerText = second+"s";
		second--;
		if(second<0){
			window.location.href = "index.html";
		}
	}