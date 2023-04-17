require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRouter = require('./routes/todo.js')

const app = express()


// connect to db
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`)
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('connected to database!'))

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Health check! Server is running.')
})

app.use('/todo', todoRouter)

module.exports = app

// app.listen(port, () => {
//   console.log(`TODO REST API SERVER listening on port ${port}`)
// })
