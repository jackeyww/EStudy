	

	window.onload = function(){

		var lessonMenus = $(".tagMenu li");
		var lessons = $(".allLessons li");
		var len = lessons.length;
		for(var i = 0; i < len; i++){
			(function(index){
				lessonMenus[index].onclick = function(){
					for(var j=0;j<len;j++){
						lessonMenus[j].className = "";
						lessons[j].className = "";
					}
					lessons[index].className = "active";
					this.className = "check";
				}
			})(i)
		}
	}