define(function(){
	function lunbo(){
	}
	lunbo.prototype.init=function(){
		var box = $("#box"),
			ul = $("#box ul"),
			aLi = $("#box ul li");
		var goNext = $("#goNext");
		var goPrev = $("#goPrev");
		var index = 0;//处于第几张图
		var flag = flag;//没有播放
		var len = aLi.length;//图片的张数
		var liWidth = aLi.eq(0).outerWidth();
        console.log(liWidth);

        //ul末尾拼接一个aLi[0],计算ul的宽度
		ul.append(aLi.eq(0).clone(true)).css("width",(len+1)*liWidth);

		goPrev.on("click",function(){
		if(!flag){
			flag = true;
			index--;
			if(index < 0){
				//瞬间拉回补充那张图
				ul.css("left",-len*liWidth);
				//从补充那张图往最后一张图播放的index
				index = len - 1;
			}
				ul.animate({"left":-index*liWidth},1000,function(){
					flag = false;
				})
			}
		})
	
	goNext.on("click",function(){
		if(!flag){
			flag = true;
			index++;
			if(index >= len){
				ul.animate({"left":-len*liWidth},1000,function(){
					//瞬间拉回第0张
					ul.css("left",0);
					index = 0;
					flag = false;
				})
			}else{
				ul.animate({"left":-index*liWidth},1000,function(){
					flag = false;
				})
			}
		}
	})
	
	var timer = null;
	function auto(){
		timer = setInterval(function(){
			goNext.trigger("click");
		},3000);
	}
	auto();
	
	$("#box").hover(function(){
		clearInterval(timer);
	},function(){
		auto()
	});


	}
	return new lunbo();
})