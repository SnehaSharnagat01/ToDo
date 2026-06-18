import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 2,
      maxLength: 15,
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

let NoteModel = mongoose.model("notes",noteSchema)
export default NoteModel
