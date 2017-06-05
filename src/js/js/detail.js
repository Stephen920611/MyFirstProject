/*
	详情页
 */

//配置文件
require(['../config'],function(){

	//加载需要用到的模块
	require(['jquery','magnifier','detail-operation'],function($,magnifier,detailO){

		magnifier.init();
		detailO.init();
	})
});
