import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  author_id: Number,
  description: String,
  mpp_avatar: {
    24: String,
    48: String,
    96: String,
    150: String,
    300: String,
    full: String
  },
  first_name: String,
  last_name: String
});

Record.index({ author_id: -1 });

export default mongoose.model("Author", Record, "Author");
