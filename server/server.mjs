import { resolve } from "path";
import history from "connect-history-api-fallback";
import express from "express";
import morgan from "morgan";
import connectDb from "./connectDB.mjs";
import { configureAPI } from "./configure.mjs";

const PORT = process.env.BackEnd_PORT || 3000;
const HOST = process.env.BackEnd_HOST || "localhost";
const BackEnd_MODE = process.env.BackEnd_MODE || "prod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (BackEnd_MODE == "dev") {
  app.use(morgan("dev"));
}

// API
configureAPI(app);

// UI

app.use(
  "/uploads",
  express.static(resolve("/home/node/app/server/upload_media"))
);
try {
  let publicPath;
  publicPath = resolve("./dist");
  const staticConf = { maxAge: "1y", etag: false };
  app.use("/", history());
  app.use("/", express.static(publicPath, staticConf));
} catch (err) {
  console.error(err);
}

const startServer = () => {
  app.listen(PORT, () => {
    console.log(
      `[OK] DataBase connect and server is running on ${HOST}:${PORT}`
    );
  });
};

connectDb(0)
  .on("error", console.log)
  .on("disconnected", () => connectDb(100))
  .once("open", startServer);
