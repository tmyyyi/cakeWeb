require(["config"],function(){
	require(["lunbo","jquery","addheaderandfooter"],function(lunbo,$,addhf){
		$(function(){
			lunbo.init();
			addhf.init();
			addhf.init2();
			addhf.init3();
		})	
	})
})