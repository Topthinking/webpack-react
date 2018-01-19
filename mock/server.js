
module.exports = (app) => {

    //首页广告
    var homeAdData = require('./home/ad.js');
    app.get('/api/homead', function(req,res) {
        res.send(homeAdData)
    })

    //列表
    var homeListData = require('./home/list.js');
    app.get('/api/homelist/:city/:page', function(req,res) {
        const params = req.params;
        const paramsCity = params.city;
        const paramsPage = params.page;

        console.log("当前城市：" + paramsCity);
        console.log("当前页数：" + paramsPage);

        res.send(homeListData)
    });

    // 搜索结果页 - 搜索结果 - 三个参数
    var searchListData = require('./search/list.js')
    app.get('/api/search/:page/:city/:category/:keyword', function(req,res) {
        // 参数
        const params = req.params
        const paramsPage = params.page
        const paramsCity = params.city
        const paramsCategory = params.category
        const paramsKeyword = params.keyword

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)
        console.log('关键字：' + paramsKeyword)

        res.send(searchListData)
    })
    // 搜索结果页 - 搜索结果 - 两个参数
    app.get('/api/search/:page/:city/:category', function(req,res) {
        // 参数
        const params = req.params
        const paramsPage = params.page
        const paramsCity = params.city
        const paramsCategory = params.category

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)

        res.send(searchListData)
    })

    // 详情页 - 商户信息
    const detailInfo = require('./detail/info.js')
    app.get('/api/detail/info/:id', function(req,res) {
        console.log('详情页 - 商户信息')

        const params = req.params
        const id = params.id

        console.log('商户id: ' + id)

        res.send(detailInfo)
    })

    // 详情页 - 用户评论
    const detailComment = require('./detail/comment.js')
    app.get('/api/detail/comment/:page/:id', function(req,res) {
        console.log('详情页 - 用户点评')

        const params = req.params
        const page = params.page
        const id = params.id

        console.log('商户id: ' + id)
        console.log('当前页数: ' + page)

        res.send(detailComment)
    })
}