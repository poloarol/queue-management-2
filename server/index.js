const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/post')
app.use('/api/post', posts)

const port = process.env.PORT || 3030

app.listen(port, () => console.log(`Server started on port :${port}`))