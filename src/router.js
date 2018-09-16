const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

const apiBaseUrl = '/api/v1/';

router.get(apiBaseUrl + 'about', (req, res) => {
  res.send('about');
});

router.post(apiBaseUrl + 'alpaca', (req, res) => {
  res.json(req.body);
});

module.exports = router;
