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
// const route = express.Router()

app.get('/', (_req, res) => { res.send()})
app.post('/translate', controller.translate)
app.post('/detect', controller.detect)

app.listen(PORT, () => console.log(`Project running on port ${PORT}`))