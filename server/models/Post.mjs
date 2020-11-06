import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema(
  {
    post_id: Number,
    date: Date,
    modified: Date,
    title: String,
    fimg_url: String,
    content: String,
    link_source_agent_page_id: Number,
    link_source: String,
    geo_locate: {
      value: String,
      label: String
    },
    categories: [Number],
    tags: [Number],
    truth: Number,
    date_of_statement: Date,
    message: String,
    author: Number
  },
  { toObject: { virtuals: true }, id: true }
);

Record.index({ post_id: -1, date: -1 });

Record.virtual("categories_val", {
  localField: "categories",
  ref: "Category",
  foreignField: "categor_id",
  justOne: false
});

Record.index({ post_id: -1, categories: 1 });

Record.virtual("tag_val", {
  localField: "tags",
  ref: "Tag",
  foreignField: "tag_id",
  justOne: false
});

Record.index({ post_id: -1, tags: 1 });

Record.virtual("truth_val", {
  localField: "truth",
  ref: "Truth",
  foreignField: "truth_id",
  justOne: true
});

Record.index({ post_id: -1, truth: 1 });

Record.virtual("agent_val", {
  localField: "link_source_agent_page_id",
  ref: "Page",
  foreignField: "page_id",
  justOne: true
});

Record.index({ post_id: -1, link_source_agent_page_id: 1 });

Record.virtual("author_val", {
  localField: "author",
  ref: "Author",
  foreignField: "author_id",
  justOne: true
});

Record.index({ post_id: -1, author: 1 });

export default mongoose.model("Post", Record, "Post");
