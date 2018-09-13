require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"template": "libs/template-web",
		"lunbo":"module/lunbo",
		"addheaderandfooter": "module/addheaderandfooter",
		"register2":"module/register2",
		"denlu":"module/denlu",
		"min": "libs/jquery1.7.min",
		"easing": "libs/jquery.easing.min",
		"list": "module/product_list",
		"productDetails":"module/productDetails",
		"cookie":"libs/jquery.cookie",
		"showcart":"module/showcart"
	},
	shim: {
		lunbo:{
			deps:["jquery"]
		},
		addheaderandfooter:{
			deps:["jquery"]
		},
		min:{
			deps:["jquery"]
		},
		easing:{
			deps:["jquery"]
		},
		register2:{
			deps:["jquery"]
		},
		register2:{
			deps:["cookie"]
		},
		denlu:{
			deps:["jquery"]
		},
		list:{
			deps:["jquery"]
		},
		productDetails:{
			deps:["jquery"]
		},
		showcart:{
			deps:["jquery"]
		}
	}
})