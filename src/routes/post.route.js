import express from 'express'
import { createPostController } from '../controllers/post.controller.js'

let route  = express.Router()

route.post("/createnote", createPostController)

export default route