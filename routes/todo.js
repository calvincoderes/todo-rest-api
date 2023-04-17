const express = require('express')
const router = express.Router()

// services
const { fetchAll } = require('../services/todo/fetchAll')
const { createItem } = require('../services/todo/createItem')
const { fetchById } = require('../services/todo/fetchById')
const { updateItem } = require('../services/todo/updateItem')
const { deleteItem } = require('../services/todo/deleteItem')

// get all
router.get('/', async (req, res) => {
  try {
    const skip = req.query?.skip ?? null
    const limit = req.query?.limit ?? null
    const todoList = await fetchAll(skip, limit)

    const pages = Math.ceil(todoList.totalRecords / limit)
    const currentPage = Math.floor((skip / limit) + 1)
    res.status(200).json({
      pagination: {
        pages: pages < 1 ? 1 : pages,
        currentPage: currentPage < 1 ? 1 : currentPage,
        skip,
        limit,
      },
      totalRecord: todoList.totalRecords,

      count: todoList.data?.length ?? 0,
      data: todoList.data,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// get by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const item = await fetchById(id)
    if (!item) {
      res.status(404).json({message: "No records found."})
    }
    res.status(200).json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// create
router.post('/', async (req, res) => {
  try {
    const formBody = req.body
    const newItem = await createItem(formBody)
    res.status(201).json(newItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// update
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const formBody = req.body
    const updatedItem = await updateItem(id, formBody)
    res.status(200).json(updatedItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedItem = await deleteItem(id)
    res.status(200).json({ message: "Successfully deleted item", data: deletedItem })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router