const mongoose = require("mongoose");
const { Schema } = mongoose;

const Record = new Schema({
  tag_id: Number,
  count_link: Number,
  description: String,
  name: String,
  slug:String
});

module.exports = mongoose.model("Tag", Record);

