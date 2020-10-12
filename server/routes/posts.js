const express = require('express')
const router = express.Router()

const Record = require('../models/Post')

router.get('/', async (req, res) => {
  res.json(await Record.find({}).limit(50))
})

router.get('/:id', async (req, res) => {
  let find = [req.params.id]
  const limit = 50
  if(Array.isArray(req.body.ids)){
    find = req.body.ids
  }
  res.json(await Record.find({ post_id: { $in: find } }).limit(limit))
})

router.get('/teg/:id', async (req, res) => {
 // res.json({qu:req.body,is:Array.isArray(req.params.id), param: req.params.id})
  let find = [req.params.id]
  const limit = 50
  if(Array.isArray(req.body.ids)){
    find = req.body.ids
  }
  res.json(await Record.find({ tags: { $in: find } }).limit(limit))
})






module.exports = router
