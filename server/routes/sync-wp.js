const express = require('express')
const router = express.Router()
const LoadWPmedia = require('../models/load_content.js')

router.post('/:id', async (req, res) => {

  const { params, body } = req
  //console.log('Request MSG:', { params, body })
  // console.log(process.env)
  const lwp = new LoadWPmedia()
  if (body.status === 'publish' && body.type === 'post') {
    await lwp.loadPostMedia(params.id)
  }
  if (body.status !== 'publish' && body.type === 'post') {
    lwp.DelPost([params.id])
  }

  if (body.status === 'publish' && body.type === 'page') {
    lwp.loadPage([params.id])
  }
  if (body.status !== 'publish' && body.type === 'page') {
    lwp.DelPage([params.id])
  }

  if (body.status === 'publish' && body.type === 'post_tag') {
    lwp.loadTags([params.id])
  }
  if (body.status !== 'publish' && body.type === 'post_tag') {
    lwp.DelTags([params.id])
  }

  if (body.status === 'publish' && body.type === 'category') {
    lwp.loadCategories([params.id])
  }
  if (body.status !== 'publish' && body.type === 'category') {
    lwp.DelCategories([params.id])
  }

  res.status(200).json({ state: 'success' })

})

module.exports = router
