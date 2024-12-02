// index.js
const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
  // レスポンスヘッダーを設定
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // レスポンスの本文
  res.end('Hello, World from Node.js using Node 20 LTS!\n');
});

// サーバーをポート3000で待機
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
