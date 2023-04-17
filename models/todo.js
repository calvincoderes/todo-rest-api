const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  completedAt: {
    type: Date,
    required: false
  }
})

todoSchema.plugin(timestamp);


module.exports = mongoose.model('Todo', todoSchema)