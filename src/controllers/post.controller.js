import NoteModel from "../models/post.model.js";

export let createNoteController = async (req, res) => {
  //   console.log(req.body);

  try {
    let { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        message: "All Fields Are required!",
      });
    }

    if (title.length < 3) {
      return res.status(400).json({
        message: "Title length must have 3 characters",
      });
    }

    if (description.length < 10) {
      return res.status(400).json({
        message: "description length must have 10 characters",
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

export let ReadNotesController = async (req, res) => {
  try {
    let allNotes = await NoteModel.find();

    return res.status(200).json({
      message: "Notes Fetches Successfully",
      allNotes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export let UpdateNotesController = async (req, res) => {
  try {
    let { id } = req.params;
    let { description } = req.body;

    if (!description)
      return res.status(400).json({ message: "description is required!" });

    let note = await NoteModel.findById(id);
    if (!note) {
      return res.status(400).json({
        message: "Note not found",
      });
    }

    console.log(note);
    note.description = description;
    await note.save();

    res.status(200).json({
      message: "Note updated Successfully!",
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export let DeleteNotesController = async (req, res) => {
  try {
    let { id } = req.params;

    let note = await NoteModel.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Note deleted Successfully!",
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
