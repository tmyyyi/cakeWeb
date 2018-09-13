//定义模块
define(["jquery","cookie"],function($){
	 function Hf(){}
	 Hf.prototype.init = function(){
	 	$("#header").load("/html/include/header.html",function(){
	 		var $hide = $("#header_hide");
	 		var $header = $("#header");
	 		var $header_h = $header.height();
	 		// console.log($hide.css("display"))

	 		//判断是否有用户登录 
	 		var isName = $.cookie("users");
	 		isName = JSON.parse(isName);
	 		isName = isName[isName.length-1].name;
	 		console.log(isName);
	 		if(isName){
	 			//有登录的缓存
	 			$("#hello").empty();
	 			var str = "";
	 			str = `<a href="/html/login.html" class="login">${isName}</a><span class="register">，您好&nbsp;<a href="/html/login.html">注销</a></span>`;
	 			$("#hello").append(str);
	 		}
	 		

	 		//吸顶效果根据滚动条滚动高度设置
	 		$(window).on("scroll",function(){
	 			if($(window).scrollTop() > $header_h){
	 				$hide.fadeIn("slow",function(){
	 					$hide.css("display","block");
   					});
	 			}else{
	 				$hide.fadeOut("slow",function(){
	 					$hide.css("display","none");
   					});
	 			}
	 		})

	 		//导航点击固定样式
	 		$("#navUl li").on("click",function(){
	 			$(this).addClass("ac").siblings().removeClass("ac");
	 			console.log(3333);
	 		});
	
	 	});
	 }


	 Hf.prototype.init2 = function(){
	 	$("#footer").load("/html/include/footer.html",function(){
	 	});
	 }

	 Hf.prototype.init3 = function(){
		$.post("http://localhost/gulpproject/api/vi/getCart.php",function(data){
		if(data == 0){

		}else{
			$("#cart1").css({"display":"block"});
	  		$("#cart1").html(data);
	  		$("#cart2").css({"display":"block"});
	  		$("#cart2").html(data);
		}

		});
	 }
	 
	 return new Hf();
	 
})