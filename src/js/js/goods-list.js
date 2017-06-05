/*
	列表页
 */

//配置文件
require(['../config'],function(){

	//加载需要用到的模块
	require(['jquery'],function($){

		$(function(){

			function GoodsList(){
				this.listCon = $('.list-bottom-con');
			}
			GoodsList.prototype.init = function(){
				$.ajax({
					url: "http://localhost/workspace/trunk/wangkai/e-pet/src/json/goods-list.php",
					dataType: 'jsonp'
				})
				.then(function(res){
					var html = "";
					console.log(res);
					
					$.each(res,function(index,obj){
						
						html += '<div class="list-bottom-con">'+
									'<div class="list-bottom-content">'+
										'<div class="list-bottom-content-img">'+
											'<a href="detail.html"><img src="'+ obj.img +'"></a>'+
										'</div>'+
										'<div class="list-bottom-content-text">'+
											'<a href="detail.html">'+
												'<span>'+ obj.title +'</span>'+
											'</a>'+
										'</div>'+
										'<div class="list-bottom-content-price">'+
											'<span>'+ obj.prePrice +'</span>'+
											'<span>'+ obj.nextPrice +'</span>'+
											'<span>'+ obj.unitPrice +'</span>'+
										'</div>'+
										'<div class="list-bottom-content-sale">'+
											'<em>'+ obj.saleAmount +'</em>'+
											'<em>'+ obj.saleHudong +'</em>'+
										'</div>'+
										'<div class="list-bottom-content-send">'+ obj.send +'</div>'+
										'<div class="list-bottom-content-cart">'+
											'加入购物车'+
										'</div>'+
									'</div>'+
								'</div>'
					})

					$('.list-bottom').html( html );
				})
			}
			var goodsList = new GoodsList();
			goodsList.init();
		})
	
	})
});
