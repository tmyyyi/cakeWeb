require(["config"],function(){
	require(["lunbo","jquery","addheaderandfooter","addcart","tantantan"],function(lunbo,$,addhf,addcart,tan){
		$(function(){
			lunbo.init();
			addhf.init();
			addhf.init2();
			addhf.init3();
			addcart.init();
			tan.init();
		})	
	})
})