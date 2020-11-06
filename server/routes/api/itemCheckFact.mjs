import express from "express";
const router = express.Router();

import PostModel from "../../models/Post.mjs";

router.get("/post/:id", async (req, res) => {
  const usersSource = await PostModel.findOne({
    post_id: Number(req.params.id)
  })
    .populate("author_val", "-_id -__v")
    .populate("agent_val", "-_id -__v")
    .populate("tag_val", "-_id -__v")
    .populate("truth_val", "-_id -__v")
    .populate("categories_val", "-_id -__v")
    .select("-_id -__v")
    .lean();
  res.status(200).json(usersSource);
});

export default router;
