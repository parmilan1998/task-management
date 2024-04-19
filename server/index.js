import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskRoute from './routes/taskRoute.js'

// initialize the express app
const app = express()

// environment configuration
dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/tasks', taskRoute)

// server
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

// Database connection
// const MONGODB_URL = process.env.MONGODB_URL
mongoose
  .connect('mongodb+srv://mern:mern@cluster0.qg7jt2d.mongodb.net/')
  .then(() => {
    console.log('Mongodb connection successfully!..')
  })
  .catch((error) => {
    console.log('Mongodb connection error', error)
  })
