import apiApp from "./routes/api/index.mjs";
import apiSyncWP from "./routes/SyncWP/sync-wp.mjs";
import { authenticate } from "./routes/SyncWP/authenticate.mjs";

const WP_SITEURL = process.env.WP_SITEURL || "http://localhost:9000";
const WP_HOSTL = process.env.WP_HOSTL || "http://localhost";

const CORS = async (req, res, next) => {
  res.append("Access-Control-Allow-Origin", [
    WP_HOSTL,
    WP_SITEURL,
    "http://localhost"
  ]);
  res.append("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
};

export const configureAPI = app => {
  app.use("/api", apiApp);
  app.use("/api/sync-wp", [CORS, authenticate], apiSyncWP);
};
