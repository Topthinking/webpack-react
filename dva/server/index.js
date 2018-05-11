const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const mock  = require('./mock')
const port = 8080
const app = express()
const watch = require('es-style/watch')

const compiler = watch(webpack(webpackConfig), app)

//const mockServer = require('../mock/server')

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'error',
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  noInfo: true,
  path: '/webpack-hmr',
  heartbeat: 2500
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
  })
})

app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)
//app.use(mock)
//mockServer(app)

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + 'http://localhost:' + port + '\n')
})

app.listen(port)
