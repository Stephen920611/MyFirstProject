/*
	配置文件
*/

require.config({
	baseUrl: '../js',
	paths: {
		'jquery': 'lib/jquery-1.11.3',
		'banner': 'js/banner',
		'register': 'js/register',
		'login': 'js/login',
		"jquery.cookie": "plug/jquery.cookie",
		"template": "plug/template",
		'indexcookie': 'js/indexcookie',
		'detail': 'js/detail',
		'madbuying': 'js/madbuying',
		'dogFood': 'js/dogFood',
		'headline': 'js/headline',
		'praise': 'js/praise',
		'floor': 'js/floor',
		'magnifier': 'js/magnifier',
		'goods-list': 'js/goods-list',
		'activity': 'js/activity',
		'detail-operation': 'js/detail-operation',
		'cart': 'js/cart',
		'cart-operation': 'js/cart-operation'
	},
	//处理非AMD规范的js文件    指定某个文件的依赖  || 暴露接口
	shim: {
		'banner': ['jquery'],
		'register': ['jquery'],
		'login': ['jquery'],
		'detail': ['jquery'],
		'cart': ['jquery'],
		"jquery.cookie": ['jquery'],
		'template': ['jquery']
	}
});