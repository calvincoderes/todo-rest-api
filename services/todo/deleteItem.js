const TodoModel = require('../../models/todo')


const deleteItem = async (id) => {

  const deletedItem = await TodoModel.findByIdAndDelete(id)
  return deletedItem
}


module.exports = { deleteItem }
