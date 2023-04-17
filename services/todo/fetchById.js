const TodoModel = require('../../models/todo')

// pagination
const fetchById = async (id) => {

    const todoItem = await TodoModel.findById(id)
        .lean()

    return todoItem
}


module.exports = { fetchById }