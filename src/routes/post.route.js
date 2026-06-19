import express from "express";
import {
  createNoteController,
  ReadNotesController,
} from "../controllers/post.controller.js";

let route = express.Router();

route.post("/createnote", createNoteController);
route.get("/allnotes", ReadNotesController);

export default route;
