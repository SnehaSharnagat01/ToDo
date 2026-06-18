import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 15,
      required: [true,"Title Is Required"],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

let PostModel = mongoose.model("posts",postSchema)
export default PostModel
