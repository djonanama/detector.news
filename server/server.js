const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const history = require("connect-history-api-fallback");

// const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.set("port", port);

mongoose
  .connect("mongodb://detector-user:iZYWj3WL@database-mongodb:27017/detector", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //  useFindAndModify: false
  })
  // .useDb("detector")
  .then(db => console.log("[OK] " + db + " is connected!!!"))
  .catch(err => console.error(err));

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/records", require("./routes/records"));

app.use("/api/sync-wp", require("./routes/sync-wp"));

app.use("/api/Categories", require("./routes/categories"));

app.use("/api/post", require("./routes/post"));

app.use("/api/posts", require("./routes/posts"));

app.use("/api/search", require("./routes/search"));

app.use("/api/nav", require("./routes/nav"));

app.use("/api/human", require("./routes/human"));

app.use("/api/region", require("./routes/region"));

app.use("/api/truth", require("./routes/truth"));

app.use("/api/theme", require("./routes/theme"));

app.use("/api/tag", require("./routes/tag"));

app.use("/uploads", express.static(path.join(__dirname, "./upload_media")));

app.use(history());

app.use("/", express.static(path.join(__dirname, "../dist")));

app.listen(app.get("port"), () => {
  console.log(`[OK] Server is running on localhost:${app.get("port")}`);
});
