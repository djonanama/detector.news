import express from "express";
import { resolve } from "path";
const router = express.Router();

import itemListCheckFact from "./itemListCheckFact.mjs";
import itemCheckFact from "./itemCheckFact.mjs";
import nav from "./nav.mjs";
import subscription from "./subscription.mjs";
import search from "./search.mjs";

router.use("/items", itemListCheckFact);
router.use("/item", itemCheckFact);
router.use("/nav", nav);
router.use("/subscription", subscription);
router.use("/search", search);

export default router;
