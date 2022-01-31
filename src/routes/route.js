const express = require('express')

const { getNews, getNewsFromSingleSource } = require('../controllers/news')

const router = express.Router();

router.get('/news', getNews);
router.get('/singleSource/:newsId', getNewsFromSingleSource)

module.exports = router;