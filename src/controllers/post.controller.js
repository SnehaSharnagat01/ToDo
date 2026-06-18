import NoteModel from "../models/post.model.js";

export let createPostController = async (req, res) => {
    // console.log(req.body);
    
  try {
    let { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        message: "All Fields Are required!",
      });
    }

    let newNote = await NoteModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note Created Successfully!",
      newNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
