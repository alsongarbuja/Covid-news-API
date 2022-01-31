const PORT = process.env.PORT || 8000

const express = require('express')
const routes = require('./src/routes/route');

const app = express()

app.use('/', routes)

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))