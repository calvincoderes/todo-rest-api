const TodoModel = require('../../models/todo')

// pagination
const updateItem = async (id, formBody) => {

    const updateBody = Object.assign(
        {},
        formBody.title ? { title: formBody.title } : {},
        formBody.description ? { description: formBody.description } : {},
        formBody.creator ? { creator: formBody.creator } : {},
        formBody.status ? { status: formBody.status } : {},
    )
    
    const updatedItem = await TodoModel.findByIdAndUpdate(id,updateBody,  { new: true } )

    return updatedItem
}


module.exports = { updateItem }
