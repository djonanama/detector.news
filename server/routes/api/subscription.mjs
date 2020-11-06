import express from "express";
const router = express.Router();
import SubscriptionModel from "../../models/Subscription.mjs";

router.get("/", async (req, res) => {
  res
    .status(200)
    .json(await SubscriptionModel.find().select("email date -_id"));
});

router.post("/", async (req, res) => {
  SubscriptionModel.updateMany(
    { email: req.body.email },
    req.body,
    {
      upsert: true,
      setDefaultsOnInsert: true
    },
    function(e, r) {
      if (e) {
        console.log("loadData ERROR");
        console.log(e);
        console.log(r);
      }
    }
  );
  res.status(201).json({ state: "success" });
});

router.delete("/:email?", async (req, res) => {
  await SubscriptionModel.findOneAndDelete({ email: req.params.email || req.body.email },
    function(e, r) {
      if (e) {
        console.log("loadData ERROR");
        console.log(e);
        console.log(r);
      }
    });
  res.status(202).json({ state: "deleted" });
});

export default router;
