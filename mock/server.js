var app = require('koa')();
var router = require('koa-router')();


//首页广告
var homeAdData = require('./home/ad.js');
router.get('/api/homead',function *(next){
	this.body = homeAdData;
})


//开启服务
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);