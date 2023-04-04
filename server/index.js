import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(cors())

const CREDENTIALS = process.env.CREDENTIALS
const PORT = process.env.PORT

app.listen(PORT, () => console.log(CREDENTIALS))