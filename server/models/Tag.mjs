import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  tag_id: Number,
  count_link: Number,
  description: String,
  name: String,
  slug: String
});

Record.index({ tag_id: -1 });

export default mongoose.model("Tag", Record, "Tag");
