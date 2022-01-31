const axios = require('axios').default
const cheerio = require('cheerio')

const newsSources = require('../data/newsSources')
const paginate = require('../helpers/paginate')
const jsend = require('../helpers/jsend')
const { sanitize, isText } = require('../helpers/validate')

const articles = []

newsSources.map(news => {
    axios.get(news.url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a', html).filter(':contains("coronavirus"), :contains("covid"), :contains("COVID")').each(function () {
            const title = sanitize($(this).text())
            if(isText(title)){
                const url = $(this).attr('href')

                let fullUrl = url
                if(url[0]==='/'){
                    fullUrl = news.base+fullUrl
                }
                articles.push({
                    title,
                    url: fullUrl,
                    source: news.name
                })
            }
        })
    }).catch(err => console.log(err))
})

const getNews = (req, res) => {
    const { limit, page } = req.query

    const { toSendArticles, options } = paginate(articles, limit, page)

    res.json(jsend({
        totalArticles: toSendArticles.length,
        ...options,
        articles: toSendArticles,
    }))
}

const getNewsFromSingleSource = (req, res) => {
    const { limit, page } = req.query
    const newsId = req.params.newsId

    const selectedNewsSource = newsSources.filter(n => n.sourceId===newsId)
    const newsUrl = selectedNewsSource[0].url
    const newsBase = selectedNewsSource[0].base

    axios.get(newsUrl)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const specificNews = []

        $('a', html).filter(':contains("coronavirus"), :contains("covid"), :contains("COVID")').each(function () {
            const title = sanitize($(this).text())
            if(isText(title)){
                const url = $(this).attr('href')

                let fullUrl = url
                if(fullUrl[0]==='/'){
                    fullUrl = newsBase+fullUrl
                }

                specificNews.push({
                    title,
                    url: fullUrl,
                    source: newsId
                })
            }
        })

        const { toSendArticles, options } = paginate(specificNews, limit, page)

        res.json(jsend({
            totalArticles: toSendArticles.length,
            ...options,
            articles: toSendArticles
        }))
    }).catch(err => {
        res.json(jsend({
            message: err
        }, 'fail'))
    })
}

module.exports = { getNews, getNewsFromSingleSource }