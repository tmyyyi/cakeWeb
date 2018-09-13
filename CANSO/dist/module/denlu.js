//定义登录的模块
define(function(){
	function tab(){
	}

	tab.prototype.init = function(){

		//点击登录
		$("#denglu").on("click",function(){
			var name = $("#username").val();
			var pwd = $("#userPwd").val();
			var regbox =$("#regbox");
			$.post("http://localhost/gulpproject/api/vi/login.php",{"name":name,"pwd":pwd},function(data){
				data = JSON.parse(data);
				//如果验证成功，直接跳转到index.html
				if(data.code){
					window.location.href="http://localhost:1021/index.html?username="+name;
				}else{
					//没有输入正确，提示
					regbox.find("p").css("display","block");
				}
			});
		})
	}
	
	return new tab();

}) 