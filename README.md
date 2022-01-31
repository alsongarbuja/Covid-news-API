<h1 align="center">Covid-news-API</h1>
<p align="center">API to extract covid news from different sources</p>
<p align="center">Check in <a href="https://rapidapi.com/magar33alson/api/covid-news5/">Rapid API hub</a></p>

<h3>Documentation</h3>

<h4>All Sources</h4>

- Get news related to covid-19 from different sources around the world including WHO, CNN, The guardian, and many more
- Endpoint: `/news`

Result
```
Status Code: 200 OK

{
  status: "success",
  data: {
    totalArticles: 100,
    articles: [
      {
        "title": "covid-19",
        "url": "https://www.bmj.com/coronavirus",
        "source": "BMJ"
      },
      {
        "title": "How can you help me integrate my long covid care?",
        "url": "https://www.bmj.com/content/376/bmj.n3102",
        "source": "BMJ"
      },
      {
        "title": "Does being pro-life mean getting COVID-19 vaccine? GOP Sen. Mitt Romney thinks so",
        "url": "https://www.deseret.com/utah/2021/7/29/22600079/does-pro-life-mean-getting-covid19-vaccine-mitt-romney-thinks-so-chris-stewart-mask-mandate",
        "source": "deseret"
      },
      {
        "title": "2 new omicron symptoms you won’t realize are from COVID",
        "url": "https://www.deseret.com/coronavirus/2022/1/30/22906210/new-omicron-symptoms-exhaustion-lower-back-pain",
        "source": "deseret"
      },
      {
        "title": "Utahns rally for health officials — not politicians — to determine COVID policies",
        "url": "https://www.deseret.com/utah/2022/1/29/22908648/health-officials-covid-policies-not-politicians-utahns-say-rally-heal-th-department-masks-vaccines",
        "source": "deseret"
      },
      {
        "title": "Can you get long COVID if you were vaccinated?",
        "url": "https://www.deseret.com/coronavirus/2022/1/29/22906231/long-covid-after-vaccinated-vaccination",
        "source": "deseret"
      },
      ...
    ]
  }
}
```

<h4>Single Source</h4>

- Get Covid related news from each source individually from this endpoint.
- Endpoint: `/singleSource/:newsId`

Result

```
Status Code: 200 OK

{
  status: "success",
  data: {
    totalArticles: 30,
    articles: [
      {
        "title": "Does being pro-life mean getting COVID-19 vaccine? GOP Sen. Mitt Romney thinks so",
        "url": "https://www.deseret.com/utah/2021/7/29/22600079/does-pro-life-mean-getting-covid19-vaccine-mitt-romney-thinks-so-chris-stewart-mask-mandate",
        "source": "deseret"
      },
      {
        "title": "2 new omicron symptoms you won’t realize are from COVID",
        "url": "https://www.deseret.com/coronavirus/2022/1/30/22906210/new-omicron-symptoms-exhaustion-lower-back-pain",
        "source": "deseret"
      },
      {
        "title": "Utahns rally for health officials — not politicians — to determine COVID policies",
        "url": "https://www.deseret.com/utah/2022/1/29/22908648/health-officials-covid-policies-not-politicians-utahns-say-rally-heal-th-department-masks-vaccines",
        "source": "deseret"
      },
      {
        "title": "Can you get long COVID if you were vaccinated?",
        "url": "https://www.deseret.com/coronavirus/2022/1/29/22906231/long-covid-after-vaccinated-vaccination",
        "source": "deseret"
      },
      ...
    ],
  }
}
```
- List of news ids

|**Source**|**News Id**|
|--|--|
|CNN|cnn|
|BMJ|bmj|
|Deseret|deseret|
|WHO|who|
|News Sky|newssky|
|Aljazeera|aljazeera|
|Medical News Today|medicalnewstoday|
|The guardian|theguardian|

*More will be added soon*

<h4>Queries</h4>

- `limit`: pass `?limit=10` to get only 10 articles at a time
- `page`: pass `?page=2` to get the articles in the page number for pagination

<br/>
<p>Thank you for using this API. Stay Safe</p>
