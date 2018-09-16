const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

const apiBaseUrl = '/api/v1/';

router.get(apiBaseUrl + 'about', (req, res) => {
  res.send('about');
});

module.exports = router;
