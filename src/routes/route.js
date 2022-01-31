const express = require('express')

const { getNews, getNewsFromSingleSource } = require('../controllers/news');
const jsend = require('../helpers/jsend');

const router = express.Router();

router.get('/', (req, res) => res.json(jsend({ message: 'Thank you for using my API' })))
router.get('/news', getNews);
router.get('/singleSource/:newsId', getNewsFromSingleSource)

module.exports = router;