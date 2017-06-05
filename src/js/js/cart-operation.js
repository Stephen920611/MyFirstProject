define(['jquery','template','jquery.cookie'],function($,template,cookie){
	var cartO = {
		cart: {},
		data: {},
		cartCon: $('.cartcontentinsert'),
		init: function(){
			var _this = this;
			//读取cookie
			this.readCookie();
			$.getJSON('../../json/data.json',function(data){
				_this.data = data;
				//console.log(data);
				var result = {
					cart:_this.cart,
					data:data
				};
				//console.log(result);
				var list = template('cart-list',result);
				//console.log(list);
				_this.cartCon.html(list);
			});
			//更改数量
			this.increase();
			this.decrease();
			this.input();
			this.delete();
			this.deleteSelect();
			this.selectBox();
			this.selectAll();
		},
		//读取cookie
		readCookie: function(){
			this.cart = $.cookie('epet') || '{}';
			this.cart = JSON.parse( this.cart );
		},
		setCookie: function(){
			$.cookie('epet',JSON.stringify(this.cart),{expires: 365,path: '/'});
		},
		//数量增加
		increase: function(){
			var _this = this;
			this.cartCon.on('click','.cartcontentbottomb-increase',function(){
				//获取数量
				var amount = parseInt( $(this).prev().val() );
				/*//获取id
				var id = $(this).parents('.cartcontentbottom').data('id');*/
				var stock = $(this).parent().data('stock');
				
				if(amount >= stock) return;
				amount++;
				
				_this.handleMoney( $(this),amount );
			});
		},
		//数量减少
		decrease: function(){
			var _this = this;
			this.cartCon.on('click','.cartcontentbottomb-decrease',function(){
				//获取数量
				var amount = parseInt( $(this).next().val() );
				if(amount <= 1) return;
				amount--;
				
				_this.handleMoney( $(this), amount);
			});
		},
		//实时输入事件
		input: function(){
			var _this = this;
			this.cartCon.on('input','.cartcontentbottomb-num',function(){
				//获取数量
				var amount = parseInt( $(this).val() );
				
				if(amount === '') return;
				amount = parseInt( amount );
				if( isNaN(amount) ){
					amount = 1;
				}
				//判断库存
				var stock = $(this).parent().data('stock');
				//console.log(stock);
				if( amount >= stock){
					amount = stock;
				}
				
				_this.handleMoney( $(this), amount);
			});
		},
		//删除
		delete: function(){
			var _this = this;
			this.cartCon.on('click','.cartcontentbottomb-del',function(){
				if(confirm("真的要删除宝贝么？")){
					//点击确定删除，处理数据，从页面上删除
					$(this).parents('.cartcontentbottom').remove();
					//从cookie删除
					var id = $(this).parents('.cartcontentbottom').data('id');
					delete _this.cart[id];
					_this.setCookie();
				}else{
					console.log(2)
				}
			});
		},
		//批量删除
		deleteSelect: function(){
			var _this = this;
			$('.deleteSelect').click(function(){
				var allChecked = _this.cartCon.find('.box-check:checked');
				//遍历所有选中的商品，判断是否选中
				if( allChecked.length <= 0){
					alert('请选择商品');
					return;
				}else if( confirm("确认删除选中的商品吗？") ){
					allChecked.each(function(){
						//点击确定删除，处理数据，从页面上删除
						$(this).parents('.cartcontentbottom').remove();
						//从cookie删除
						var id = $(this).parents('.cartcontentbottom').data('id');
						delete _this.cart[id];
						_this.setCookie();

						//更新总价和全选
						_this.handleInfo();
						$('.selectAll').prop('checked',false);
					})
				}
			})
		},
		//选中
		selectBox: function(){
			var _this = this;
			this.cartCon.on('change','.box-check',function(){
				
				_this.handleInfo();
				var allChecked = _this.cartCon.find('.box-check:checked');
				//判断是否需要选中全选按钮
				var allCheckBox = _this.cartCon.find('.box-check');
				console.log(allCheckBox,allChecked);
				if( allChecked.length === allCheckBox.length){
					$('.selectAll').prop('checked',true);
				}else{
					$('.selectAll').prop('checked',false);
				}
			})
			
		},
		//全选按钮
		selectAll: function(){
			var _this = this;
			$('.selectAll').click(function(){
				//获取自己的状态
				var status = $(this).prop('checked');
				//所有商品状态
				_this.cartCon.find('.box-check').prop('checked',status);
				_this.cartCon.find('.box-check').change();
				
			})
		},
		//处理总价
		handleInfo: function(){
			//获取所有被选中的商品
			var allChecked = this.cartCon.find('.box-check:checked');
			//console.log( goods );

			var totalNum = 0;
			var totalMoney = 0;
			//遍历所有被选中的商品
			allChecked.each(function(){
				totalNum++;
				var m = $(this).parents('.cartcontentbottom').find('.cartcontentbottomb-total').html();
				totalMoney += parseFloat( m );
			})
			//console.log(totalNum,totalMoney);
			//判断是否可以结算
			if( totalNum > 0){
				$('.buy').addClass('go-buy');
			}else{
				$('.buy').removeClass('go-buy');
			}
			//更改件数和总价
			$('.carttotalright-num').html( totalMoney.toFixed(2) );
			$('.cartcontenttop-num').html( totalNum );
		},
		//点击加减处理金钱，封装成函数
		handleMoney: function(obj,amount){
			var money = amount * obj.parents('.cartcontentbottom')
			.find('.cartcontentbottomb-per').html();

			obj.parents('.cartcontentbottom')
			.find('.cartcontentbottomb-total').html( money.toFixed(2) );
			
			obj.parent().find('.cartcontentbottomb-num').val(amount);

			//改变cookie，也就是cart
			var id = obj.parents('.cartcontentbottom').data('id');
			this.cart[id].amount = amount;
			this.setCookie();
			this.handleInfo();
		}
		

	};
	return cartO;
	
});

/*
	1、读取 cookie  readCookie
	2、设置 cookie  setCookie
	3、将cookie中的数据渲染到页面上  initData
	4、数量增加
	5、数量减少
	6、直接输入
	7、删除 （单个删除  批量删除）
	8、选中
	9、结算信息填充
*/