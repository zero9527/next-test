const express = require('express');
const next = require('next');
import * as http from "http";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

type RouterCallbackParamsReq = {
  req: http.IncomingMessage,
  params?: any,
  headers?: any,
  [prop: string]: any
}

type RouterCallbackParamsRes = {
  res: http.ServerResponse,
  [prop: string]: any
}

type TypeError = {
  [prop: string]: any
}

app
  .prepare()
  .then(() => {
    const server = express();

    // 匹配URL为 `/about` 的路由，然后渲染 `/about` 对应的 `page/about.tsx` 文件
    server.get('/about', (req: RouterCallbackParamsReq, res: RouterCallbackParamsRes) => {
      app.render(req, res, '/about')
    });

    // 匹配URL为 `/detail/:id` 的路由，添加 `params 参数`，然后渲染 `/detail` 对应的 `page/detail.tsx` 文件
    server.get('/detail/:id', (req: RouterCallbackParamsReq, res: RouterCallbackParamsRes) => {
      app.render(req, res, '/detail', {
        id: req.params.id
      })
    });

    server.get('*', (req: RouterCallbackParamsReq, res: RouterCallbackParamsRes) => {
      // 设置一个资源前缀
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp');
      } else {
        app.setAssetPrefix('');
      }
      return handle(req, res);
    });

    server.listen(3000, (err: TypeError) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex: TypeError) => {
    console.log(ex.stack);
    process.exit(1);
  })
