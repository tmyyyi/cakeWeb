//register页面的业务逻辑代码
require(["config"],function(){
	require(["addheaderandfooter","jquery","register2","cookie"],function(hf2,$,register){
		$(function(){
			//加载头尾部
			hf2.init2();
            
			register.init();
		})	
	})
})