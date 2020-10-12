const express = require('express')
const router = express.Router()

const mPost = require('../models/Post')
const mPage = require('../models/Page')

function Search (text, name) {
  return new Promise((resolve, reject) => {
    const model = name === 'page' ? mPage : mPost
    model.find(
        { $text: { $search: text } },
        { score: { $meta: 'textScore' } },
      )
    .exec(async function (err, data) {
      if (err) reject(err)
      var docs = data
      if (name === 'post'){
        var r = []
        for (var i = 0; i < docs.length; i += 1) {
          r.push(await mPage.find({"page_id": docs[i].link_source_agent_page_id }));

        }
        resolve({post:docs,page:r})
      }
      resolve(data)
     })

  })

}

router.get('/:search', async (req, res) => {
  const r = {
    pages: {
      count: 0,
      data: [],
    },
    posts: {
      count: 0,
      data: [],
    },
  }
  await Search(req.params.search, 'page').then(function (f) {
      r.pages.data = f
      r.pages.count = f.length
    }).catch(function (e) {
      res.json(e)
    })
  await Search(req.params.search, 'post').then(function (f) {
      r.posts.data = f
      r.posts.count = f.post.length
    }).catch(function (e) {
      res.json(e)
    })
    res.json(r)
})

module.exports = router
