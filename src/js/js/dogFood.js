define(['jquery'],function(){
	/*
		狗狗主粮里的
	*/

	function DogFood(){
		//获取所需要的各种元素
		this.dmLis = $('.alldetail .detailmiddlercover ul li');
		this.divs = $('.alldetail .detailmiddlerprod');
		this.dmLis1 = $('.alldetail1 .detailmiddlercover ul li');
		this.divs1 = $('.alldetail1 .detailmiddlerprod');
		this.dmLis2 = $('.alldetail2 .detailmiddlercover ul li');
		this.divs2 = $('.alldetail2 .detailmiddlerprod');
		this.dmLis3 = $('.alldetail3 .detailmiddlercover ul li');
		this.divs3 = $('.alldetail3 .detailmiddlerprod');
		this.dmLis4 = $('.alldetail4 .detailmiddlercover ul li');
		this.divs4 = $('.alldetail4 .detailmiddlerprod');
		this.dmLis5 = $('.alldetail5 .detailmiddlercover ul li');
		this.divs5 = $('.alldetail5 .detailmiddlerprod');
	}
	//初始化
	DogFood.prototype.init = function(){
		this.btnSwitch();
		this.btnSwitch1();
		this.btnSwitch2();
		this.btnSwitch3();
		this.btnSwitch4();
		this.btnSwitch5();
	}
	//鼠标滑过切换绿色的框
	DogFood.prototype.btnSwitch = function(){
		//打印看看是否获取到值		
		//console.log( this.dmLis );
		//console.log( this.divs );
		var that = this;
		this.dmLis.hover(function(){
			//打印看看是否获取到值	
			//console.log( $(this).index() );
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			//console.log( that.divs.eq(x).siblings('.detailmiddlerprod') );
			that.divs.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	DogFood.prototype.btnSwitch1 = function(){
		var that = this;
		this.dmLis1.hover(function(){
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			that.divs1.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	DogFood.prototype.btnSwitch2 = function(){
		var that = this;
		this.dmLis2.hover(function(){
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			that.divs2.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	DogFood.prototype.btnSwitch3 = function(){
		var that = this;
		this.dmLis3.hover(function(){
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			that.divs3.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	DogFood.prototype.btnSwitch4 = function(){
		var that = this;
		this.dmLis4.hover(function(){
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			that.divs4.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	DogFood.prototype.btnSwitch5 = function(){
		var that = this;
		this.dmLis5.hover(function(){
			$(this).addClass('detailmiddlerchover').siblings().removeClass('detailmiddlerchover');
			var x = $(this).index();
			that.divs5.eq(x).show().siblings('.detailmiddlerprod').hide();
		})
	}
	//声明一个新的构造函数
	var dogFood = new DogFood();
	return dogFood;

});