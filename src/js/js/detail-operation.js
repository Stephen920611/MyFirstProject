define(['jquery','template','jquery.cookie'],function($,template,cookie){
	var detailO = {
		data: {},
		init: function(){
			var _this = this;
			//console.log(1);
			//读取商品数据(JSON文件格式必须正确，否则获取失败，除了数字都必须加双引号)
			$.getJSON('../../json/data.json',function(result){
				//console.log(result);
				//保留数据
				_this.data = result;
				//将a标签都放进盒子
				var list = template('type-list',result);
				//console.log(list);
				$('.prodrightoptioncon').html(list);

				//选中第一个
				var first = $('.prodrightoptioncon a:first');
				first.addClass('selected');

				//
				var id = first.data('id');
				//console.log(id);
				first.parents('.productright').find('.prodrightpricechange').html( result.option[id].sale_price );
				first.parents('.productright').find('.stock-num').html( result.option[id].stock );
			});

			//颜色切换
			this.colorSwitch();
			this.increase();
			this.decrease();
			this.input();
			this.addToCart();
		},
		//颜色切换
		colorSwitch: function(){
			var _this = this;
			$('.prodrightoptioncon').on('click','a',function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				var id = $(this).data('id');
				$(this).parents('.productright').find('.prodrightpricechange').html( _this.data.option[id].sale_price );
				$(this).parents('.productright').find('.stock-num').html( _this.data.option[id].stock );
			})
		},
		//数量增加
		increase: function(){
			$('.amountincrease').click(function(){
				//拿到当前的数量
				var amount = parseInt( $(this).prev().val() );
				//获取库存(获取的都是字符串，所以下方比较的时候要转化)
				var stock = $('.stock-num').html();
				//判断与库存的关系
				if(amount >= stock) return;
				amount++;
				$(this).prev().val( amount );
			})
		},
		//数量减小
		decrease: function(){
			//拿到当前的数量
			$('.amountdecrease').click(function(){
				//拿到当前的数量
				var amount = parseInt( $(this).next().val() );
				//console.log(amount);
				if(amount <= 1) return;
				amount--;
				$(this).next().val( amount );
			})
		},
		//修改数量
		input: function(){
			//输入的时候要判断下输入的东西
			$('.amountnum').on('input',function(){
				var amount = $(this).val();
				// 如果是3d 的话 就要识别成 3, 用parseInt() 保留前面的数字
				if(amount === '') return;
				amount = parseInt( amount );
				if( isNaN(amount) ){
					amount = 1;
				}
				//判断库存
				var stock = $('.stock-num').html();
				if( amount >= stock){
					amount = stock;
				}
				//将数据塞回去
				$(this).val( amount );
			});
			//失焦之后，如果内容为空，就更改为1
			$('.amountnum').on('blur',function(){
				var amount = $(this).val();
				if(amount === ''){
					 $(this).val(1);
				};
			});
		},
		//添加购物车
		addToCart: function(){
			$('.prodrightaddcart').click(function(){
				var goods = $('.prodrightoptioncon .selected');
				var id = goods.data('id');
				var amount = parseInt( $('.amountnum').val() );
				//读取cookie
				//这里是做兼容,JSON.parse必须里面是json字符串，如果不是的话就报一个崩溃网页的错
				var cart = $.cookie('epet') || '{}';
				cart = JSON.parse(cart);

				//是否已经存储当前商品
				if(!cart[id]){   //如果不存在
					cart[id] = {
						id: id,
						amount: amount
					};
				}else{
					cart[id].amount += amount;
				}

				alert('加入成功');
				//重写cookie
				$.cookie('epet',JSON.stringify(cart),{expires: 365,path: '/'});

				console.log( JSON.parse( $.cookie('epet') ) );
			});
			
		}




	};
	return detailO;
	
});

/*
	分析： 商品的信息
	1、商品名称
	2、价格
	3、商品图片 （大图 小图）
	4、分类
		编号
		价格
		类型
		库存

	{
		gid: 10001,
		gname:  ,
		gprice:
		...
		color: {
			"1000101": {
				id: ,
				price: ,
				type: ,
				stock: 
			}
		}
	}
	
	怎么存储cookie？（cookie格式）
	cookie: 
		{
			"1000101": {
				id: "1000101",
				amount: 1
			},
			"1000102": {
				id: "1000102",
				amount: 1
			}
		}
 */

/*
			1、渲染颜色分类（读取数据）
			2、颜色的切换
			3、增加数量
			4、减少数量
			5、直接修改input
			6、加入购物车
		 */