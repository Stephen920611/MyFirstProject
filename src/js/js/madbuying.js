define(['jquery'],function(){
	/*
		每日疯狂里的轮播图
	*/
	/*
		两种方法的原型继承方法
	*/

	function MadBuying(){
		//获取所需要的各种元素
		//左右按钮的元素
	    this.ul = $('.madbuyingrightbottomgoods ul');
	    this.btnLis = $('.madbuyingrightbottomgoods .madbuyingrightbottomgoodscurrent li');
	    this.index = 0;
	    this.btnRight = $('.madbuyingarrowr');
	    this.btnLeft = $('.madbuyingarrowl');
	    //选项卡的元素
	    this.conLis = $('.madbuyingrighttop ul li');
	    //倒计时的元素
	    this.timer = null;
	    this.count = $('.madbuyinglefttimer');
	}
	//初始化
	MadBuying.prototype.init = function(){
		this.btnClick();
		this.tabControl();
		this.countDown();
	}
	//左右按钮点击事件
	MadBuying.prototype.btnClick = function(){
		var that = this;
		this.btnRight.on('click',function(){
			that.index++;
			that.index = that.index > that.btnLis.length - 4 ? that.btnLis.length - 4 : that.index;
			$('.madbuyingrightbottomgoodscurrent').stop().animate({
				'left' : - that.index * 211
			},800);
		});
		this.btnLeft.on('click',function(){
			that.index--;
			that.index = that.index < 0 ? 0 : that.index;
			$('.madbuyingrightbottomgoodscurrent').stop().animate({
				'left' : - that.index * 211
			},800);
		});
	}
	//选项卡事件
	MadBuying.prototype.tabControl = function(){
		var that = this;
		this.conLis.hover(function(){
			//滑过选项卡控制当前样式
			$(this).addClass('madbuyingon').siblings().removeClass('madbuyingon');
			$(this).find('i').show().parent().siblings().find('i').hide();
			//滑过选项卡对应的ul显示，其他的ul隐藏
			var x = $(this).index();
			$(this).parents('.madbuyingright').find('.madbuyingrightbottomgoods')
			.children('ul').eq(x).addClass('madbuyingrightbottomgoodscurrent').show()
			.siblings().removeClass('madbuyingrightbottomgoodscurrent').hide();
		})
	}
	MadBuying.prototype.countDown = function(){
		
		    //console.log(num,hours,secondsR,secondsL);
		    var that = this;
		    this.timer = setInterval(function(){
		    	var end = new Date('2017/6/6 09:00'),
			    now = new Date(),
			    num = end - now,
			    hoursL = parseInt(num/1000/60/60/10),
			    hours = parseInt(num/1000/60/60%10),
			    minutes = parseInt(num/1000/60%60),
			    minutesL = parseInt( minutes/10),
			    minutesR = parseInt( minutes%10),
			    seconds = parseInt(num/1000%60),
			   	secondsL = parseInt(seconds/10),
			   	secondsR = parseInt(seconds%10);
		    	that.count.html( `<span>
									${hoursL}
								</span>
								<span>
									${hours}
								</span>
								<b>:</b>
								<span>
									${minutesL}
								</span>
								<span>
									${minutesR}
								</span>
								<b>:</b>
								<span>
									${secondsL}
								</span>
								<span>
									${secondsR}
								</span>` )
				//console.log(1);
		    },1000)
	}
	//声明一个新的构造函数
	var madbuying = new MadBuying();
	return madbuying;



	/*	两种方法的第二种

	var madbuying = {
		btnLeft: $('.madbuyingarrowl'),
		btnRight: $('.madbuyingarrowr'),
		ul: $('.madbuyingrightbottomgoods ul'),
		lis: $('.madbuyingrightbottomgoods ul li'),
		index: 0,

		//初始化
		init: function(){
			this.btnClick();
			//console.log(this.lis.length);
		},
		//左右点击事件,移动轮播图位置
		btnClick: function(){
			var that = this;
			//右点击事件
			this.btnRight.on('click',function(){
				that.index++;
				that.index = that.index > that.lis.length-4 ? that.lis.length-4 : that.index;
				that.ul.stop().animate({
					'left' : - that.index * 211
				},800)
			});
			//左点击事件
			this.btnLeft.on('click',function(){
				that.index--;
				that.index = that.index < 0 ? 0 : that.index;
				that.ul.stop().animate({
					'left' : - that.index * 211
				},800)
			})
		}
	}
	return madbuying;*/
});