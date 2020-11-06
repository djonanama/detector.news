import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  page_id: Number,
  date: Date,
  modified: Date,
  title: String,
  fimg_url: String,
  content: String,
  type_s: {
    value: String,
    label: String
  }
});

Record.index({ page_id: -1 });

export default mongoose.model("Page", Record, "Page");
