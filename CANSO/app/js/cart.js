require(["config"],function(){
	require(["addheaderandfooter","jquery","showcart"],function(hf,$,showcart){
		$(function(){
			hf.init();
			hf.init2();
			hf.init3();
			showcart.init();
			showcart.init2();
			// console.log(2);
			
		});
		
	})
})