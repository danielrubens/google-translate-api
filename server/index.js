const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const controller = require('./controllers/index.js')

const app = express()
dotenv.config()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT

app.get('/', controller.getLanguages)
app.post('/translate', controller.translate)


app.listen(PORT, () => console.log(`Project running on port ${PORT}`))