const express = require('express')
const router = express.Router()

const RecordPost = require('../models/Post')
// post_id: { $in: req.params.id }
router.get('/:id', async (req, res) => {
    const limit = 50

    const r = await RecordPost.aggregate([
        {$match: {"categories" : Number(req.params.id) }}
       ,{$sort: {date: -1}}
       ,{$limit: limit}
       ,{$lookup: { from: "pages", localField: "link_source_agent_page_id", foreignField: "page_id", as: "page"}}
    ], function(error, data){
          if (error){
           res.status(400)
          }
          res.json(data)
    });
})

module.exports = router