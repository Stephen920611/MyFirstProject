﻿<?php 

	$cb = $_REQUEST["callback"];

	$json = '[
	{"id": 0 , "img": "https://img2.epetbar.com/2014-01/03/b673901a11db19aafdc0e0ae175544ce.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 成犬粮 15kg", "prePrice": "￥585.60", "nextPrice": "￥488.00", " unitPrice": "16.26元/斤", "saleAmount": "已售10744袋", "saleHudong": "3020人互动", "send": "东部大仓发货"},
	{"id": 1 , "img": "https://img2.epetbar.com/2016-06/06/10/24f86d3a9818329140b3f53dd37e1c6f.jpg@!200w-c", "title": "麦富迪 牛肉双拼系列 小型犬牛肉双拼成犬粮 2kg", "prePrice": "￥70.68", "nextPrice": "￥58.90", " unitPrice": "14.72元/斤", "saleAmount": "已售578袋", "saleHudong": "146人互动", "send": "东部大仓发货"},
	{"id": 2 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 3 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 4 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 5 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 6 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 7 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 8 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 9 , "img": "https://img2.epetbar.com/2014-01/03/b673901a11db19aafdc0e0ae175544ce.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 成犬粮 15kg", "prePrice": "￥585.60", "nextPrice": "￥488.00", " unitPrice": "16.26元/斤", "saleAmount": "已售10744袋", "saleHudong": "3020人互动", "send": "东部大仓发货"},
	{"id": 10 , "img": "https://img2.epetbar.com/2016-06/06/10/24f86d3a9818329140b3f53dd37e1c6f.jpg@!200w-c", "title": "麦富迪 牛肉双拼系列 小型犬牛肉双拼成犬粮 2kg", "prePrice": "￥70.68", "nextPrice": "￥58.90", " unitPrice": "14.72元/斤", "saleAmount": "已售578袋", "saleHudong": "146人互动", "send": "东部大仓发货"},
	{"id": 11 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 12 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 13 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 14 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 15 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 16 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 17 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 18 , "img": "https://img2.epetbar.com/2014-01/03/b673901a11db19aafdc0e0ae175544ce.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 成犬粮 15kg", "prePrice": "￥585.60", "nextPrice": "￥488.00", " unitPrice": "16.26元/斤", "saleAmount": "已售10744袋", "saleHudong": "3020人互动", "send": "东部大仓发货"},
	{"id": 19 , "img": "https://img2.epetbar.com/2016-06/06/10/24f86d3a9818329140b3f53dd37e1c6f.jpg@!200w-c", "title": "麦富迪 牛肉双拼系列 小型犬牛肉双拼成犬粮 2kg", "prePrice": "￥70.68", "nextPrice": "￥58.90", " unitPrice": "14.72元/斤", "saleAmount": "已售578袋", "saleHudong": "146人互动", "send": "东部大仓发货"},
	{"id": 20 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 21 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 22 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 23 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 24 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 25 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 26 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 27 , "img": "https://img2.epetbar.com/2014-01/03/b673901a11db19aafdc0e0ae175544ce.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 成犬粮 15kg", "prePrice": "￥585.60", "nextPrice": "￥488.00", " unitPrice": "16.26元/斤", "saleAmount": "已售10744袋", "saleHudong": "3020人互动", "send": "东部大仓发货"},
	{"id": 28 , "img": "https://img2.epetbar.com/2016-06/06/10/24f86d3a9818329140b3f53dd37e1c6f.jpg@!200w-c", "title": "麦富迪 牛肉双拼系列 小型犬牛肉双拼成犬粮 2kg", "prePrice": "￥70.68", "nextPrice": "￥58.90", " unitPrice": "14.72元/斤", "saleAmount": "已售578袋", "saleHudong": "146人互动", "send": "东部大仓发货"},
	{"id": 29 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 30 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 31 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 32 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 33 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 34 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 35 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 36 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 37 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 38 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 39 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 40 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 41 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 42 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 43 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 44 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 45 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 46 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 47 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 48 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 49 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"},
	{"id": 50 , "img": "https://img2.epetbar.com/2015-01/08/c3a4e8a1236e7e88c41570eac6a1aed1.jpg@!200w-c", "title": "伯纳天纯 天然低敏 中大型犬 幼犬粮 拆零500g", "prePrice": "￥20.50", "nextPrice": "￥17.00", " unitPrice": "10.16元/斤", "saleAmount": "已售3164袋", "saleHudong": "11446人互动", "send": "东部大仓发货"},
	{"id": 51 , "img": "https://img2.epetbar.com/2016-10/08/8/6f45eaf095ead9db1a451d87c396f5b6.jpg@!200w-c", "title": "冠能 大型犬幼犬全价犬粮 2.5kg", "prePrice": "￥708.00", "nextPrice": "￥559.00", " unitPrice": "23.29元/斤", "saleAmount": "已售5774袋", "saleHudong": "3065人互动", "send": "东部大仓发货"},
	{"id": 52 , "img": "https://img2.epetbar.com/2017-04/19/14/92f847ca0015e4c9e3ef9a89baf8b58e.jpg@!200w-c", "title": "比瑞吉 健康型天然粮 小型犬幼犬粮 10kg", "prePrice": "￥502.80", "nextPrice": "￥419.00", " unitPrice": "20.95元/斤", "saleAmount": "已售22489袋", "saleHudong": "10452人互动", "send": "东部大仓发货"},
	{"id": 53 , "img": "https://img2.epetbar.com/2016-05/18/16/e43e994606cc02d6f5a6d99681d57d80.jpg@!200w-c", "title": "鱼子酱Canine Caviar 特殊需求配方犬粮(低敏/减肥/老犬) 4.4磅(2kg) ", "prePrice": "￥186.00", "nextPrice": "￥165.00", " unitPrice": "41.25元/斤", "saleAmount": "已售10191袋", "saleHudong": "337人互动", "send": "香港1号仓发货"},
	{"id": 54 , "img": "https://img2.epetbar.com/2017-01/18/12/84040392433e470a4a496d5ecde8f6a7.jpg@!200w-c", "title": "宝路 金装中小型成犬粮 牛肉味2kg", "prePrice": "￥74.40", "nextPrice": "￥62.00", " unitPrice": "15.50元/斤", "saleAmount": "已售1091袋", "saleHudong": "66人互动", "send": "东部大仓发货"},
	{"id": 55 , "img": "https://img2.epetbar.com/2016-12/21/10/ad634e600ecfece56fc3874748f37467.png@!200w-c", "title": "耐吉斯SOLUTION 鸡肉+三文鱼配方幼犬粮 3磅/1.36kg", "prePrice": "￥155.00", "nextPrice": "￥125.00", " unitPrice": "45.95元/斤", "saleAmount": "已售688袋", "saleHudong": "279人互动", "send": "东部大仓发货"},
	{"id": 56 , "img": "https://img2.epetbar.com/2016-12/06/10/739497e637720c42e1eb3c00a1fcb706.jpg@!200w-c", "title": "海洋之星 深海鱼成犬粮 小颗粒 12kg", "prePrice": "￥780.00", "nextPrice": "￥680.00", " unitPrice": "28.33元/斤", "saleAmount": "已售14971袋", "saleHudong": "5955人互动", "send": "东部大仓发货"}
]';

	echo $cb. "(".$json.")";

 ?>
