const TodoModel = require('../../models/todo')

// pagination
const createItem = async (formBody) => {

    const newItem = await TodoModel.create({
        title: formBody.title,
        description: formBody.description,
        creator: formBody.creator,
        status: formBody.status,
    })

    return newItem
}


module.exports = { createItem }