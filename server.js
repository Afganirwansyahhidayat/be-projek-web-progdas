const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')

// connect to MongoDB
dotenv.config()

const app = express()

app.use(cors())