const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { title: req.params.id };
      
      app.render(req, res, actualPage, queryParams);
    });

    // 匹配URL为 `/about/:id` 的路由，添加 `params 参数`，然后渲染 `/about` 对应的 `page/about.js` 文件
    server.get('/about/:id', (req, res) => {
      app.render(req, res, '/about', {
        id: req.params.id
      })
    });

    server.get('*', (req, res) =>{
      // 设置一个资源前缀
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp');
      } else {
        app.setAssetPrefix('');
      }
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  })