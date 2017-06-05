define(['jquery'],function(){
	/*
		E宠头条
	*/

	function Praise(){
		//获取所需要的各种元素
		this.lis = $('.praise-bottom ul li');
		this.spans = $('.praise-bottom-btn span');
		this.timer = null;
		this.index = 0;
	}
	//初始化
	Praise.prototype.init = function(){
		this.imgSwitch();
		this.autoPlay();
		this.spanSwitch();
	}
	//图片轮播
	Praise.prototype.imgSwitch = function(){
		//console.log( this.lis );
		this.spans.eq(this.index).addClass('praise-bottom-btn-on').siblings().removeClass('praise-bottom-btn-on');
		$('.praise-bottom ul').stop().animate({
			left: -1180 * this.index
		})
	}
	//控制小按钮切换
	Praise.prototype.spanSwitch = function(){
		var that = this;
		this.spans.on('mouseenter',function(){
			that.index = $(this).index();
			that.imgSwitch();
			clearInterval(that.timer);
		})
		this.spans.on('mouseleave',function(){
			that.autoPlay();
		})
	}
	//自动轮播
	Praise.prototype.autoPlay = function(){
		var that = this;
		this.timer = setInterval(function(){
			that.index++;
			if( that.index >= that.lis.length){
				that.index = 0;
			}
			that.imgSwitch();
		},5000)
	}
	//声明一个新的构造函数
	var praise = new Praise();
	return praise;

});