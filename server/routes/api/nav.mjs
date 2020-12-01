import express from "express";
const router = express.Router();

import RecordPost from "../../models/Post.mjs";
import RecordCategory from "../../models/Category.mjs";

router.get("/rgiontop", async (req, res) => {
  const r = await RecordPost.aggregate(
    [
      {
        $group: {
          _id: "$geo_locate.value",
          val: {
            $first: "$geo_locate.label"
          },
          count: {
            $sum: 1
          }
        }
      },
      {
        $sort: {
          count: -1
        }
      },
      {
        $limit: 10
      },
      {
        $project: {
          _id: 0,
          id: "$_id",
          label: "$val",
          count: "$count"
        }
      }
    ],
    function(error, data) {
      if (error) {
        res.status(400);
      }
      res.status(200).json(data);
    }
  );

  // res.json(await RecordCategory.find())
});

router.get("/humantop/:type", async (req, res) => {
  //link_source_agent_page_id
  const r = await RecordPost.aggregate(
    [
      {
        $lookup: {
          from: "Page",
          localField: "link_source_agent_page_id",
          foreignField: "page_id",
          as: "page"
        }
      },
      { $match: { "page.type_s.value": req.params.type } },
      {
        $group: {
          _id: "$link_source_agent_page_id",
          page: { $first: "$page" },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ],
    function(error, data) {
      if (error) {
        res.status(400);
      }
      res.status(200).json(data);
    }
  );

  // res.json(await RecordCategory.find())
});

router.get("/category", async (req, res) => {
  res.status(200).json(await RecordCategory.find());
});

export default router;
