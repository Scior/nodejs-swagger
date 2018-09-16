const express = require('express');
const router = express.Router();
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.get('/api/v1/about', (req, res) => {
    res.send('about');
});

app.use('/', router);
app.listen(3008, () => {
    console.log('*_*');
});
