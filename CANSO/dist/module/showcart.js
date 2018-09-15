define(function(){
	function showcart(){

	}
	showcart.prototype.init = function(){
		
		$.get("http://localhost/gulpproject/api/vi/cart.php",function(data){
			var allnum = 0,
				cost = 0,
				allcost = 0;
			$.each(data.data,function(index,val){
				var str = "";
				val.num = Number(val.num);
				allnum += val.num;

				val.price = val.price.split("￥")[1];
				allcost += val.price*val.num;
				cost = val.price*val.num;
				var str = `<div class="menu_list">
								<div class="sp" id="sp">
									<dl>
										<dt>
											<img src="/img/${val.img}">	
										</dt>
										<dd>${val.name}</dd>
									</dl>
								</div>
								<div class="dj" id="dj">
								<p id="cartprice">${cost}</p>
								</div>
								<div class="sl" id="sl">
									<p id="cartnum">
										<span id="jianjian"><a href="javascript:;">-</a></span>
										<span id = "pronum">${val.num}</span> 
										<i id="jiajia"><a type="submit" href="javascript:;">+</a></i>
									</p>
								</div>
								<div class="yc" id="yc">
									<p id="cartdel">
									<a href="javascript:;">删除</a>
									</p>
								</div>
							</div>`;
				$(".cart_menu_wrap").append(str);
			});

			$(".allnum").find("span").html(allnum);
			$(".allcost").find("span").html(allcost);
			$(".totalcoset").html(allcost);

			$(".menu_list").on("click","span",function(){
				var _this = $(this);
				var name = $(this).parent().parent().parent().find("dd").html();
				name = String(name);
				console.log(2);
				$.get("http://localhost/gulpproject/api/vi/jian.php",{"name":name},function(data){
					
				})
			})

			$(".menu_list").on("click","i",function(){
				var name = $(this).parent().parent().parent().find("dd").html();
				name = String(name);
				console.log(4);
				$.get("http://localhost/gulpproject/api/vi/add.php",{"name":name},function(data){
					console.log(data);
				})
			})

			$(".menu_list").on("click","#cartdel a",function(){
				var _this = $(this).parent().parent().parent();
				var name = $(this).parent().parent().parent().find("dd").html();
				console.log(name);
				name = String(name);
				$.get("http://localhost/gulpproject/api/vi/add.php",{"name":name},function(data){
					console.log(data);
					_this.remove();
				})
			})


			},"json");

	showcart.prototype.init2=function(){


		
	}

		
	}
	return new showcart();
})