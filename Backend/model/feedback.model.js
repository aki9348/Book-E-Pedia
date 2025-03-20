import mongoose from "mongoose";

const feedSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});
const Feed = mongoose.model("Feed", feedSchema);

export default Feed;
