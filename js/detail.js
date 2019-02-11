

	window.onload = function(){

		var menus = $(".switchMenu span");
		var items = $(".switchItem .item");
		var len = menus.length;
		for(var i=0;i<len;i++){
			(function(index){
				menus[index].onclick = function(){
					for(var j=0;j<len;j++){
						menus[j].className = "";
						items[j].style.display = "none";
					}
					this.className = "check";
					items[index].style.display = "block";
				}
			})(i)
		}
	}