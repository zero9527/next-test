"use strict";
exports.__esModule = true;
var express = require('express');
var next = require('next');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
app
    .prepare()
    .then(function () {
    var server = express();
    server.get('/p/:id', function (req, res) {
        var actualPage = '/post';
        var queryParams = { title: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
    // 匹配URL为 `/about/:id` 的路由，添加 `params 参数`，然后渲染 `/about` 对应的 `page/about.js` 文件
    server.get('/about/:id', function (req, res) {
        app.render(req, res, '/about', {
            id: req.params.id
        });
    });
    // 匹配URL为 `/detail/:id` 的路由，添加 `params 参数`，然后渲染 `/detail` 对应的 `page/detail.js` 文件
    server.get('/detail/:id', function (req, res) {
        app.render(req, res, '/detail', {
            id: req.params.id
        });
    });
    server.get('*', function (req, res) {
        // 设置一个资源前缀
        if (req.headers.host === 'my-app.com') {
            app.setAssetPrefix('http://cdn.com/myapp');
        }
        else {
            app.setAssetPrefix('');
        }
        return handle(req, res);
    });
    server.listen(3000, function (err) {
        if (err)
            throw err;
        console.log('> Ready on http://localhost:3000');
    });
})["catch"](function (ex) {
    console.log(ex.stack);
    process.exit(1);
});
