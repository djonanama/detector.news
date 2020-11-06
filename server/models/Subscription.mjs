import mongoose from "mongoose";
const { Schema } = mongoose;

const Record = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  email: String
});
export default mongoose.model("Subscription", Record, "Subscription");
