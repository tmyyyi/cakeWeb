//login页面的业务逻辑代码
require(["config"],function(){
	require(["addheaderandfooter","jquery","productDetails"],function(hf,$,detail){
		$(function(){
			hf.init();
			hf.init2();
			hf.init3();
			detail.init();
		})
		
	})
})