const express = require('express')
const router = express.Router()

const Record = require('../models/Post')

const delay = delay =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, delay * 1000),
    );

const onTimeout = (delay, cb) => () => {
    cb(new Error('Response timeout'));
};


router.get('/:id', async (req, res) => {
  const limit = 50

  //await delay(5)

  const r = await Record.aggregate([
       {$match: {"post_id" : Number(req.params.id) }}
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
