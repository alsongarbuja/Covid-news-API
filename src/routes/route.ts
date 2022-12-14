import express from 'express';

import { getNews, getNewsFromSingleSource } from '../controllers/news.js';
import { jsend } from '../helpers/jsend.js';

export const router = express.Router();

router.get('/', (_req, res) => res.json(jsend({ message: 'Thank you for using my API' })))
router.get('/news', getNews);
router.get('/singleSource/:newsId', getNewsFromSingleSource)