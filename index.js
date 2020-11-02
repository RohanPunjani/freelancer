// imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/auth')
const taskRoutes = require('./routes/task')
const freelancerRoutes = require('./routes/freelancer')

// App
const app = express()
dotenv.config()

// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/user', userRoutes)
app.use('/api/freelancer', freelancerRoutes)
app.use('/api/task', taskRoutes)

// DB connection
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> {
    console.log("Connected to the DB");
})

// Listening :)
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("server up and running at port ", port)
})
