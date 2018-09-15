define(function(){

	function list(){
	}
			
	list.prototype.init = function(){
		//获取id的名字
		var $title = $(this).attr("id");

		//通过id名字与数据库的classname匹配，从数据库获取数据
		//全选的状态
		$.get("http://localhost/gulpproject/api/vi/list.php",{cakename:"alltaste"},function(data){
			var str = "";
			$.each(data.data,function(index,val){
				val.img = val.img.split(",");
				val.name = val.name.split(",");
				val.price = val.price.split(",");
				val.id = val.id.split(",");				
				str +=`<div><dl class="addcart" data-index=${val.id}><dt><a href="/html/product_details.html?id=${val.id}">
				<img id="productimg" src="/img/${val.img}.jpg">
				</a></dt><dd class="productName">${val.name}</dd><dd class="productprice">￥${val.price}</dd>
				<span><a href="javascript:;">加入购物车</a><span></dl></div>`										
			})
			$("#wrap").append(str);
				//加入购物车时，存入数据库
				//点击加入购物车，购物车icon更新数据
	          	var name,price,img,orderId;
				$(".addcart").on("click","span",function(){
	          		productIndex = $(this).parent().attr("data-index");		       
	            	name = $(this).parent().children(".productName").text();
	            	price = $(this).parent().children(".productprice").text();
	            	img = $(this).parent().find("img").attr("src").split("/")[2];
	          	// console.log(name);console.log(price);console.log(img);console.log(productIndex);
	            	$.post("http://localhost/gulpproject/api/vi/order.php",{name:name,price:price,img:img,productIndex:productIndex},function(data){
	            		console.log(data);
	            	});
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
	            })
			},"json");

		//点击不同口味类型时
		$("#listSelect").on("click","dd",function(){
			$("#wrap").empty();//清除上次创建的所有子节点
			var $title = $(this).attr("id");//获取id的名字
			//听过id名字与数据库的classname匹配，从数据库获取数据
			$.get("http://localhost/gulpproject/api/vi/list.php",{cakename:$title},function(data){
				$.each(data.data,function(index,val){
					val.img = val.img.split(",");
					val.name = val.name.split(",");
					val.price = val.price.split(",");
					val.id = val.id.split(",");
					var str = "";
					str +=`<div><dl class="addcart" data-index=${val.id}><dt><a href="/html/product_details.html?id=${val.id}">
					<img src="/img/${val.img}.jpg">
					</a></dt><dd>${val.name}</dd><dd>￥${val.price}</dd>
					<span><a href="javascript:;">加入购物车</a><span></dl></div>`
					$("#wrap").append(str);
				})
			//加入购物车时，存入数据
			//点击加入购物车，购物车icon更新数据
          		var name,price,img,orderId;
				$(".addcart").on("click","span",function(){
	          		productIndex = $(this).parent().attr("data-index");		       
	            	name = $(this).parent().children(".productName").text();
	            	price = $(this).parent().children(".productprice").text();
	            	img = $(this).parent().find("img").attr("src").split("/")[2];
            		$.post("http://localhost/gulpproject/api/vi/order.php",{name:name,price:price,img:img,productIndex:productIndex},function(data){
            			console.log(data);
            		});
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
            		})
				},"json");
		});
	}
	return new list();
})