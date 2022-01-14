import express from "express";
import proxy from 'express-http-proxy';
import render from "./utils";

const app = express();

// node服务中当script发现请求加载一个静态资源的时候自动到public目录下面找
app.use(express.static("public"));

app.use('/api', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => {
    return `/api${req.url}`
  }
}))

app.get("*", (req, res) => {
  render(req, res);
  // res.send(render(req));
});

const server = app.listen(3000);
