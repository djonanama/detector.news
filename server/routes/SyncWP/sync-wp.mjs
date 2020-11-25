import express from "express";
const router = express.Router();
// import LoadWPmedia from "./load_content.mjs";
import wploaddb from "./wp-load-db.mjs";
import transform from "./transform.mjs";
import loadData from "./loadData.mjs";

router.post("/:id", async (req, res) => {
  const { params, body } = req;
  //  console.log("Request MSG:", { params, body });
  const wld = new wploaddb();
  if (body.status === "publish" && body.type === "post") {
    let modelDatapost = {};
    await wld.loadObject("posts", params.id, (d, fnsubstring) => {
      modelDatapost = transform.posts(d, fnsubstring);
      loadData.posts.insUp(modelDatapost);
    });

    wld.loadObject("pages", modelDatapost.link_source_agent_page_id, function(
      d,
      fnsubstring
    ) {
      const modelData = transform.pages(d, fnsubstring);
      loadData.pages.insUp(modelData);
    });
    for (const tag_id in modelDatapost.tags) {
      wld.loadObject("tags", modelDatapost.tags[tag_id], function(
        d,
        fnsubstring
      ) {
        const modelData = transform.tags(d);
        loadData.tags.insUp(modelData);
      });
    }
    for (const category_id in modelDatapost.categories) {
      wld.loadObject(
        "categories",
        modelDatapost.categories[category_id],
        function(d, fnsubstring) {
          const modelData = transform.categories(d);
          loadData.categories.insUp(modelData);
        }
      );
    }

    wld.loadObject("users", modelDatapost.author, function(d, fnsubstring) {
      const modelData = transform.users(d, fnsubstring);
      loadData.users.insUp(modelData);
    });

    wld.loadObjectACF("truth", function(d) {
      let arrid = [];
      for (const truth in d) {
        arrid.push(truth);
        const modelData = transform.truth({ id: truth, label: d[truth] });
        loadData.truth.insUp(modelData);
      }
      loadData.truth.delinvert(arrid);
    });
  }
  if (body.status !== "publish" && body.type === "post") {
    loadData.posts.del([params.id]);
  }

  if (body.status === "publish" && body.type === "page") {
    wld.loadObject("pages", params.id, function(d, fnsubstring) {
      const modelData = transform.pages(d, fnsubstring);
      loadData.pages.insUp(modelData);
    });
  }
  if (body.status !== "publish" && body.type === "page") {
    loadData.pages.del([params.id]);
  }

  if (body.status === "publish" && body.type === "post_tag") {
    wld.loadObject("tags", params.id, function(d, fnsubstring) {
      const modelData = transform.tags(d);
      loadData.tags.insUp(modelData);
    });
  }
  if (body.status !== "publish" && body.type === "post_tag") {
    loadData.tags.del([params.id]);
  }

  if (body.status === "publish" && body.type === "category") {
    wld.loadObject("categories", params.id, function(d, fnsubstring) {
      const modelData = transform.categories(d);
      loadData.categories.insUp(modelData);
    });
  }
  if (body.status !== "publish" && body.type === "category") {
    loadData.categories.del([params.id]);
  }

  if (body.status === "publish" && body.type === "author") {
    wld.loadObject("users", params.id, function(d, fnsubstring) {
      const modelData = transform.users(d, fnsubstring);
      loadData.users.insUp(modelData);
    });
  }

  res.status(200).json({ state: "success" });
});

export default router;
