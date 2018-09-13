define(function(){
	function tab(){
	}
	tab.prototype.init = function(){
		var _username,_userPwd,_oldPwd,_userTell;
		//打开自动存储的 JSON 对象作为 cookie 值传递,假定JSON.stringify和JSON.parse:
		 $.cookie.json = true;
		 //如果没有就为空数组
         var users = $.cookie("users") || [];

		//用户名验证
		$("#username").blur(function(){
			_username = $("#username").val();
			var reg = /^\w+$/g;
			if (!_username == "") {
                $(".username_info").css({"display":"block"});
                if(!reg.test(_username)) {
                    $(".username_info").text("*请输入字母、数字、下划线组成的用户名");
                }else{
                	var index = exist(users.name,users);
                	if (index==-1) {
                		$(".username_info").text("该用户名已经被注册！");
                	}else{                         
                    $(".username_info").text("该用户名可以注册！");
                    $(".username_info").css({"color":"green"});
                    } 
              	}                       
            }else{
            	$(".username_info").css({"display":"block"});
                $(".username_info").text("用户名不能为空！"); 
            }
		});
	



		//密码验证
		$("#userPwd").blur(function(){
			_userPwd = $("#userPwd").val();
			var reg=/^.{6,}/g;
			//判断
			if (!_userPwd == "") {
                $(".userPwd_info").css({"display":"block"});
                if(!reg.test(_userPwd)) {
                    $(".userPwd_info").text("*请输入6-20位的密码");
                }else{                          
                    $(".userPwd_info").text("设置密码成功！");
                    $(".userPwd_info").css({"color":"green"});
              	}                       
            }else{
            	$(".userPwd_info").css({"display":"block"});
                $(".userPwd_info").text("密码不能为空！"); 
            }
		});

		//确认密码
		$("#oldPwd").blur(function() {
            _oldPwd = $("#oldPwd").val();
            if(!_oldPwd == ""){
                $(".oldPwd_info").css({"display":"block"});
                if(_oldPwd == _userPwd){
                    $(".oldPwd_info").text("密码确认成功！");
                    $(".oldPwd_info").css({"color":"green"});
                }
                else{
                    $(".oldPwd_info").text("密码输入不一致！");
                }
            }
            else{
            	$(".oldPwd_info").css({"display":"block"});
                $(".oldPwd_info").text("请先输入密码！");
            }
         });

		//手机号码验证
		$("#userTell").blur(function(){
			_userTell = $("#userTell").val();
			var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
			//判断
			if (!_userTell == "") {
                $(".userTell_info").css({"display":"block"});
                if(!reg.test(_userTell)) {
                    $(".userTell_info").text("*请输入11位正确的手机号码");
                }else{                          
                    $(".userTell_info").text("手机号码正确！");
                    $(".userTell_info").css({"color":"green"});
              	}                       
            }else{
            	$(".userTell_info").css({"display":"block"});
                $(".userTell_info").text("手机号码不能为空！"); 
            }
		});


		//点击立即注册
		$("#regist").on("click",function(){
			//获取用户名和密码
			var name =  $("#username").val();
			var pwd = $("#userPwd").val();
			var oldpwd = $("#oldPwd").val();
			var tel = $("#userTell").val();
			var usercheck = $("#usercheck").prop("checked");
                                  
			//验证是否全部填入
			if (!usercheck || tel == "" || pwd == "" || oldpwd == "" || name == "") {
            	alert("请确认所有信息均已填入完整！");
			}else{
				//向后台传送数据
				$.post("http://localhost/gulpproject/api/vi/register.php",{"name":name,"pwd":pwd,"tel":tel},function(data){
					data = JSON.parse(data);
					if(data.code){
						window.location.href="http://localhost:1021/html/login.html";
					}else{
						regbox.find("p").css("display","block");
					}
				})
				//存入cookie：用户名和密码
	            var user = {
	                name : $("#username").val(),
	                pwd : $("#userPwd").val()
	            };
	            users.push(user);
	            $.cookie("users",users,{expires:7,path:"/"});
				}						
		})		

		//判断是否注册过的方法
		function exist(id,users){
            for(var i = 0,len = users.length;i<len;i++){
                if(users[i].id == id){
                    return i;
                }
            }
            return -1;
        }
	}

	return new tab();
})