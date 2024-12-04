// // 必要なモジュールを読み込む
// const express = require('express'); // Express を使用する場合
// const app = express();

// // ポートを環境変数 PORT から取得、またはデフォルトで 8080 を使用
// const port = process.env.PORT || 8080;

// // ルートに簡単な応答を設定
// app.get('/', (req, res) => {
//   res.send('Hello, Azure App Service!');
// });

// // サーバーを起動してポートでリッスン
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// 必要なモジュールを読み込む
const express = require('express'); // Express を使用する場合
const path = require('path'); // パスモジュールを追加
const app = express();

// ポートを環境変数 PORT から取得、またはデフォルトで 8080 を使用
const port = process.env.PORT || 8080;

// 静的ファイルを提供する設定
app.use(express.static(path.join(__dirname, 'public')));

// ルートに簡単な応答を設定
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // index.html を送信
});

// サーバーを起動してポートでリッスン
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
