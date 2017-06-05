
require(['config'],function(){
	require(['jquery','banner','madbuying','dogFood','headline','praise','floor','indexcookie'],function($,banner,madbuying,dogFood,headline,praise,floor){
		banner.init();
		madbuying.init();
		dogFood.init();
		headline.init();
		praise.init();
		floor.init();
	});
});