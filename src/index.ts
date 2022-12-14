const PORT = process.env.PORT || 8000

import express from 'express';
import { router} from './routes/route.js';

const app = express()

app.use('/', router)

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))