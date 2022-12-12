const express = require('express')
const cors = require('cors')
const logger = require('morgan') // for seeing api calls in terminal
const PORT = 8000
const app = new express()

require('dotenv').config()

// connect to mongoDB
require('./middlewares/mongoDB')

app.use(cors()) //to connect frontend and backend without any disturbance
app.use(express.json()) // to recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

// API

const api = require('./routes/api')
app.use('/api',api)

app.use('/uploads', express.static('uploads')) 

app.listen(PORT, () => {
    console.log(`...........Server running at ${PORT}.............`)
})