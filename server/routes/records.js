const express = require('express')
const router = express.Router()

const Record = require('../models/Record')

router.get('/', async (req, res) => {
  res.json(await Record.find())
})

router.post('/', async (req, res) => {
  const record = new Record(req.body)
  await record.save()
  const output = `
       <p>You have a new message from MEVN-course:</p>
       <ul>
         <li>name: ${req.body.name}</li>
         <li>email: ${req.body.email}</li>
         <li>address: ${req.body.address}</li>
         <li>gender: ${req.body.gender}</li>
       </ul>
     `

  res.json({ state: 'success' })
})

router.get('/:id', async (req, res) => {
  res.json(await Record.findById(req.params.id))
})

router.put('/:id', async (req, res) => {
  await Record.findByIdAndUpdate(req.params.id, req.body)
  res.json({ state: 'updated' })
})

router.delete('/:id', async (req, res) => {
  await Record.findByIdAndRemove(req.params.id)
  res.json({ state: 'deleted' })
})

module.exports = router
