const TodoModel = require('../../models/todo')
const { defaultPageSize } = require('../../constants')

// pagination
const fetchAll = async (skip = 0, limit = defaultPageSize) => {
  let recordCount = 0;
  const todoList = await TodoModel.find()
    .sort({ createdAt: 'asc' })
    .skip(skip)
    .limit(limit)
    .lean()

  if (todoList) {
    recordCount = await TodoModel.find().countDocuments()
  }
  return {
    totalRecords: recordCount,
    data: todoList
  }
}



module.exports = { fetchAll }