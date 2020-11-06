import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  categor_id: Number,
  count_link: Number,
  description: String,
  name: String,
  slug: String,
  parent_id: Number
});

Record.index({ categor_id: -1 });

export default mongoose.model("Category", Record, "Category");
