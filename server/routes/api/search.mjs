const ES_HOST = process.env.ES_HOST || "http://localhost:9200";

import { Client } from "@elastic/elasticsearch";
const clientES = new Client({ node: ES_HOST });

import express from "express";
const router = express.Router();

import mPost from "../../models/Post.mjs";
import mPage from "../../models/Page.mjs";

async function Search(text, index, fields = []) {
  const t = text.split(" ").length == 1 ? "*" + text + "*" : text;
  const result = await clientES.search({
    index: "detector." + index,
    body: {
      query: {
        query_string: {
          query: t,
          fields: fields,
          analyze_wildcard: true,
          allow_leading_wildcard: true
        }
      }
    }
  });
  return {
    count: result.body.hits.total.value,
    ids: result.body.hits.hits.map(function(item) {
      return item["_source"][index + "_id"];
    })
  };
}

async function getItemsFact(type, ids, p = 0, l = 10) {
  let queryDB = {};
  let resData = {};
  switch (type) {
    case "post":
      queryDB = { post_id: { $in: ids } };
      resData = await mPost
        .find(queryDB)
        .sort({ date: -1 })
        .populate("agent_val", "-_id -__v -modified -date -content")
        .populate("truth_val", "-_id -__v")
        .skip(p * l)
        .limit(l)
        .select(
          "post_id date_of_statement message link_source_agent_page_id agent_val truth_val truth"
        )
        .lean();
      resData = resData.filter(dr => {
        return dr.agent_val !== null && dr.truth_val !== null;
      });
      break;
    case "page":
      queryDB = { page_id: { $in: ids } };
      resData = await mPage
        .find(queryDB)
        .sort({ date: -1 })
        .skip(p * l)
        .limit(l)
        .lean();
      break;
  }

  return { data: resData, count: resData.length };
}

router.get("/:search", async (req, res) => {
  const resPost = await Search(req.params.search, "post", [
    "title",
    "message",
    //"geo_locate.label",
    "content"
  ]);
  const getPost = await getItemsFact("post", resPost.ids);

  const resPage = await Search(req.params.search, "page", ["title", "content"]);
  const getPage = await getItemsFact("page", resPage.ids);

  res.status(200).json({ post: [resPost, getPost], page: [resPage, getPage] });
});

router.post("/find/:type", async (req, res) => {
  const ids = req.body.ids || [0];
  const p = req.body.p || 0;
  const l = req.body.l || 10;
  let data = {};

  switch (req.params.type) {
    case "post":
      data = await getItemsFact("post", ids, p, l);
      break;
    case "page":
      data = await getItemsFact("page", ids, p, l);
      break;
    default:
      res.status(400);
      break;
  }

  res.status(200).json(data);
});

export default router;
