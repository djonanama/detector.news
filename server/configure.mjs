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

const CORSall = async (req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
};

const deb = async (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  next();
};

export const configureAPI = app => {
  app.use("/api", [CORSall, deb], apiApp);
  app.use("/api/sync-wp", [CORSall, authenticate], apiSyncWP);
};
