define(['jquery'],function(){
	/*
		放大镜
	*/

	function Magnifier(){
		//获取所需要的各种元素
		this.cover = $('.productlefttopcover');
		this.boxBig = $('.productlefttopbig');
		this.boxSmall = $('.productlefttopimg');
		this.imgBig = $('.productlefttopbig img');
		this.imgs = $('.productleftbottom ul li img')
	}
	//初始化
	Magnifier.prototype.init = function(){
		this.move();
		this.inOut();
		this.imgSwitch();
	}
	//点击下面图片切换
	Magnifier.prototype.imgSwitch = function(){
		var that = this;
		this.imgs.click(function(){
			var x = $(this).attr('data-url');
			console.log(x);
			$('.productlefttopimg img').attr('src',x);
			that.imgBig.attr('src',x);
		})
		
	}
	//移动放大
	Magnifier.prototype.move = function(){
		var that = this;
		this.boxSmall.on('mousemove',function(e){
			e = e || window.event;
			// 获取滤镜中心

			var l = e.clientX - that.cover.width()/2 - that.boxSmall.offset().left; 
			var t = e.clientY - that.cover.height()/2 - that.boxSmall.offset().top + $(document).scrollTop();

			//边界处理
			var x = that.boxSmall.width() - that.cover.width();//判断水平最宽边距
			var y = that.boxSmall.height() - that.cover.height();//判断垂直最宽边距
			
			l = l < 0 ? 0 : (l > x ? x : l);
			t = t < 0 ? 0 : (t > y ? y : t);

			var scale = that.boxBig.width()/that.cover.width(); //放大缩小的比例
			//移动蒙层
			that.cover.css({
				'left': l,
				'top': t
			})
			that.imgBig.css({
				'left': - l * scale,
				'top': - t * scale
			})
		})
		
	}
	//淡入淡出显示
	Magnifier.prototype.inOut = function(){
		var that = this;
		this.boxSmall.on('mouseenter',function(){
			that.cover.fadeIn();
			that.boxBig.fadeIn();
		})
		this.boxSmall.on('mouseleave',function(){
			that.cover.fadeOut();
			that.boxBig.fadeOut();
		})
	}
	//声明一个新的构造函数
	var magnifier = new Magnifier();
	return magnifier;

});