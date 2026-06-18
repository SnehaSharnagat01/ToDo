import express from 'express'
import postRoute from './routes/post.route.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api',postRoute)

export default app