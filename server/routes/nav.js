const express = require('express')
const router = express.Router()

const RecordPost = require('../models/Post')
const RecordCategory = require('../models/Category')


router.get('/rgiontop', async (req, res) => {

    const r = await RecordPost.aggregate([
        {$group: {_id: "$geo_locate.label", count: {$sum:1} }}
        ,{$sort: {count: -1}}
        ,{$limit: 10}
        ,{$lookup: { from: "posts", localField: "_id", foreignField: "geo_locate.label", as: "posts"}}
     ], function(error, data){
           if (error){
            res.status(400)
           }
           res.json(data)
     });


   // res.json(await RecordCategory.find())
})


router.get('/humantop/:type', async (req, res) => {
    //link_source_agent_page_id
    const r = await RecordPost.aggregate([
        {$lookup: { from: "pages", localField: "link_source_agent_page_id", foreignField: "page_id", as: "page"}}
        ,{$match: { "page.type_s.value" : req.params.type } } 
        ,{$group: {_id: "$link_source_agent_page_id",page: { $first: "$page" }, count: {$sum:1} }}
        ,{$sort: {count: -1}}
        ,{$limit: 10}
        
     ], function(error, data){
           if (error){
            res.status(400)
           }
           res.json(data)
     });

     
   // res.json(await RecordCategory.find())
})




router.get('/category', async (req, res) => {
    res.json(await RecordCategory.find())
})


module.exports = router