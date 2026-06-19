import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
            minlength: [3, "Title must be at least 3 characters"],
      maxLength: 15,
      required: [true, "Title Is Required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },
  },
  {
    timestamps: true,
  },
);

let NoteModel = mongoose.model("notes", noteSchema);
export default NoteModel;
