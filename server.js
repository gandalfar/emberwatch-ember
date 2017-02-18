const express = require('express');
const fastbootMiddleware = require('fastboot-express-middleware');

let app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!')
});

app.get('/*', fastbootMiddleware('dist'));

app.listen(3000, function () {
  console.log('FastBoot app listening on port 3000!');
});
