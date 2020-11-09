import { resolve } from "path";
import history from "connect-history-api-fallback";
import express from "express";
import morgan from "morgan";
import connectDb from "./connectDB.mjs";
import { configureAPI } from "./configure.mjs";
const PORT = process.env.BackEnd_PORT || 3000;
const HOST = process.env.BackEnd_HOST || "localhost";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// API
configureAPI(app);

// UI
const publicPath = resolve("./dist");
const staticConf = { maxAge: "1y", etag: false };

app.use(express.static(publicPath, staticConf));
app.use("/", history());

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
