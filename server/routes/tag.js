const express = require('express')
const router = express.Router()

const RecordPost = require('../models/Post')

router.get('/:id', async (req, res) => {
    const limit = 50
    const r = await RecordPost.find({tags :{ $in: [Number(req.params.id)] } },  
       function(error, data){
           if (error){
            res.status(400)
           }
           res.json(data)
     }).sort( { date : -1 } )
     .limit(limit)
     ;
})

module.exports = router