
	window.onload = function(){
		createRandomImg($(".codeImg")[0]);
		$(".codeImg")[0].onclick = function(){createRandomImg($(".codeImg")[0]);}
		$(".imgCode")[0].onblur = function(){checkRandomImg();}
		$(".phone")[0].onblur = function(){checkPhoneNum();}
		$(".messageCode")[0].onblur = function(){checkZipCode();}

		$(".login")[0].onclick = function(){
			var phonenum = $(".phone")[0].value;
			var codeimg = $(".imgCode")[0].value;
			var zipcode = $(".messageCode")[0].value;
			if(phonenum != "" && codeimg != "" && zipcode != ""){
				window.location.href = "user.html";
			}else{
				alert("请填写完整");
			}
		}
	}
		var arr = [];
		function createRandomImg(codeImg){
			//代表图片
			var arr1 = ['code1','code2','code3','code4','code5','code6','code7','code8'];
			//代表二维码数字
			var arr2 = ['8q87y','7up94','lq82s','ei1qg','wbu26','h2t8z','5yyak','qeihy'];
			index = Math.floor(Math.random()*arr1.length);
			arr[0] = (arr1[index]);
			arr[1] = (arr2[index]);
			codeImg.src = "image/"+arr[0]+".png";
			// $(".codeTip")[0].style.display = "none";
			console.log(arr);
			return arr;
		}
		function checkRandomImg(){
			console.log(arr[0],arr[1]);
			if($(".imgCode")[0].value == arr[1]){
				$(".imgCode")[0].placeholder ="请输入图片验证码";
			}else if($(".imgCode")[0].value != arr[1] && $(".imgCode")[0].value != ""){
				$(".imgCode")[0].value = "";
				$(".imgCode")[0].placeholder ="输入错误，请重输！";
				//输入错误，自动新建一个二维码
				createRandomImg($(".codeImg")[0])
			}else{
				
			}
		}
		function checkPhoneNum(){
			var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			var phonenum = $(".phone")[0].value;
			if($(".phone")[0].value == ""){
				$(".phone")[0].placeholder ="请输入您的手机号";
			}else if(!reg.test(phonenum)){
				$(".phone")[0].value = "";
				$(".phone")[0].placeholder ="输入错误，请重输！";
			}
		}
		function checkZipCode(){
			var reg = /^[0-9]{6}$$/;
			var messageCode = $(".messageCode")[0].value;
			if(!reg.test(messageCode)){
				$(".messageCode")[0].value = "";
				$(".messageCode")[0].placeholder ="输入错误，请重输！";
			}
		}
