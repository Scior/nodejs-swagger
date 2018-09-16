const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', router);

const port = 3008;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
