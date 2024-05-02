const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()

const PORT = process.env.PORT || 5500 

dotenv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/employees',employeeRoutes)

app.listen(PORT, ()=>{
    console.log(`Server Started and running at ${PORT}`)
})

app.use('/', (req, res) =>{
    res.send("<h1>Welcome to EpiMax")
})