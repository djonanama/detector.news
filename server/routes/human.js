const express = require('express')
const router = express.Router()

const RecordPage = require('../models/Page')

router.get('/:id', async (req, res) => {
    const limit = 50
    const r = await RecordPage.aggregate([
         {$match: {page_id : Number(req.params.id) }}
        ,{$lookup: { from: "posts", localField: "page_id", foreignField: "link_source_agent_page_id", as: "post"}}
        ,{$unwind: '$post' }
        ,{$sort: {"post.date": -1}}
        ,{$limit: limit}
        ,{$lookup: { from: "pages", localField: "post.link_source_agent_page_id", foreignField: "page_id", as: "page"}}
     ], function(error, data){
           if (error){
            res.status(400)
           }
           res.json(data)
     });
})


module.exports = router