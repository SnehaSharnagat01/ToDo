import express from "express";
import {
  createNoteController,
  ReadNotesController,
  UpdateNotesController
} from "../controllers/post.controller.js";

let route = express.Router();

route.post("/createnote", createNoteController);
route.get("/allnotes", ReadNotesController);
route.patch("/notes/:id", UpdateNotesController);


export default route;
