define(function(){
	function details(){

	}
	details.prototype.init = function(){
		var id = window.location.search.split("=")[1]; 
		$.get("http://localhost/gulpproject/api/vi/details.php",{id:id},function(data){
			$.each(data.data,function(index,val){
				var str = "";
				// val.detailshowimg = val.detailshowimg.split(",");			
				str = `<img src="/img/${val.detailshowimg}.jpg">`
				$(".show_banner_wrap").append(str);

				var str2 = "";
				str2 = `<p>${val.name}<i>${val.price}</i><span>￥</span></p>`
				$(".goods_left_top").append(str2);

			})
		},"json");

	}
	return new details();
})