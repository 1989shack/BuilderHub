const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <h1>1989shack.com - Global Architecture Infrastructure Hosting Platform</h1>
    <p>Backbone: Node ${process.version} | Server: 192.168.8.3</p>
    <p>Owner: Martin M. Shariff - Global Village Network G.V.N.</p>
    <p>Status: BACKBONE ONLINE - Backyard for all incoming domains</p>
    <p>Repo: BuilderHub on GitHub</p>
  `);
});

server.listen(3000, () => {
  console.log('GAHP Backbone running on port 3000');
});
