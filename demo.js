const http = require('http');
const httpProxy = require('http-proxy');

const proxy = new httpProxy.createProxyServer();

http
  .createServer()
  .on('upgrade', async(req, socket, head) => {
      const browser = await puppeteer.launch();
      const target = browser.wsEndpoint();

      proxyy.ws(req, socket, head, { target })
  })
  .listen(8080);