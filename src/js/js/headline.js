define(['jquery'],function(){
	/*
		E宠头条
	*/

	function Headline(){
		//获取所需要的各种元素
		this.lis = $('.headline-bottom-left ul li');
		this.timer = null;
		this.index = 0;
	}
	//初始化
	Headline.prototype.init = function(){
		this.imgSwitch();
	}
	//图片轮播
	Headline.prototype.imgSwitch = function(){
		var that = this;
		this.timer = setInterval(function(){
			//console.log(1);
			that.index++; 
			if(that.index >= that.lis.length-1){
				that.index = 1;
			}
			$('.headline-bottom-left ul').css({
				'margin-top': -152 * that.index
			})
		},2000)
	}
	//声明一个新的构造函数
	var headline = new Headline();
	return headline;

});