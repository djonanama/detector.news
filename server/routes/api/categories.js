const express = require('express')
const router = express.Router()

const Record = require('../models/Category')

router.get('/', async (req, res) => {
  res.json(await Record.find())
})

router.get('/:id', async (req, res) => {
  res.json(await Record.find({ categor_id: Number(req.params.id) }))
})

module.exports = router
