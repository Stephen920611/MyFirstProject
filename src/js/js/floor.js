define(['jquery'],function(){
	/*
		楼层和返回顶部
	*/

	function Floor(){
		//获取所需要的各种元素
		this.return = $('.righthint-con-return');
		this.floorList = $('.floor ul li');
		this.floorItem = $('.floor-item');
		this.floors = $('.floor');
		this.ch = $(window).height();//窗口的高度
	}
	//初始化
	Floor.prototype.init = function(){
		this.backTop();
		this.floorSwitch();
		//console.log(this.ch );打印窗口的高度看看是不是符合
	}
	//返回顶部
	Floor.prototype.backTop = function(){
		this.return.on('click',function(){
			$('body,html').animate({
				'scrollTop': 0
			},1000)
		})
	}
	//楼层
	Floor.prototype.floorSwitch = function(){
		var that = this;
		$(window).scroll(function(){
			//获取滚动条的高度
			var scrollT = $('body').scrollTop();
			//console.log( $('.allnewtaste').offset().top );
			//如果往下滚动到相应的楼层，楼层显示，即滚动条的高度 > 新品尝鲜距离最顶部的高度 - 窗口的一半
			if( scrollT > ( $('.allnewtaste').offset().top - that.ch/2 ) ){
				that.floors.fadeIn()
			}else{
				that.floors.fadeOut()
			}
			//遍历具体的楼层 看是否满足条件
			that.floorItem.each(function(index){
				var h = $(this).height();
				var t = $(this).offset().top;
				//console.log(that.ch);
				//判断楼层是否处于中间的位置
				if( (t + h > scrollT + that.ch/2) && (t < scrollT + that.ch/2) ){
					//满足条件给对应的楼层列表添加class名 
					that.floorList.eq(index).addClass('floor-active').siblings().removeClass('floor-active');
				}
			})
		});
		//楼层列表点击的时候 运动到相应的楼层
		this.floorList.click(function(){
			var index = $(this).index()
			//console.log(index );
			var t = that.floorItem.eq(index).offset().top;
			$('html,body').animate({
				'scrollTop': t
			})
		})

	}
	//声明一个新的构造函数
	var floor = new Floor();
	return floor;

});