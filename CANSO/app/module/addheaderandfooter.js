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

	 		$("#location").on("click",function(){
				// $.myalert("hello");
				console.log(3456777);
				$.myAlert("hello");
			})

	 	});
 	}


	 Hf.prototype.init2 = function(){
	 	$("#footer").load("/html/include/footer.html",function(){
	 	});
	 }

	 //加入购物车时顶部的变化
	 Hf.prototype.init3 = function(){
		$.post("http://localhost/gulpproject/api/vi/getCart.php",function(data){
			data = JSON.parse(data);
			var allnum = 0;
			// console.log(data.data[1].num);
			$.each(data.data,function(i,n){		
				allnum += Number(n.num);
			})
		if(allnum == 0){

		}else{
			$("#cart1").css({"display":"block"});
	  		$("#cart1").text(allnum);
	  		$("#cart2").css({"display":"block"});
	  		$("#cart2").text(allnum);
		}	

		});


		$.extend({
			myAlert:function(txt){
			//调用遮罩层，同时接收这个对象
			var $modal = $.modalLayer();
			$div = $('<div class="popBox"><h4>提示信息</h4><span class="closeBtn">X</span><p class="popCont">'+ txt +'</p><p class="btnBar"><button>确定</button></p></div>');
			/*$(document.body).append($div);
			$div.showCenter({top:-100,left:0});
			$div.drag();*/
			
			$div.appendTo($(document.body).showCenter());
			
			
			//事件委托给X和确定按钮写点击
			$div.on("click",".closeBtn,.btnBar button",function(){
				//删除
				$div.remove();
				$modal.remove();
			})
		},
		modalLayer:function(){
			//遮罩层
			$div = $("<div>");
			$div.css({
				"position":"fixed",
				"left":0,
				"top":0,
				"background":"rgba(0,0,0,.1)",
				"width":"100%",
				"height":"100%",
				"zIndex":10000
			}).appendTo($(document.body));
			return $div;
		}
	});

	$.fn.extend({
		showCenter:function(obj){
		var _this = this;
		//窗口大小发生变化的时候继续居中
		$(window).on("resize",center);
		function center(){
			var left = ($(window).innerWidth() - $(_this).outerWidth())/2 + (obj ? obj.left : 0);
			var top  =($(window).innerHeight() - $(_this).outerHeight())/2 + (obj ? obj.top: 0);
			$(_this).css({
				left:left,
				top:top
			});
		};
		center();
		return $(this);
		}
	})

	}
	 
	 return new Hf();
	 
})