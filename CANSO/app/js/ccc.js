//商品列表页面的业务逻辑代码
require(["config"],function(){
	require(["addheaderandfooter","jquery","list"],function(hf,$,list){
		$(function(){
			hf.init();
			hf.init2();
			hf.init3();
			// console.log(2);
			list.init();
		})
		
	})
})