import express from "express";
const router = express.Router();

import PostModel from "../../models/Post.mjs";
import percentTruth from "./utils/percentTruth.mjs";

router.post("/", async (req, res) => {
  const p = req.body.p || 0;
  const l = req.body.l || 42;
  const viewPerc = req.body.viewPerc || 1;
  let agent = {
    path: "agent_val",
    select: "-_id -__v -modified -date -content -type_s"
  };
  let queryPT = {};
  let queryDB = {};
  let pt = {};
  let resData = {};

  if (p === 0 && viewPerc === 1) {
    pt = await percentTruth(queryPT);
  }

  resData = await PostModel.find(queryDB)
    //.sort({ date: -1 })
    .populate(agent)
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

  res.status(200).json({ data: resData, truth: pt });
});

router.post("/:type/:id", async (req, res) => {
  const p = req.body.p || 0;
  const l = req.body.l || 42;
  const viewPerc = req.body.viewPerc || 1;
  let agent = {
    path: "agent_val",
    select: "-_id -__v -modified -date -content -type_s"
  };
  let queryPT = {};
  let queryDB = {};
  let pt = {};
  let resData = {};

  switch (req.params.type) {
    case "region":
      queryDB = { "geo_locate.value": req.params.id };
      queryPT = queryDB;
      break;
    case "theme":
      queryDB = { categories: Number(req.params.id) };
      queryPT = queryDB;
      break;
    case "mass_media": //person || media ?????
      queryPT = { "page.type_s.value": req.params.id };
      agent.match = { "type_s.value": req.params.id };
      break;
    case "person":
    case "media":
      queryPT = { link_source_agent_page_id: Number(req.params.id) };
      queryDB = queryPT;
      break;
    case "truth":
      queryDB = { truth: Number(req.params.id) };
      break;
    case "tag":
      queryDB = { tags: Number(req.params.id) };
      queryPT = queryDB;
      break;
    case "author":
      queryDB = { author: Number(req.params.id) };
      queryPT = queryDB;
      break;
    default:
      res.status(404).json({
        state: "Not Found",
        req: req.params,
        body: { p, l },
        time: Date.now()
      });
  }

  if (p === 0 && viewPerc === 1 && req.params.type !== "truth") {
    pt = await percentTruth(queryPT);
  }
  console.log(queryDB);
  resData = await PostModel.find(queryDB)
    //.sort({ date: -1 })
    .populate(agent)
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

  res.status(200).json({ data: resData, truth: pt });
});

router.post("/:type/:id/truth/:tid", async (req, res) => {
  const p = req.body.p || 0;
  const l = req.body.l || 42;
  let agent = {
    path: "agent_val",
    select: "-_id -__v -modified -date -content -type_s"
  };
  let queryDB = {};
  let resData = {};

  switch (req.params.type) {
    case "region":
      queryDB = {
        "geo_locate.value": req.params.id,
        truth: Number(req.params.tid)
      };
      break;
    case "theme":
      queryDB = {
        categories: Number(req.params.id),
        truth: Number(req.params.tid)
      };
      break;
    case "mass_media": //person || media
      agent.match = { "type_s.value": req.params.id };
      queryDB = { truth: Number(req.params.tid) };
      break;
    case "person":
    case "media":
      queryDB = {
        link_source_agent_page_id: Number(req.params.id),
        truth: Number(req.params.tid)
      };
      break;
    case "tag":
      queryDB = { tags: Number(req.params.id), truth: Number(req.params.tid) };
      break;
    case "author":
      queryDB = {
        author: Number(req.params.id),
        truth: Number(req.params.tid)
      };
      break;
    default:
      res.status(404).json({
        state: "Not Found",
        req: req.params,
        body: { p, l },
        time: Date.now()
      });
  }

  resData = await PostModel.find(queryDB)
    //.sort({ date: -1 })
    .populate(agent)
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

  res.status(200).json({ data: resData });
});

export default router;
