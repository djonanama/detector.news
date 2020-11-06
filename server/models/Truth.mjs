import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  truth_id: Number,
  label: String
});

Record.index({ truth_id: -1 });

export default mongoose.model("Truth", Record, "Truth");
