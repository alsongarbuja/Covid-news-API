const paginate = (articles, limit, page) => {
    let options = {}
    let toSendArticles = articles

    if(limit && page){
        const newStart = limit*(page-1)
        toSendArticles = toSendArticles.slice(newStart, limit*page)
        options = {
            limit: limit,
            page: page,
        }
    }
    if(limit && !page){
        toSendArticles = toSendArticles.slice(0, limit)
        options =  {
            limit: limit,
        }
    }
    if(page && !limit){
        const newStart = 10*(page-1)
        toSendArticles = toSendArticles.slice(newStart, 10*page)
        options = {
            limit: 10,
            page: page,
        }
    }

    return {toSendArticles, options}
}

module.exports = paginate