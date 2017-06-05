define(['jquery'],function(){
	var banner = {
		imgs: $('.banner .bannerleft .bannerimgbox .bannerimg'),
		spans: $('.banner .bannerleft .bannernum span'),
		banners: $('.banner .bannerleft'),
		timer: null,
		index: 0,

		/*初始化*/
		init: function(){
			this.autoplay();
			this.spansEnter();
			this.bannerStatus();
			this.imgSwitch(); 	
		},
		/* 按钮滑过的时候清除定时器，移除自动轮播，滑到想要的位置，并且在移出的时候自动轮播
		 */
		spansEnter: function(){
			var that = this;
			this.spans.on('mouseenter',function(){
				that.index = $(this).index() ;
				that.imgSwitch();
				clearInterval(that.timer);
			});
			this.spans.on('mouseleave',function(){
				that.autoplay();
			});
		},
		/* 自动轮播 */
		autoplay: function(){
			var that = this;
			this.timer = setInterval(function(){
				//进行index控制，如果大于图片的长度-1，就从头开始
				//console.log(_this.imgs);
				if(that.index > that.imgs.length - 1 ){
					that.index = 0;
				}else{
					that.index++;
				}
				that.imgSwitch();
			},4400);
		},
		/* 图片切换*/
		imgSwitch: function(){
			//console.log(this.imgs.eq(this.index))
			var that = this;
			//小滑块对应的样式变化
			this.spans.eq(this.index).addClass('active1').siblings().removeClass('active1');
			//图片的控制淡入淡出
			this.imgs.parent().eq(this.index).stop().fadeIn(400,function(){
				// 当前的图片添加缩小效果，其他的移除
				that.imgs.eq(that.index).addClass("active")
				.parent().siblings(".bannerimgbox").children()
				.removeClass("active")
			})
			.siblings(".bannerimgbox").stop()
			.fadeOut();
		},
		//鼠标进入轮播图，自动轮播停止
		bannerStatus: function(){
			var that = this;
			this.banners.mouseenter(function(){
				clearInterval(that.timer);
			});
			this.banners.mouseleave(function(){
				that.autoplay();
			});
		}
	};


	return banner;
	
});